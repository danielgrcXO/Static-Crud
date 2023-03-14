import 'bootstrap/dist/css/bootstrap.min.css';
import CrudApp from "./components/CrudApp";

//bootstrap styles
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App({title}) {
  
  return (
    <>
     <Navbar bg="dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand  className="text-white">Daniel Garcia </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
     
      <h2 className="text-center mt-4">{title}</h2>
      <CrudApp/>
    </>
  );
}

App.defaultProps = { title : 'CRUD APP'}


export default App;
