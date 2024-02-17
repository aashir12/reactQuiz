import React,{useState} from 'react';
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Name = ({setName}) => {
    var [val,valFun]=useState('');
    var navigate=useNavigate();
    function changer (event){
        var {value}=event.target;
       valFun(value);
    }
  async function clicker(e){
    e.preventDefault()
setName(val);

navigate('/quiz')
   }
    return (

<> 
<div class="container">
      <div class="wrapper">
        <div class="title"><span>Name</span></div>
        <form action="#" onSubmit={clicker}>
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Enter Your Name" required onChange={changer} value={val} name='email'/>
          </div>

          <div class="row button" >
    
           <input type="submit" value="Next" />
   
          </div>
        </form>
      </div>
    </div>

    </>
  )
}

export default Name