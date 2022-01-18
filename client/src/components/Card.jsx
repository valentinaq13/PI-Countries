import React from 'react';
import style from "./Card.module.css"



function Card({name, flag, continent, id}) {
    return (
        <div className={style.card}>
             {/* <Link to={"/home/" + el.id}></Link> */}
             <h2 className={style.text}>{name}</h2>
            <h3 className={style.text}>{continent}</h3>
            <p>{id}</p>
            <img src={flag} alt="img not found" width="150px" height="150px" className={style.flag} />
        </div>
    )
}

export default Card
