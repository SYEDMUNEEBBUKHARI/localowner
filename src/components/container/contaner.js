import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {Container, Jumbotron as Jumbo, Card , Row , Col, Image , Alert , Button , Nav , NavDropdown , Navbar , Form , FormControl } from 'react-bootstrap';
import Climage from '../../assets/GREEN.jpg';
import Climage2 from '../../assets/1349937.svg';
import Btnnn from '../Button/Button';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


const Style = styled.div`


.jumbo{
background: url(${Climage}) no-repeat fixed ; 

background-size: cover;
height: 900px;

background-positon: center; 
filter: alpha(opacity=30);



}
.fonto{
font-family: Robot-condensed;
font-size: 72px;
margin-top: 45px;
    }

.sapn1{
    color: #0EAD69
}

.remove-opacity{
    opacity: 15;
    color:green;
}
.wiwi{

    max-width: 100%;
    background-color: blue;
}

`
function Cont(){
return(
    <Style>
        <Jumbo  className="jumbo ">
       <h1 className="fonto offset-1"> Secure <span className="sapn1">Your </span> Lands</h1>
        <Row>
        <Col></Col>
            <Col lg={6} md={5}>
        <p className="sapn1 offset-1"> Land Ownership Through BlockChain </p>
        </Col>
        <Col></Col>
        <Col></Col>
         </Row>
       <Image src={Climage2} className="offset-3 sapn1" width= '102px' height='auto'/>
       
<Container className="remove-opacity">
   
   <div class="mouse">
				<a href="#" class="mouse-icon">
					<div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                   
                </a>
			</div>
</Container>

    
</Jumbo>

</Style>

);
}

export default Cont;