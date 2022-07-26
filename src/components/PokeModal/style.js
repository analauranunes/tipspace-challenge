import styled from "styled-components";
import pokemonCard from "../../assets/card-pokemon-modal.jpg"

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background-color: #00000052;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBackground = styled.div`
  background-image: url(${pokemonCard});
  background-size: cover;
  background-position: bottom;
  width: 90%;
  min-width: 250px;
  max-width: 827px;
  height: 530px;
  border-radius: 5px;
  animation: 1s ease-out 0s 1 slideInFromTop;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const ContainerPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 305px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    padding: 5px;
    color: white;
    background-color: red;
    border-radius: 5px;
    margin-top: 5px;
    margin-right: 5px;
    width: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    gap: 5px;
    > div {
      display: flex;
      gap: 20px;

      .attack-span {
        color: red;
      }

      .defense-span {
        color: blue;
      }
    }
  }

  img {
    width: 160px;
    height: 160px;
    align-self: center;
  }

  h2 {
    color: green;
  }

  p {
    text-transform: lowercase;
    max-width: 97%;
    text-align: center;
    padding-bottom: 5px;
  }

  @media (min-width: 900px) {
    background-color: transparent;
    align-items: flex-start;
    max-width: 190px;
    padding-left: 5px;

    > div {
      font-size: 14px;
    }

    button {
      align-self: flex-start;
      width: 40px;
      padding: 7px;
    }

    img {
      align-self: flex-start;
    }

    p {
      width: 170px;
      background-color: whitesmoke;
      border-radius: 5px;
    }
  }
`;

export const ContainerNoComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 15px;

  img {
    width: 150px;
  }

  @media (min-width: 870px) {
    align-self: center;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding-top: 15px;
  gap: 5px;

  input {
    padding: 3px;
    border-radius: 5px;
    outline: none;
    width: 40%;
    max-width: 150px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding: 3px;
    border-radius: 5px;
    background-color: orange;
    transition: 1s;

    :hover {
      transition: 1s;
      background-color: lightsalmon;
      color: white;
    }
  }

  @media (min-width: 900px) {
    flex-wrap: nowrap;

    input,
    button {
      padding: 5px;
    }
  }
`;

export const ContainerComments = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 5px;
  max-height: 150px;
  gap: 10px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px darkorange;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: darkorange;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: orange;
    width: 200px;
    border-radius: 5px;
    border: 1px solid white;

    span {
      font-weight: 700;
      text-transform: lowercase;
    }

    p {
      max-width: 190px;
      word-wrap: break-word;
      text-align: center;
      text-transform: lowercase;
    }
  }

  @media (min-width: 900px) {
    height: 450px;
    max-height: 450px;

    div {
      width: 300px;

      p {
        max-width: 290px;
      }
    }
  }
`;

export const ContainerDivisorCommInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 5px;

  @media (min-width: 870px) {
    padding-left: 90px;
  }
`;
