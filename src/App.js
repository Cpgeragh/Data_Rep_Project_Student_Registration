import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/studentRegistrationForm';
import Read from './components/displayStudents';
import Edit from './components/modifyStudent';
import { Create as CreateStudent, Read as ReadStudents, Edit as EditStudent } from './components/student'; // Import student components
import DisplayStudents from './components/displayStudents';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/displayStudents' element={<DisplayStudents></DisplayStudents>}></Route>
        <Route path='/studentRegistrationForm' element={<StudentRegistrationForm></StudentRegistrationForm>}></Route>
        <Route path='/modifyStudent/:id' element={<ModifyStudent></ModifyStudent>}></Route>
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
