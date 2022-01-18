import React, {useEffect, useState} from 'react';
import { filterByActivities, getActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux"
import styles from "./FiltActivity.module.css"


export default function FiltActivity() {

    let dispatch = useDispatch()
    const allActivities = useSelector((state) => state.activities)
    // const countriesEstado = useSelector(state => state.countries)

    useEffect(() => { dispatch(getActivities()) }, [dispatch])

    // const [input, setInput] = useState()
    const handleChange = (e) => {
       dispatch(filterByActivities(e.target.value))
    }

    // let auxfilter = allActivities.filter(e => e.name === input)

    //console.log(auxfilter)
    return (
        <div className={styles.navBar}>
            <select className={styles.select} onChange={(e) => handleChange(e)}>

                <option>Select Activity</option>
                {allActivities?.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}

            </select>
            {/* <div className={styles.navBar}>

                {auxfilter.map(e => {
                    return (
                        <div key={e.id} className={styles.card}>
                            <h2>Countries: {e.countries?.map(e => (
                                <div key={e.id}>
                                    <h4>{e.name}</h4>
                                    <img src={e.flag} alt={e.name} style={{ width: "5em" }} />
                                </div>
                            ))}</h2>
                            <h3>Activity: {e.name}</h3>
                            <h3>Difficulty: {e.difficulty}</h3>
                            <h3>Duration: {e.duration}h</h3>
                            <h3>Season: {e.season}</h3>
                        </div>
                    )
                })
                }
            </div> */}
        </div>
    )
}
// function FiltActivity() {
//     const dispatch = useDispatch();
//     const activities = useSelector((state) => state.activities)

//     useEffect(()=>{
//         dispatch(getActivities())
//     }, [dispatch])

//     function handleActivity(e){
//         dispatch(filterByActivities(payload))
//     }

//     return (
//         <div>
//              <select onChange={(e)=> handleActivity(e)} >
//                     {
//                         activities?.map((el) => (
//                             <option value={el.name}>{el.name}</option>
//                         ))
//                     }
//                 </select>
//         </div>
//     )
// }

// export default FiltActivity
