import DataBaseProvider from "./database";

function Providers({ children }) {
  return <DataBaseProvider>{children}</DataBaseProvider>;
}

export default Providers;
