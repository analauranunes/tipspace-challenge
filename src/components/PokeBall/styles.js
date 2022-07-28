import styled from "styled-components";

const ballSize = (props) => (props.size ? props.size : "100px");

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${ballSize && ballSize};
  height: ${ballSize && ballSize};
  border-radius: 100%;
  border: 5px solid black;
  background-color: white;
  position: relative;
  cursor: pointer;

  :hover{
    animation: shake infinite 2s;
  }

  .top {
    height: 50%;
    width: 100%;
    display: inline-block;
    background-color: red;
    border-top-left-radius: ${ballSize && ballSize};
    border-top-right-radius: ${ballSize && ballSize};
    transform: translateX(-0.4px);
  }

  .bottom {
    height: 50%;
    width: 100%;
  }

  .bar-center {
    height: 10%;
    width: 101%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: black;
  }

  .circle-center {
    height: 25%;
    width: 25%;
    border-radius: 100%;
    border: 5px solid black;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      width: 80%;
      height: 80%;
      border: 2px solid #cdcdcd;
      border-radius: 100%;
      animation: flashLight 1.5s infinite ease;
    }
  }

  @keyframes flashLight {
    from {
      box-shadow: 0px 0px 0px 0px #e9e9e9a6;
    }
    to {
      filter: blur(5px);
      box-shadow: 0px 0px 0px 30px #e9e9e970;
    }
  }

  @keyframes shake {
    0% {
      position: relative;
      top: 0px;
      left: 0px;
    }
    20% {
      top: -5px;
      left: -5px;
    }
    40% {
      top: 5px;
      left: 5px;
    }
    60% {
      top: 10px;
      left: 10px;
    }
    80% {
      top: -10px;
      left: 10px;
    }
    100% {
      top: 0px;
      left: 0px;
    }
  }
`;
