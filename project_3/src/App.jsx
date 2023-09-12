import StartGame from "./Components/StartGame";
import './App.css'
import GamePlay from "./Components/GamePlay";
import { useState } from "react";



export default function App() {

  const [isGameplay, setIsGameplay]= useState(false);

  const toggleGame = ()=>{
    setIsGameplay((prev)=> !prev);
  }
  return (
    <>
    {
       isGameplay ? <GamePlay/> : <StartGame toggle={toggleGame}/> 
    }
    
    
    </>
  )
}
