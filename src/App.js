import React, { Component } from 'react';
import Nave from '../src/components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cont from '../src/components/container/contaner'
import Io from '../src/components/io/io'
import styled from 'styled-components';
import red from './components/Button/Button';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Foott from '../src/components/footer/footer'
import Sidebarr from "../../turn1213/src/components/navbar/sidedraw"

const Sylee=styled.div`

.reddd{
  background-color: black;
}

`
class App extends Component {
  state={

    
  };

  render() {
    return (
      <Sylee>
      <React.Fragment  className='reddd'>
      
      <Nave / >
      
     
     
      <Cont  / >
       <Io />
      <Foott></Foott>
      </React.Fragment>
      </Sylee>
    );
  }
}

export default App;
