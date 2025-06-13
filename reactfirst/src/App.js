import { useState } from "react";



export default function App() {
  let [counter, setcounter] =  useState(5)

  let increase = (num)=>{
   if(num === 1){
      setcounter(counter + 1)
   }else{
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

