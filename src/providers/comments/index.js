import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [pokeComments, setPokeComments] = useState();

  async function newComment(pokeName, name, email, comment, db) {
    if(!pokeName || !name || !email || !comment || db){
      toast.error("Algo deu errado, tente novamente!")
    }

    const pokeCollection = doc(collection(db, "pokemons"), pokeName);

    await setDoc(
      pokeCollection,
      {
        comments: arrayUnion({
          name: name,
          email: email,
          comment: comment,
          pokename: pokeName,
        }),
      },
      { merge: true }
    );

    toast.success("Comentário adicionado com sucesso!");
  }

  async function allPokeComments(pokeName, db) {
    const pokeDoc = doc(db, "pokemons", pokeName);
    const allComments = await getDoc(pokeDoc);

    if (allComments.exists()) {
      setPokeComments(allComments.data().comments);
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
