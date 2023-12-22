const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.gg1uhaj.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Schema
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
app.put('/api/students/:id', async (req, res) => {
  console.log("Update: " + req.params.id);
  try {
    let student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Express Post Route for Creating a Student
app.post('/api/students', async (req, res) => {
  console.log(req.body);
  try {
    const { name, course, picture, idNumber, dateOfBirth, expiryDate } = req.body;

    // Convert dateOfBirth string to a Date object
    const formattedDateOfBirth = new Date(dateOfBirth);

    await studentModel.create({
      name: name,
      course: course,
      picture: picture,
      idNumber: idNumber,
      dateOfBirth: formattedDateOfBirth,
      expiryDate: expiryDate,
    });

    res.send('Student Created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Express Get Route for Fetching a Specific Student by ID
app.get('/api/students', async (req, res) => {
  try {
    // Fetch all students
    let students = await studentModel.find({});
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Default Route for HTTP GET Requests at Root Path ('/')
app.get('/', (req, res) => {
  res.send('Student Registration');
});

// Express Server Listening on a Port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});