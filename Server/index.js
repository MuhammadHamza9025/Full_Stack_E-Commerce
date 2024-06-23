const port = 9000;
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const cors = require("cors")
const path = require('path')
const Users = require('./Models/ProductModel')
const loginusers = require('./Models/LoginModel')
const jwt = require('jsonwebtoken');
const { rmSync } = require('fs');
const app = express()
///////////////////////////////////////////
app.use(express.json())
app.use(cors())
app.use('/images', express.static('uploads/images'))

mongoose.connect('mongodb+srv://Hamza:2vFfwKwATPXWmJy8@social.0drhd5s.mongodb.net/Adminpanel').then(() => console.log('Database Created')).catch((err) => console.log(err))

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
    // const newid = await Users.countDocuments()
    // console.log(newid + 1)
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
///////////////////////////////////////////////
// Popular in Women 

app.get('/newcollection', async (req, res) => {
    const newcommectoin = await Users.find()
    res.json(newcommectoin.slice(-8).slice(-8))

})


///////////////////////////////////////////////////////
app.post('/signup', async (req, res) => {
    const { Username, email, password, cart } = req.body;

    const duplicateEmail = await loginusers.findOne({ email: email })
    if (duplicateEmail) {
        res.json({ message: "Email Alreay in Use !" })

    }
    else if (!duplicateEmail) {


        if (Username && email && password) { //Check all the info is given or not


            const newusers = new loginusers({
                Username: Username,
                email: email,
                password: password,
                cart: [],
                id: Date.now()
            })
            // res.status(210).json(newusers)
            await newusers.save()

            const data = {
                newusers: {
                    id: newusers.id
                }
            }

            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token, message: 'Successfully Signed in !' })

        }
        else { res.json({ success: false, message: 'Please Provide All Details !' }) }
    }


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


////////////////////////////////////////////////

app.get('/users', async (req, res) => {
    const getusers = await loginusers.find()
    res.json(getusers)
})

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const newusers = await loginusers.findByIdAndDelete({ _id: id })
    res.json(newusers)


})

/////////////////////////////////////////////////////////
const fetchusers = async (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token)
    if (!token) {
        res.status(401).send({ success: false, errors: 'Please aunthatucate using valid token.' })
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom')
            req.loginusersdata = data.loginusersdata;
            // console.log('the data is', data.loginusersdata)

            next();
        }
        catch (err) {

            res.status(401).send({ errors: err })
            console.log(err)
        }
    }

}
////////////////////////////////////////

app.post('/cart', fetchusers, async (req, res) => {

    let update = await loginusers.updateOne({ id: req.loginusersdata.id }, { $push: { cart: req.body } }, { new: true }).then(() => console.log('Updtaed')).catch((err) => console.log(err))


})

app.post('/getcart', fetchusers, async (req, res) => {
    let userData = await loginusers.findOne({ id: req.loginusersdata.id })
    res.json(userData)
    // console.log('The get item si ', req.loginusersdata.id)
})


app.delete('/getcart/:id', fetchusers, async (req, res) => {

    console.log(req.params.id)
    const nnn = await loginusers.findOneAndUpdate({ id: req.loginusersdata.id, }, { $pull: { cart: { _id: req.params.id } } }, { new: true })
    res.json(nnn.cart)



})






app.listen(port)
