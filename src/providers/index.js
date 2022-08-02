import CommentsProvider from "./comments";
import DataBaseProvider from "./database";
import PokemonsProvider from "./pokemons";

const Providers = ({ children }) => {
  return (
    <DataBaseProvider>
      <PokemonsProvider>
        <CommentsProvider>{children}</CommentsProvider>
      </PokemonsProvider>
    </DataBaseProvider>
  );
}

export default Providers;
