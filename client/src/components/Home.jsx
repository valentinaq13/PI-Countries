import React from 'react'
import Countries from './Countries'
import Navbar from './navbar/Navbar'
import AscDes from './Filters/AscDes'
import Continent from './Filters/Continent'
import FiltActivity from './Filters/FiltActivity'
import stilo from "./Home.module.css"

function Home() {
    return (
        <div>
            <h1 className={stilo.landing2}>Countries</h1>
            <nav className={stilo.navBar}>
                <Continent />
                <FiltActivity />
                <AscDes />
                <Navbar />
            </nav>
            <Countries />
        </div>
    )
}

export default Home


