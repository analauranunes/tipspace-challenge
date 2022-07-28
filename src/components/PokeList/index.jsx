import { useContext } from "react";
import { PokemonsContext } from "../../providers/pokemons";
import PokeCard from "../PokeCard";
import * as styled from "./styles";

function PokeList() {
  const { pokemons, previousPages, nextPages } =
    useContext(PokemonsContext);

  return (
    <styled.ContainerList>
      <h1>
        Click in the pokeball to unravel the pokemon and it's
        curiosities!
      </h1>
      <styled.ContainerButtons>
        <button onClick={() => previousPages()}>previous</button>
        <button onClick={() => nextPages()}>next</button>
      </styled.ContainerButtons>
      <styled.ContainerCards>
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokeCard name={pokemon.name} key={pokemon.name} />
          ))}
      </styled.ContainerCards>
    </styled.ContainerList>
  );
}

export default PokeList;
