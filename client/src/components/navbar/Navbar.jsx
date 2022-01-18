import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchBar from "../searchbar/SearchBar";

function Navbar() {
  return (
    <div className={styles.cards}>
      <SearchBar />
      <Link to="/activity">
        <button >Add Activity</button>
      </Link>

    </div>
  )
}

export default Navbar
