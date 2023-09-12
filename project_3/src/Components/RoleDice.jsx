import { useState } from "react";
import styled from "styled-components"

export default function RoleDice({roleDice, count}) {
 
   

   



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
