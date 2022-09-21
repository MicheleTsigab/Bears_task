import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import CreateVisitor from 
    "./components/create_visitor";
import UpdateVisitor from 
    "./components/update_visitor";
import VisitorList from 
    "./components/visitor_list";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-visitor"} 
                  className="nav-link">
                  Visitor Registration App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-visitor"} 
                    className="nav-link">
                    Create Visitor
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/visitors"} 
                    className="nav-link">
                    Visitor List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    element={<CreateVisitor/>} />
                  <Route path="/create-visitor" 
                    element={<CreateVisitor/>} />
                  <Route path="/update-visitor/:id" 
                    element={<UpdateVisitor/>} />
                  <Route path="/visitors" 
                    element={<VisitorList/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
// {
//   return (
//     <div className="main">
//       <h2 className="main-header">Visitors Manual Registration</h2>
//       <div >
//         <CreateVisitor/> 
//         <h2>Visitors</h2>
//         <VisitorList/>
//       </div>
//     </div>
//   );
// }
  
export default App;