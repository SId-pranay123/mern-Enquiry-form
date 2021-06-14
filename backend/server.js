const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(buildPath));
mongoose.connect("mongodb://localhost/contact-usdb", {  useUnifiedTopology: true,
useNewUrlParser: true,});


const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const Contact = mongoose.model("Contact", contactUsSchema);



app.post('/', (req, res) => {
  console.log(req.body);
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  })
  newContact.save();
  res.send(req.body);
});


app.listen(3000, function(){
    console.log("Server Started at port 3000.")
})