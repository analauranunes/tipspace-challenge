import { useContext } from "react";
import { PokemonsContext } from "../../providers/pokemons";
import PokeCard from "../../components/PokeCard";
import * as styled from "./styles";

function Dashboard() {
  const { pokemons, previousPages, nextPages, previousPage, nextPage } =
    useContext(PokemonsContext);

  return (
    <styled.ContainerList>
      <h1>
        Click in the pokeball to unravel the pokemon and it's
        curiosities!
      </h1>
      <styled.ContainerButtons>
        <button className={!previousPage ? "inactive-button" : "active-button"} onClick={() => previousPages()}>previous</button>
        <button className={!nextPage ? "inactive-button" : "active-button"} onClick={() => nextPages()}>next</button>
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

export default Dashboard;
