import styled from "styled-components";
import Box from "../Box/Box";

export default function Food() {
  return (
    <>
      <Container>
        <div className="grid">
          <div className="item">
            <Box />
          </div>
          <div className="item">
            <Box />
          </div>
          <div className="item">
            <Box />
          </div>
          <div className="item">
            <Box />
          </div>
          <div className="item">
            <Box />
          </div>
          <div className="item">
            <Box />
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 81.4vh;

  padding: 1rem;

  box-sizing: border-box;

  background-image: url("photo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  overflow: auto;

  .grid {

    width: 80%;


    margin:6rem auto 0rem auto;
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
