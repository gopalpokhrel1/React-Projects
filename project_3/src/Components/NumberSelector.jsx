import styled  from "styled-components"
import { useState } from "react";

export default function NumberSelector({select,setSelect, err, setErr}) {

    const arrNumber = [1,2,3,4,5,6];

    const handlerErr= (value)=>{
      setSelect(value);
      setErr('');
    }

  return (
    <>
    <SelectNumber>
      <div className="flex">
       {
        arrNumber.map((value,i)=>
         <Box
         isSelected = {value=== select}
         key={i} onClick={()=>handlerErr(value)}>{value}</Box>)
       }
       </div>
        <p>Select Number</p>
        <p style={{color:'red'}}>{err}</p>
</SelectNumber>
    </>
  )
}

const Box = styled.div`
width: 3rem;
height: 3rem;

display: grid;
place-items: center;


border: 2px solid black;

font-size: 1.5rem;

background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
color:${(props) => (props.isSelected ? 'white' : 'black')};
`;


const SelectNumber = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
.flex{
  display: flex;
  gap: 1rem;
}

p{
  font-size: 1.5rem;
}
`;
