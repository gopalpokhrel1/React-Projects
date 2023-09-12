import styled from 'styled-components'
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { useState } from 'react';

export default function GamePlay() {

  const [select,setSelect]= useState();
  const [count, setCount] = useState(1);
  return (
    <>
        <Container>
            <Totalscore/>
            <NumberSelector  select={select}  setSelect={setSelect}/>
        </Container>

        <RoleDice count={count}  setCount={setCount}/>
    </>
  )
}

const Container = styled.div`

padding: 2rem 2rem;

display: flex;
justify-content: space-between;

`;
