import React, { createContext, useCallback, useContext } from 'react';
import {CompA} from './CompA';
import './App.css';
const FirstName=createContext();
const LastName=createContext();

const App=() =>{

  return (
   <>
    <FirstName.Provider value={"Akhilesh"}>
      <LastName.Provider value={"thakur"}>
          <CompA/>
      </LastName.Provider>
    </FirstName.Provider>
   </>
  );
}

export default App;
export {FirstName,LastName};