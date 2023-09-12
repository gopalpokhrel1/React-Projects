import styled from 'styled-components'

export default function Totalscore() {
  return (
    <>
        <Scorecard>
            <h1>0</h1>
           <p>Total Score</p>
            </Scorecard>      
    </>
  )
}

const Scorecard = styled.div`

width: 10rem;

text-align: center;

h1{
    font-size: 4rem;
    font-weight: 800;
}
p{
    font-size: 1.5rem;
}
`;
