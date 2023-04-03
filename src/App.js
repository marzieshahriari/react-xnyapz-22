import React,{useState} from "react";
import "./style.css";
import {data} from './data';

export default function App() {
 
  const [person,setPerson] = useState(
    {
      name:"farzad",
      age:30,
      message:"Hi"
    }
  );

const changeMessage =()=>{
  setPerson({...person, message: "i am web"})
}
 
  return (
    <>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>{person.message}</h2>
    <button onClick={changeMessage}>change</button>
    </>
  );
}
