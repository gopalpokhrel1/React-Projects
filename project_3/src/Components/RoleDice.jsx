import { useState } from "react";
import styled from "styled-components"

export default function RoleDice({count, setCount}) {
 
   

    const randomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max - min) + min);
        

    }

    const roleDice = ()=>{
        let random = randomNumber(1, 7);

        setCount((prev)=> random);

        
    }



  return (
    <>
      <DiceContainer>
           <div className="photo"  onClick={roleDice}>
            <img src={`/images/dice_${count}.png`} alt="Photo" />
           </div>
           <p>Click on Dice</p>

      </DiceContainer>
    </>
  )
}

const DiceContainer = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
align-items: center;

p{
    font-size: 1.5rem;
}

.photo{
    cursor: pointer;
}

`;
