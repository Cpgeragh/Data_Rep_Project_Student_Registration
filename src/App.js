import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/homePage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentRegistrationForm from './components/studentRegistrationForm';
import DisplayStudents from './components/displayStudents';
import ModifyStudent from './components/modifyStudent';

function App() {

  return (

    <BrowserRouter>

    <div className="App">

       <Navbar className="custom-navbar" >

        <Container>

          <Nav className="mx-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/studentRegistrationForm">Register</Nav.Link>
            <Nav.Link href="/displayStudents">Display</Nav.Link>
            <Nav.Link href="/modifyStudent">Update</Nav.Link>

          </Nav>

        </Container>

      </Navbar>

      <Routes>

        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/displayStudents' element={<DisplayStudents></DisplayStudents>}></Route>
        <Route path='/studentRegistrationForm' element={<StudentRegistrationForm></StudentRegistrationForm>}></Route>
        <Route path='/modifyStudent' element={<ModifyStudent></ModifyStudent>}></Route>

      </Routes>
      
    </div>

    </BrowserRouter>

  );
  
}

export default App;
