import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { DataBaseContext } from "../database";
import { toast } from "react-toastify";

export const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const { db } = useContext(DataBaseContext);

  const [pokeComments, setPokeComments] = useState();

  async function newComment(pokeName, name, email, comment) {
    const pokeCollection = doc(db, "comments", email);
    const pokeDoc = await getDoc(pokeCollection);

    if (pokeDoc.exists()) {
      toast.error("E-mail já utilizado para comentar anteriormente!");
    }

    await setDoc(doc(collection(db, "comments"), email), {
      name: name,
      email: email,
      comment: comment,
      pokename: pokeName,
    });

    toast.success("Comentário adicionado com sucesso!");
  }

  async function allPokeComments(pokeName) {
    const pokeCollection = collection(db, "comments");
    const selectAllComments = query(
      pokeCollection,
      where("pokename", "==", pokeName)
    );
    const allComments = await getDocs(selectAllComments);

    if (allComments) {
      allComments.forEach((comment) => {
        setPokeComments([...pokeComments, comment]);
      });
    }
  }

  function clearPokeComments() {
    setPokeComments(null);
  }

  return (
    <CommentsContext.Provider
      value={{
        newComment,
        allPokeComments,
        clearPokeComments,
        pokeComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
