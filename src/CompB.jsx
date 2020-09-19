import React, { useContext } from "react";
import {CompC} from "./CompC";
import {FirstName,LastName} from './App';

const CompB=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return(
            <>
            <h2>My first name is :{fname}
            </h2>
            <h3>My lastname is:{lname}</h3>
            <CompC/>
            </>);
}

export {CompB};