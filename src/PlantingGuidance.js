import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const PlantingGuidance = () =>{
    const location = useLocation();
    const {state} = location;
    const navigate = useNavigate()
    return(
        <div id='guidance'>
            <img id='selectedImg' src={state.img} alt='' />
            <h2 id='selectedName'>{state.name}</h2>
            <p id="selectedType">Plant Type: {state.plant_type}</p>
            <p id='selectedClimate'>Native Climate: {state.native_climate}</p>
            <p id='selectedWatering'>Watering: {state.watering}</p>
            <p id='selectedSoilType'>Soil Type: {state.soil_type}</p>
            <p id='selectedExposure'>Sun Exposure: {state.sun_exposure}</p>
            <p id='selectedBloom'>Bloom Time: {state.bloom}</p>
            <p id='selectedHeight'>Mature Height: {state.mature_height}</p>
            <button id='backBtn' onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default PlantingGuidance