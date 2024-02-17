import '../App.css';
import Name from './name';
import {Routes,Route } from 'react-router-dom';
import Quiz from './quiz';
import Result from './result';
import { useState } from 'react';

function App() {
  var [name,setName]=useState('')
  var [total,totalFun]=useState(0)

  return (
 
   <>


  <Routes>
    <Route path='/' element={<Name setName={setName}/>}/>
    <Route path='/quiz' element={<Quiz totalFun={totalFun}/> }/>
    <Route path='/result' element={<Result name={name} total={total}/> }/>
  </Routes>

   </>
  );
}

export default App;
