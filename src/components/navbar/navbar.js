import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {Modal,Alert,Button,Nav,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
import {TiThMenu} from "react-icons/ti";
import Sidebar from "../../components/navbar/sidedraw"
import Backdrop from "../navbar/backdrop"
import Sdraw from "./sidedraw"
import "../navbar/navbar.css"
const Styel = styled.div`
button:visited{
    border-style:none;
}
    .navbar{
        background-color: #0EAD69;
        opacity:0.7;
        margin-top:0%;
       
    }
   
    .navbar-brand, .navbar-nav .nav-link{
        color: white;

        &: hover{
            color: black ;
           
        }
    }
    .sidedrawer{
background-color: black;
      width: 20%;
    height:100%;
    }


    `;

class AlertDismissible extends Component {
    state = {
        showsidedraw: false
    };

   drawerclickhand=()=>{
       this.setState((prevstate)=>{

        return {showsidedraw: !prevstate.showsidedraw}
       });
   }
   backdropclick =()=>
   {this.setState({showsidedraw: false})};
    
render(){
let backdraw;
if(this.state.showsidedraw){
    backdraw =  <Backdrop  click={this.backdropclick} />;
}
   
  return (

    <React.Fragment>
        
    <Styel>
         
         
    
            <Navbar   fixed="top"  collapseOnSelect expand="xxl"  >
            {backdraw}
   
            <Button className="btncolor " position= "fixed"  onClick={this.drawerclickhand} ><TiThMenu /></Button>
            <Navbar.Collapse id="responsive-navbar-nav">
              
            
           
            </Navbar.Collapse>

            
            <Sdraw show={this.state.showsidedraw} />
            
            </Navbar>  
            
            

</Styel>


      </React.Fragment>



);
  }
  }
  




export default AlertDismissible;
