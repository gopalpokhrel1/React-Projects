import styled from'styled-components'


export default function Navbar({data, item}) {

  const handleSubmit = (e)=>{
    data(e);
    
    
  }

  const onSubmit = (val)=>{
     item(val);
  }
 

  return (
    <Nabbar>
      <div className="container">
        <div className="logo">
            <h1>Food</h1>
        </div>
        <div className="input">
            <input onChange={handleSubmit} type="text" placeholder='Search' />
        </div>
      </div>

      <div className="menu">
        <ul>
            <li onClick={()=> onSubmit('All')}>All</li>
            <li onClick={()=> onSubmit('Breakfast')}>Breakfast</li>
            <li onClick={()=> onSubmit('Lunch')}>Lunch</li>
            <li onClick={()=> onSubmit('Dinner')}>Dinner</li>
        </ul>
      </div>
    </Nabbar>
  )
}

const Nabbar = styled.div`

width: 100%;
height: 8rem;

background-color: gray;
color: white;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

position: relative;


@media (max-width: 550px){

    height: 12rem;

    justify-content: normal;
      box-sizing: border-box;
    padding: 2rem;

}


input{
    width: 10rem;
    height: 1.5rem;

    background-color: transparent;

    border: 2px solid white;

    padding-left: 1rem;

    outline: none;

    color: white;

    &::placeholder{
        font-size: 0.9rem;
        color: white;
    }
}

.container{
    width: 100%;
    

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 550px){

     flex-direction: column;
     gap: 1rem;

}
}

.menu{

    position: absolute;
    bottom: 0.2rem;

    @media (max-width: 550px){

bottom: 1rem;

}

    ul{
        display: flex;
        gap: 2rem;
        list-style: none;
        font: 1.2rem;

        li{
            border: 1.5px solid transparent;
            padding: 0.2rem;

            background-color: aqua;
            color: black;

            border-radius: 0.1rem;

            cursor: pointer;

            &:hover{
                background-color: red;
                color: white;
                transition: 0.5s background-color ease-in-out;
            }
        }
    }

}

`;
