import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Dashboard/>
    </>
  );
}

export default App;
