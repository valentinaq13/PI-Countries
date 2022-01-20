import React, { useEffect, useState } from 'react';
import { filterByActivities, getActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux"
import styles from "./FiltActivity.module.css"


export default function FiltActivity() {

    let dispatch = useDispatch()
    const allActivities = useSelector((state) => state.activities)

    useEffect(() => { dispatch(getActivities()) }, [dispatch])

    const handleChange = (e) => {
        dispatch(filterByActivities(e.target.value))
    }

    return (
        <div className={styles.navBar}>
            <select className={styles.select} onChange={(e) => handleChange(e)}>
                <option>Select Activity</option>
                {allActivities?.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
            </select>
        </div>
    )
}
