import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
