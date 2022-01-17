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
            <div className={stilo.navBar}>
                <Navbar />
                <Continent />
                <FiltActivity />
                {/* <div className={stilo.navBar}>
                    <AscDes />
                </div> */}
            </div>

            <Countries />
        </div>
    )
}

export default Home


