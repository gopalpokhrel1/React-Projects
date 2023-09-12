import styled from 'styled-components'
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { useState } from 'react';

export default function GamePlay() {
  const [score, setScore]= useState(0);
  const [select,setSelect]= useState();
  const [count, setCount] = useState(1);
  const [err, setErr] = useState('');

  const randomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
    

}

const roleDice = ()=>{
    let random = randomNumber(1, 7);

    if(!select) {
      setErr("Enter any number");
      return;
    };
    setErr('')
    setCount((prev)=> random);


    if(select===randomNumber){
      
      setScore((prev)=> prev + randomNumber)
    }
    else{
      setScore((prev)=> prev-2);
    }

    setSelect(undefined)



    
}



  return (
    <>
        <Container>
            <Totalscore score={score}/>
            <NumberSelector setErr={setErr}  select={select}  setSelect={setSelect} err={err}/>
        </Container>

        <RoleDice count={count}  roleDice={roleDice}/>
        <Button>
          <button onClick={()=> setScore(0)}>Reset</button>
        </Button>

       
    </>
  )
}

const Container = styled.div`

padding: 2rem 2rem;

display: flex;
justify-content: space-between;



`;

const Button = styled.div`

display: flex;
justify-content: center;



button{
  width: 6rem;
  padding: 0.3rem;
  background-color: black;
  color: white;

  border: none;

  border: 1px solid transparent;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background-color ease-in;
  }

}

`;
