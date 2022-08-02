import { useState } from "react";
import PokeBall from "../PokeBall";
import PokeModal from "../PokeModal";
import * as styled from "./styles";

const PokeCard = ({ name }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <styled.ContainerCard id={name}>
        <PokeBall size="115px" setModalIsOpen={setModalIsOpen} />
        <h2>{name}</h2>
      </styled.ContainerCard>
      {modalIsOpen && (
        <PokeModal setModalIsOpen={setModalIsOpen} name={name} />
      )}
    </>
  );
}

export default PokeCard;
