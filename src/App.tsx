import styled from "styled-components";
import Gokuljs from "./assets/images/gokuljs.jpg";
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
      padding: 2rem;
      align-items: center;
      .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 2rem;
        text-transform: uppercase;
        h3,
        h2,
        h1 {
          margin: 0;
          padding: 0;
          font-size: 2.5rem;
          margin-bottom: 0.625rem;
          font-family: "Kalam", cursive;
        }
      }
    }
    .image {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .profile {
        width: 25rem;
        height: 25em;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

function App() {
  return (
    <Main>
      <div className="portfolioHeader">
        <div className="details">
          <div className="info">
            <h3>Hi</h3>
            <h2>I'm Gokul JS</h2>
            <h1>Founding Engineer At Aerotime</h1>
          </div>
        </div>
        <div className="image">
          <img src={Gokuljs} className="profile" alt="Gokul JS" />
        </div>
      </div>
    </Main>
  );
}

export default App;
