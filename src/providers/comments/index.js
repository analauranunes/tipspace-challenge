import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CommentsContext = createContext();

function CommentsProvider({ children }) {
  const [pokeComments, setPokeComments] = useState([]);

  async function newComment(pokeName, name, email, comment, db) {
    const pokeCollection = doc(collection(db, "pokemons"), pokeName);

    await setDoc(
      pokeCollection,
      {
        comments: arrayUnion({
          name: name,
          email: email,
          comment: comment,
        }),
      },
      { merge: true }
    );
    toast.success("comment added with success!");
  }

  async function allPokeComments(pokeName, db) {
    onSnapshot(doc(db, "pokemons", pokeName), (doc) => {
      if (doc.data()) {
        setPokeComments(doc.data().comments);
      }
    });
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
