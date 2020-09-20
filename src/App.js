import React, { createContext,useEffect,useState } from 'react';
import {CompA} from './CompA';
import './App.css';
const FirstName=createContext();
const LastName=createContext();

const App=() =>{
  let [num,setNum]=useState('0');
  useEffect(()=>{
    alert("use effect comes inot play");
  })
  return (
   <>
    <FirstName.Provider value={"Akhilesh"}>
      <LastName.Provider value={"thakur"}>
          <CompA/>
      </LastName.Provider>
    </FirstName.Provider>
    <button onClick={()=>{
      num++;
      setNum(num);
    }}>Click Me :{num}</button>
   </>
  );
}

export default App;
export {FirstName,LastName};