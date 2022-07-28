import styled from "styled-components";

export const ContainerCard = styled.div`
  min-width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-image: url("https://wallpapercave.com/wp/wp8813110.jpg");
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
