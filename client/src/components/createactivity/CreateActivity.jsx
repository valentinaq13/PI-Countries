import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {postActivity, getCountries} from "../actions";
import {useDispatch, useSelector} from "react-redux";


function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)
    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country:[]
    })
    
    useEffect(() => {
        dispatch(getCountries());
    }, []);

function handleChange(e){
    setInput({...input,[e.target.name] : e.target.value})
}

function handleCheck(e){
    if(e.target.checked){
        setInput({...input, status: e.target.value})
    }
}
function handleSelect(e){
    setInput({
        ...input, country: [...input.country, e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    dispatch(postActivity(input))
    alert("Activity Created OK")
    setInput({name: "", difficulty: "", duration: "", season: "", country:[] }) //seteo el input vacio de nuevo
    history.push("/home") //una vez creada la actividad me redirige a home
}
    

    return (
        <div>
            <NavLink to="/home"><button>Go Back</button></NavLink>
            <h1>Create Activity</h1>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label>Difficulty</label>
                    <input type="text" value={input.difficulty} name="difficulty" onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label>Duration:</label>
                    <input type="text" value={input.duration} name="duration" onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label>Season:</label>
                    <label><input type="checkbox" value="summer" name="summer" onChange={handleCheck} />summer</label>
                    <label><input type="checkbox" value="spring" name="spring" onChange={handleCheck} />spring</label>
                    <label><input type="checkbox" value="autumn" name="autumn" onChange={handleCheck} />autumn</label>
                    <label><input type="checkbox" value="winter" name="winter" onChange={handleCheck} />winter</label>
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {
                        countries.map((el)=>(
                            <option value={el.name}>{el.name}</option>
                        ))
                    }
                </select>
                <ul><li>{input.country.map(el => el + " ,")}</li></ul>
                <button type="submit">Create Activity</button>

            </form>
        </div>
    )
}

export default CreateActivity
