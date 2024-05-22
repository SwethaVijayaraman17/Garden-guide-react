import React, { useState } from "react";
import { plantsList, options } from "./PlantsJson";
import { useNavigate } from "react-router-dom";

const PlantsList = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [list, setList] = useState(plantsList)

    const handleChange = () =>{
        if(input !== 'All' && input !== 'Select plant type'){
            setList(plantsList.filter((ele) => ele.plant_type.toLowerCase().includes(input.toLowerCase())))
        }
        else{
            setList(plantsList)
        }
    }
    console.log(options);
    return (
        <div id="listLayout">
            <h1>Garden Growing Guidance</h1>
            <div id='plantsList'>
                <div id='searchWrap'>
                    <select id='plantTypeOpt' onChange={(e) => setInput(e.target.value)}>
                        {options.map((ele, idx) =>(
                            <option id={`option${idx+1}`}>{ele}</option>
                        ))}
                    </select>
                    <button onClick={handleChange}>Search</button>
                </div>
                {list.map((ele, i) => (
                    <div id={`plantDiv${i+1}`} onClick={() => navigate('/guidance', {state: ele})}>
                        <img id={`plantImg${i+1}`} src={ele.img} alt="" />
                        <div>
                            <h3 id={`plantName${i+1}`} className="plant_name">{ele.name}</h3>
                            <p id={`plantType${i+1}`}>{ele.plant_type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlantsList