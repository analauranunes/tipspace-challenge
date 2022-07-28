import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Dashboard/>
    </>
  );
}

export default App;
