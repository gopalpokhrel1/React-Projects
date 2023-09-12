import styled from 'styled-components'

export default function StartGame(props) {
  return (
    <>
      <Container>
        
         <img src="/images/dices.png" alt="Photo"  style={{width: '25rem', height:'20rem'}}/>
    

         <div className='flex'>
            <h1 className='content'>Dice Game</h1>
            <Button onClick={props.toggle}>Play Now</Button>

         </div>

      </Container>
    </>
  )
}

const Container = styled.div`

height: 100vh;
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

gap: 5rem;

.content{
    font-size: 4rem;
    font-weight: 1000;
}

.flex{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
}


`; 

const Button = styled.button`
width: 7rem;
padding: 0.4rem;
background-color: black;
color: white;
border: none;
border-radius: 1rem;
cursor: pointer;

&:hover{
    background-color: brown;
    transition: 0.5s;

}
`;
