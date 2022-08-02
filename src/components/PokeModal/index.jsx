import { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../../providers/comments";
import { DataBaseContext } from "../../providers/database";
import { PokemonsContext } from "../../providers/pokemons";
import * as styled from "./style";
import { toast } from "react-toastify";
import cuboneNoComment from "../../assets/pokemon-cubone-modal.gif";

function PokeModal({ setModalIsOpen, name }) {
  const { pokemonInfo, pokeInfo } = useContext(PokemonsContext);
  const {
    newComment,
    allPokeComments,
    clearPokeComments,
    pokeComments,
  } = useContext(CommentsContext);
  const { db } = useContext(DataBaseContext);

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    pokemonInfo(name);
    allPokeComments(name, db);
  }, []);

  function handleClick(name, userName, email, comment, db) {
    setUserName("");
    setEmail("");
    setComment("");

    if (!userName || !name || !email || !comment) {
      return toast.error("invalid fields, try again ❌");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return toast.error("invalid email, try again ❌");
    }

    newComment(name, userName, email, comment, db);
  }

  return (
    <>
      {pokeInfo && (
        <styled.ContainerModal data-testid="modal-test">
          <styled.ContainerBackground>
            <styled.ContainerPokeInfo>
              <button
              id="close-button"
                onClick={() => {
                  clearPokeComments();
                  setModalIsOpen(false);
                }}
              >
                X
              </button>
              <div>
                <img src={pokeInfo.img} alt={pokeInfo.name} />
                <h2>{pokeInfo.name}</h2>
                <div>
                  <span className="attack-span">
                    attack: {pokeInfo.attack}
                  </span>
                  <span className="defense-span">
                    defense: {pokeInfo.defense}
                  </span>
                </div>
                <p>{pokeInfo.description}</p>
              </div>
            </styled.ContainerPokeInfo>
            <styled.ContainerDivisorCommInputs>
              {pokeComments ? (
                <styled.ContainerComments>
                  {pokeComments.map((comment, index) => (
                    <div key={index}>
                      <span>{comment.name}</span>
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </styled.ContainerComments>
              ) : (
                <styled.ContainerNoComments>
                  <img src={cuboneNoComment} alt="cubone" />
                  <span>No comments yet!</span>
                </styled.ContainerNoComments>
              )}
              <styled.ContainerInputs>
                <input
                  value={userName}
                  type="text"
                  name="name"
                  placeholder="type your name"
                  required
                  minLength={3}
                  onChange={(event) =>
                    setUserName(event.target.value)
                  }
                />
                <input
                  value={email}
                  type="email"
                  name="email"
                  placeholder="type your email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  value={comment}
                  type="text"
                  name="comment"
                  placeholder="make a comment!"
                  required
                  minLength={10}
                  maxLength={65}
                  onChange={(event) => setComment(event.target.value)}
                />
                <button
                  onClick={() =>
                    handleClick(name, userName, email, comment, db)
                  }
                >
                  send
                </button>
              </styled.ContainerInputs>
            </styled.ContainerDivisorCommInputs>
          </styled.ContainerBackground>
        </styled.ContainerModal>
      )}
    </>
  );
}

export default PokeModal;
