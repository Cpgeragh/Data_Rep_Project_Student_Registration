const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.gg1uhaj.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Defined a Schema
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  picture: String,
  idNumber: String,
  dateOfBirth: Date,
  expiryDate: Date,
});

// Mongoose Model
const studentModel = mongoose.model('students', studentSchema);

// Express Put Route for Updating a Student by ID
app.put('/api/student/:id', async (req, res) => {
  console.log("Update: " + req.params.id)
  let student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
})

// Express Post Route for Creating a Student
app.post('/api/student', (req, res) => {
  console.log(req.body);
  studentModel.create({
    name: req.body.name,
    course: req.body.course,
    picture: req.body.picture,
    idNumber: req.body.idNumber,
    dateOfBirth: req.body.dateOfBirth,
    expiryDate: req.body.expiryDate,
  })
    .then(() => { res.send("Student Created") })
    .catch(() => { res.send("Student Not Created") })
});

// Default Route for HTTP GET Requests at Root Path ('/')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Express Get Route for Fetching a Specific Student by ID
app.get('/api/student/:id', async (req, res) => {
  console.log(req.params.id);
  let student = await studentModel.findById({ _id: req.params.id })
  res.send(student);
});

// Express Put Route for Updating a Student by ID
app.put('/api/student/:id', async (req, res) => {
  console.log("Update: " + req.params.id)
  let student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});


// Express Server Listening on a Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})