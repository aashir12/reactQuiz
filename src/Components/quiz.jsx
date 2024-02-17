import React,{useState} from 'react';
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Data from './data';

const Quiz= ({totalFun}) => {
    var [val,valFun]=useState('');
    var [count,countFun]=useState(0);
    var [num,numFun]=useState(0);
    var navigate=useNavigate();

    function Setter (event){
  
        var {value,name}=event.target;
       valFun(value)
  

    }
    function clicker(e){
      e.preventDefault();

      if(val==Data[count].ans){
        
        numFun(++num)
        console.log(num)
      }
      else{
  
        console.log(num)
      }
      if(count+1==10){
        totalFun(num)
        navigate('/result')
      }
      countFun(count+1)
      valFun(' ')
    
    }

    return (

<> 
<div class="container">
      <div class="wrapper ">
        <div class="title"><span>{count+1} Out of 10</span></div>
        <form action="#" onSubmit={clicker}>
          
      {

 
        <>
        <h1>{Data[count].question}</h1>
       
         {
      
             Data[count].options.map(
              (opt)=>(
           <>
           <div class="row quiz">
           <input type="text" placeholder="option"  value={opt} name='option' style={{cursor:'pointer'}} onClick={Setter} readOnly />
           </div>
           </>
              )
             )
         }
        </>
      }

          <div class="row button">
            <button type="submit" >Next</button>
          </div>
  
        </form>
      </div>
    </div>

    </>
  )
}

export default Quiz