const port = 9000;
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require("cors")
const path = require('path')
const app = express()
const Users = require('./Models/ProductModel')
const loginusers = require('./Models/LoginModel')
const jwt = require('jsonwebtoken');
const { rmSync } = require('fs');
///////////////////////////////////////////
app.use(express.json())
app.use(cors())
app.use('/images', express.static('uploads/images'))

mongoose.connect('mongodb://127.0.0.1:27017/Adminpanel').then(() => console.log('Database Created')).catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination: 'uploads/images', // Assuming 'uploads' is in the root of your project
    filename: (req, file, cb) => {
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
////////////////////////////////////////////////////////
const uploads = multer({ storage: storage });

app.post('/upload', uploads.single('image'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});
///////////////////////////////////////////////////////


app.post('/addproducts', uploads.single('image'), async (req, res) => {
    const { name, category, old_price, new_price, image, id } = req.body;
    const database = Users.create({
        name: name,
        category: category,
        old_price: old_price,
        new_price: new_price,
        id: Date.now(),
        image: `http://localhost:${port}/images/${req.file.filename}`
    })
    res.status(200).json(database)
})

///////////////////////////////////////////////////////



app.get('/addproducts', async (req, res) => {
    const getelement = await Users.find()
    res.json(getelement)
})

///////////////////////////////////////////////////////



app.delete('/addproducts/:id', async (req, res) => {
    const { id } = req.params
    console.log('the id is', id)
    const deleteitem = await Users.findByIdAndDelete({ _id: id })
    res.status(203).json(deleteitem)
})


///////////////////////////////////////////////////////
app.post('/signup', async (req, res) => {
    const { Username, email, password, cart } = req.body;
    const newusers = new loginusers({
        Username: Username,
        email: email,
        password: password,
        cart: [],
    })
    // res.status(210).json(newusers)
    await newusers.save()

    const data = {
        newusers: {
            id: newusers.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
})

///////////////////////////////////////////

app.get('/login', async (req, res) => {
    const getusers = await loginusers.find()

})
///////////////////////////////////////////
let loginusersdata;
app.post('/login', async (req, res) => {

    const { email, password } = req.body

    loginusersdata = await loginusers.findOne({ email: email })

    if (loginusersdata) {
        const comppassword = loginusersdata.password === req.body.password;
        if (comppassword) {
            const data = {
                loginusersdata: {
                    id: loginusersdata.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom')
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "wrong Password" });
        }
    }
    else {
        res.json({ success: false, errors: "Email Not Found" })
    }

    // console.log(loginusersdata)
})
/////////////////////////////////////////////////////////
const fetchusers = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ success: false, errors: 'Please aunthatucate using valid token.' })
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom')
            req.loginusersdata = data.loginusersdata;
            next();
        }
        catch (err) {

            res.status(401).send({ errors: err })
            console.log(err)
        }
    }

}

// app.post('/cart', fetchusers, async (req, res) => {
//     // console.log(req.body, req.loginusersdata);
//     let userdata = await loginusers.findOne({ _id: req.loginusersdata.id })
//     let update = await loginusers.findByIdAndUpdate({ _id: req.body._id }, { cart: req.body }, { new: true })
//     // let update = await loginusers.findOneAndUpdate({ _id: req.loginusersdata.id }, { $push: { cart: req.body } }, { new: true })
//     console.log("the updateis", userdata)
//     res.json(update)
// })

// app.get('/cart', fetchusers, async (req, res) => {
//     let userData = await loginusers.findOne({ _id: req.loginusersdata.id })
//     res.json(userData)
//     console.log('The get item si ', userData)
// })


// app.post('/getcart', fetchusers, async (req, res) => {
//     console.log('GET /cart route triggered');
//     try {
//         let userData = await loginusers.findOne({ _id: req.loginusersdata.id });
//         res.json(userData.email);
//         console.log('The get item is ', userData.password);
//     } catch (error) {
//         console.error('Error fetching cart:', error);
//         res.status(500).send({ success: false, errors: 'Internal Server Error' });
//     }
// });










app.listen(port)
