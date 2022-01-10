import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchBar from "../../searchbar/SearchBar";
import estilo from "../landingpage/LandingPage.module.css";

function Navbar() {
    return (
        <div>
        <h1 className={estilo.landing2}>Countries</h1>
        <SearchBar />
        <span className={styles.activity}>
          <NavLink to="/activity">
            <button className={styles.btn}>Add Activity</button>

          </NavLink>
        </span>
      </div>
    )
}

export default Navbar
