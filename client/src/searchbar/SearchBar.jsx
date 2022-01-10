import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../actions";
import styles from "./SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState();


  const handleChange = (evento) => {
    evento.preventDefault();
    setInput(evento.target.value)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(searchByName(input))
    setInput("")
    dispatch(setCurrentPage(1))
  };

  return (
    <div>
      <form className={styles.searchForm}>
        <input className={styles.input}
          type="text"
          placeholder="Search by name"
          autoComplete="off"
          onChange={(evento) => handleChange(evento)}

        />
        <button onClick={(evento) => handleSubmit(evento)}>Search Country
        </button>

      </form>
    </div>
  );
}