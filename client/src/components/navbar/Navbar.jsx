import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchBar from "../searchbar/SearchBar";

function Navbar() {
  return (
    <div className={styles.div}>
     

      <SearchBar />
      <span >
        <NavLink to="/activity">
          <button >Add Activity</button>

        </NavLink>
      </span>

    </div>
  )
}

export default Navbar
