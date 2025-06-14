import { useState } from "react";



export default function App() {
  let num = 10;
  let [counter, setcounter] =  useState(num);

  let increase = (num)=>{
   if(num === 1){
      setcounter(counter + 1)
   }else{
      if(counter === 0){
        alert("Counter cannot be less than 0");
        return;
      }
      setcounter(counter - 1)
   }
    
  }
 
  return (
    <>
    <h1>Count : {counter}</h1>
    <button onClick={() => increase(1)}>Add</button>
    <br />
    <button onClick={() => increase(2)}>remove</button>
    </>
  );
}

