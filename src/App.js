import React, { createContext,useEffect,useState } from 'react';
import {CompA} from './CompA';
import './App.css';
const FirstName=createContext();
const LastName=createContext();

const App=() =>{
  let [num,setNum]=useState('0');
  let[num1,setNum1]=useState('0');
  useEffect(()=>{
    document.title=`you have clicked button"${num}times`;
  },[num]);
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
    <br></br>
    <button onClick={()=>{
      num1++;
      setNum1(num1);
    }}>
      Click Button {num1}
    </button>
   </>
  );
}

export default App;
export {FirstName,LastName};