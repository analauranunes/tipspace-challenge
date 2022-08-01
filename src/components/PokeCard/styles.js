import styled from "styled-components";
import pokemonCard from "../../assets/card-pokemon-dash.jpg";

export const ContainerCard = styled.div`
  min-width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-image: url(${pokemonCard});
  background-size: cover;
  margin-left: 15px;
  border-radius: 5px;

  @media (min-width: 768px) {
    margin: 0;
  }

  h2 {
    color: white;
    ::first-letter {
    }
    text-transform: uppercase;
  }
`;
