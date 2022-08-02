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

const CommentsProvider = ({ children }) => {
  const [pokeComments, setPokeComments] = useState(undefined);

  const newComment = async (pokeName, name, email, comment, db) => {
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
    toast.success("comment added with success⭐");
  }

  const allPokeComments = (pokeName, db) => {
    onSnapshot(doc(db, "pokemons", pokeName), (doc) => {
      if (doc.data()) {
        setPokeComments(doc.data().comments);
      }
    });
  }

  const clearPokeComments = () => {
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
