import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Button } from 'react-bootstrap';
import {Col,Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Image} from 'react-bootstrap/Image';
import {Form} from "react-bootstrap";
import InputPage from './components/InputPage';
import 'mdbreact/dist/css/mdb.css';
import Carousels from './components/Carousels';






class App extends Component {
  render(){
    return(
<div>
      <div  class="container-fluid"  >
        <div class="row backgroundimg"></div>
        <div>
            <Navbar/>
        </div>
        
        <div class="col-lg-8" className="save">
        
          <div class="intro-jumbo jumbotron" className="card">
            <h1 >Together we can save our nature.</h1>
            <Button type="button" class="btn btn-success" id="butto">Join us !</Button>

          </div>
        </div> 
        <div class="slide">
      <Carousels/>
       </div>
            <div>
        <Container>
      <Row xs="3">
      <Col id="cols">   
    <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
       blablabla
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
        <Col><Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        blablabla
      </Card.Text>
    </Card.Body>
  </Card></Col>
        <Col><Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        blablabla
      </Card.Text>
    </Card.Body>
  </Card></Col>
        <Col><Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        blablabla
      </Card.Text>
    </Card.Body>
  </Card></Col>
  <Col><Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        blablabla
      </Card.Text>
    </Card.Body>
  </Card></Col>
  <Col><Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Dark Card Title</Card.Title>
      <Card.Text>
        blablabla
      </Card.Text>
    </Card.Body>
  </Card></Col>
      </Row>
      </Container>
        
       </div> 
       
       <div class="log" name="log">
         <h2 >Contact us</h2>
      <InputPage/>
    
       </div>
       
      </div>
      
        
</div>
      
    )
    
  }
}

export default App;
