import React from 'react';
import styles from "./Paginado.module.css"


function Paginado({ countriesPerPage, allCountries, paginado }) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allCountries/countriesPerPage); i++) {
        pageNumbers.push(i+1)

    }

    return ( //ésto renderiza los numeritos del paginado
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers &&
                    pageNumbers.map(number => (
                    <li  key={number}>
                            <a onClick={() => paginado(number)}>{number}</a>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Paginado
