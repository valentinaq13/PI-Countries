import React from 'react';
import {Link} from "react-router-dom";
import Button from '../buttonLanding/Button';
import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
        <div>
             <span><h1 className={styles.landing}>Countries</h1></span>
            <Link to= "/home">
                <Button>Ingresar</Button>
                
            </Link>
        </div>
    )
}

export default LandingPage
