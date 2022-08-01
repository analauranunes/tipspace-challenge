import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonsContext = createContext();

function PokemonsProvider({ children }) {
  const [pokemons, setPokemons] = useState();
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  let reqPokeInfo = {};
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    axios
      .get(currentPage)
      .then((res) => {
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        setPokemons(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  function nextPages() {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  }

  function previousPages() {
    if (previousPage) {
      setCurrentPage(previousPage);
    }
  }

  function pokemonInfo(pokemon) {
    const baseUrl = "https://pokeapi.co/api/v2";
    axios
      .get(`${baseUrl}/pokemon/${pokemon}`)
      .then((res) => {
        reqPokeInfo = {
          name: res.data.name,
          img: res.data.sprites.front_default,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
        };
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${baseUrl}/pokemon-species/${pokemon}`)
      .then((res) => {
        reqPokeInfo.description =
          res.data.flavor_text_entries[
            Math.floor(Math.random() * 20)
          ].flavor_text;

        setPokeInfo(reqPokeInfo);
      })
      .catch((err) => console.log(err));
  }

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        nextPage,
        previousPage,
        nextPages,
        previousPages,
        pokemonInfo,
        pokeInfo,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

export default PokemonsProvider;
