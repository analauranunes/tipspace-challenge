import { createContext, useEffect, useState } from "react";
import axios from "axios"
const PokemonsContext = createContext();

function PokemonsProvider({ children }) {
  const [pokemons, setPokemons] = useState();
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

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

  return (
    <PokemonsContext.Provider
      value={{ pokemons, nextPages, previousPages }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

export default PokemonsProvider;
