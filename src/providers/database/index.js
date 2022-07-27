import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const DataBaseContext = createContext();

function DataBaseProvider({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyDcL4TNiC2lfbAyORsUt-PGxSapEMExA-s",
    authDomain: "pokemon-comments.firebaseapp.com",
    databaseURL:
      "https://pokemon-comments-default-rtdb.firebaseio.com",
    projectId: "pokemon-comments",
    storageBucket: "pokemon-comments.appspot.com",
    messagingSenderId: "285035922669",
    appId: "1:285035922669:web:416c2ab7f4639f649378e4",
    measurementId: "G-QN976J4N6C",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return (
    <DataBaseContext.Provider value={{db}}>
      {children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseProvider;
