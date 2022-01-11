import React from 'react';
import {useDispatch} from "react-redux";
import { filterByLetter } from '../../actions'

function AscDes() {
    const dispatch = useDispatch();

    function handleFilter(e){
        e.preventDefault();
        dispatch(filterByLetter(e.target.value))
    }

    return (
        <div>
            <select onChange={e => handleFilter(e)}>
                <option value="asc">Order from A to Z</option>
                <option value="desc">Order from Z to A</option>
            </select>
        </div>
    )
}

export default AscDes
