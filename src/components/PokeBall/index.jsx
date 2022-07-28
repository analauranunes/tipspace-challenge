import * as styled from "./styles";

function PokeBall({ size, setModalIsOpen }) {
  return (
    <styled.Container
      size={size}
      onClick={() => setModalIsOpen(true)}
    >
      <div className="top"></div>
      <div className="bar-center"></div>
      <div className="circle-center">
        <div></div>
      </div>
      <div className="bottom"></div>
    </styled.Container>
  );
}

export default PokeBall;
