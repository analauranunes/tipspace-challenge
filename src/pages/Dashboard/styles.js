import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 50px;
  padding-bottom: 20px;

  h1 {
    text-align: center;
    padding: 5px;
  }

  @media (min-width: 768px) {

    h1 {
      font-size: 55px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 8px;
    border-radius: 5px;
    font-size: 15px;
    background-color: green;
    color: white;
    transition: 1s;
  }

  .active-button{
    :hover {
      background-color: lightseagreen;
      transition: 1s;
    }
  }

  .inactive-button {
    background-color: lightgreen;
    
      cursor: not-allowed;
    
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;
