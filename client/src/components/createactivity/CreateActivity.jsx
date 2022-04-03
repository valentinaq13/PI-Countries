mport React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { postActivity, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./CreateActivity.module.css"

// function validate(input){
//     const errors={}
//     if(!input.name){errors.name = "name is required"}
//     if (input.countries.length < 1){errors.countries = "field required"}
//     if (input.name.length < 3){errors.name = "escribir mas de 3 letras"}
//     return errors
// }

function CreateActivity() {
    const dispatch = useDispatch()
    const countriesA = useSelector((state) => state.countries)
    const [errors, setErrors] = useState({});
    const history = useHistory()

    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    })


    function handleChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input, [e.target.name]: e.target.value
        }));
        
    }

    function handleCheck(e) { if (e.target.checked) { setInput({ ...input, season: e.target.value }) } }

    function handleSelect(e) {
        setInput({
            ...input, countries: [...input.countries, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (validate()) {
            dispatch(postActivity(input))
            alert("Activy created succesfully !")
            setInput({ name: "", difficulty: "", duration: "", season: "", countries: [] })
            history.push('/home')
        }
        else { alert("Complete all options") }

    }
    function validate() {
        if (input.name.length === 0) {
            return false;
        } else if (/\d/.test(input.name)) {
            return false;
        } else if (input.difficulty === "") {
            return false;
        } else if (input.duration === "") {
            return false;
        } else if (input.season === "") {
            return false;
        } else if (input.countries.length === 0) {
            return false
        }
        return true
    };

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
                    <input type="text" pattern="[Aa-Zz]" autoComplete="off" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                    {
                        errors.name && (<p>{errors.name}</p>)
                    }
                </div>
                <div>
                    <label> Difficulty: </label>
                    <input type="number" max="5" min="1" placeholder="from 1 to 5" value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)} />
                   
                </div>
                <div>
                    <label> Duration: </label>
                    <input type="number" min="0" placeholder="months" value={input.duration} name="duration" onChange={(e) => handleChange(e)} />
                   
                </div>
                <div >
                    <label> Season: </label>
                    <label><input type="checkbox" value="summer" name="summer" onChange={handleCheck} />summer </label>
                    <label><input type="checkbox" value="spring" name="spring" onChange={handleCheck} />spring </label>
                    <label><input type="checkbox" value="autumn" name="autumn" onChange={handleCheck} />autumn </label>
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

