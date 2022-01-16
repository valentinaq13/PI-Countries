import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {postActivity, getCountries} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import style from "./CreateActivity.module.css"


function CreateActivity() {
    const dispatch = useDispatch()
    const countriesA = useSelector((state) => state.countries)

    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })


    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value,})
    }

    function handleCheck(e) { if (e.target.checked) { setInput({ ...input, season: e.target.value })}}
   
    function handleSelect(e) {
        setInput({
            ...input, countries: [...input.countries, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        dispatch(postActivity(input))  
        setInput({ name: "", difficulty: "", duration: "", season: "", countries: [] }) //seteo el input vacio de nuevo
        // alert("Activity Created OK")
        // history.push("/home") //una vez creada la actividad me redirige a home
    }
    function handleDelete(el) {
        setInput({
            ...input, countries: input.countries.filter(c => c !== el)
        })
    }
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    var count = 0;
    return (
        <div className={style.cont}>
            <hr />
            <h1 className={style.h1}>Create Activity   </h1>
            <form onSubmit={(e) => handleSubmit(e)} className={style.card}>
                <div>
                    <label> Name: </label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label> Difficulty: </label>
                    <input type="text" value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label> Duration: </label>
                    <input type="text" value={input.duration} name="duration" onChange={(e) => handleChange(e)} />
                </div>
                <div >
                    <label> Season: </label>
                    <label><input type="checkbox" value="summer" name="summer" onChange={handleCheck} />summer </label>
                    <label><input type="checkbox" value="spring" name="spring" onChange={handleCheck} />spring </label>
                    <label><input type="checkbox" value="autumn" name="autumn" onChange={handleCheck}/>autumn </label>
                    <label><input type="checkbox" value="winter" name="winter" onChange={handleCheck} />winter </label>
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {
                        countriesA.map((el) => (
                            <option value={el.name} key={el.id}>{el.name}</option>
                        ))
                    }
                </select>
                <ul><li>{input.countries.map(el => el + " ,")}</li></ul>
                <button type="submit">Create Activity</button>

            </form>

            {input.countries.map(el =>
                <div key={count++}>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>x</button>
                </div>
            )}
            <hr />
             <NavLink to="/home"><button>Go Back</button></NavLink>
        </div>
    )
}

export default CreateActivity
