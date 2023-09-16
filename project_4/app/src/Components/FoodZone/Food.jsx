import styled from "styled-components";
import Box from "../Box/Box";
import { BACKEND_URL } from "../../App";

export default function Food({ data_item: foods }) {

    console.log(foods)
  return (
    <>
      <Container>
      <div className="grid">
        {foods ?.map((value) => {
          return (
            <>
             
                <div className="item" >
                  <Box key={value.name}  name= {value.name}  img = {BACKEND_URL + value.image} text={value.text} price={value.price} />

                 
                </div>
             
            </>
          );
        })}
         </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);

  padding: 1rem;

  box-sizing: border-box;

  background-image: url("photo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  overflow: auto;

  .grid {
    width: 80%;

    margin: 6rem auto 0rem auto;
    display: grid;

    grid-gap: 1rem;

    grid-template-columns: repeat(auto-fit, minmax(340px, 340px));

    justify-content: center;
  }

  .item {
    display: flex;
    justify-content: center;
  }
`;
