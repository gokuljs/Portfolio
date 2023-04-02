import styled from "styled-components";
const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .portfolioHeader {
    width: 90%;
    height: 90%;
    display: flex;
    flex-basis: 1;
    .details {
      width: 50%;
      color: white;
      display: flex;
      padding: 2rem 4rem;
      align-items: center;
      .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 2rem;
        text-transform: uppercase;
        font-family: "Varela", sans-serif;
      }
    }
    .image {
      width: 50%;
    }
  }
`;

function App() {
  return (
    <Main>
      <div className="portfolioHeader">
        <div className="details">
          <div className="info">
            <div>Hi</div>
            <div>I'm Gokul JS</div>
            <div>Founding Engineer At Aerotime</div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </Main>
  );
}

export default App;
