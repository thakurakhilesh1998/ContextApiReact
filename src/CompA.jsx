import React,{useEffect, useState} from "react";
import {CompB} from "./CompB";
import './index.css';
import axios from 'axios';

const CompA=()=>{
    let [option,setOption]=useState('1');
    const [name,setName]=useState('');
    const [moves,setMoves]=useState('');

    useEffect(()=>{
        async function getData() {  
           const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${option}`);
           console.log(res.data.name);
           setName(res.data.name);
        //    console.log(res.data.moves.length);
           setMoves(res.data.moves.length)
        }

        getData();
    });
    return(
        <>
        <div className="select-box">
        <h3>You have selected {option}.</h3>
        <h3>You slected the {name} character</h3>
        <h3>It had {moves} moves</h3>
        <label style={{padding:"20px",margin:"20px"}}>Select Label of Pokemon</label>
        <select value={option} onChange={(e)=>{
            setOption(e.target.value);

        }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
    <CompB/>
    </>);
}

export {CompA};