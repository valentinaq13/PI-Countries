import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setCurrentPage } from "../../actions";
import styles from "./SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState();
  useEffect(() => {
    dispatch(searchByName(input));
}, [dispatch])

  const handleChange = (evento) => {
    evento.preventDefault();
    setInput(evento.target.value)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(searchByName(input))
    setInput("")
  };

  return (
    <div className={styles.divv}>
      <form className={styles.divv}>
        <input  type="text" placeholder="Search by name..." autoComplete="off" onChange={(evento) => handleChange(evento)}
        />
        <button className={styles.divv} onClick={(evento) => handleSubmit(evento)}>Search Country</button>

      </form>
    </div>
  );
}