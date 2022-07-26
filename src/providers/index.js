import DataBaseProvider from "./database";
import PokemonsProvider from "./pokemons";

function Providers({ children }) {
  return (
    <DataBaseProvider>
      <PokemonsProvider>{children}</PokemonsProvider>
    </DataBaseProvider>
  );
}

export default Providers;
