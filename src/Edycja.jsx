import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Edycja.css";
import { czyPoprawnyNumerRegex } from "./utilsy";

const EdycjaLekcji = props => {
    const [error, setError] = useState("");

    
    const handleKeyPress = (e) => {
        const isValid = czyPoprawnyNumerRegex(e);
        if (!isValid) {
            setError("Niedozwolony znak! Proszę wpisać tylko cyfry.");
        } else {
            setError(""); 
        }
    };

    return (
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="name">Podaj nazwę</label>
                <input type="text" name="name" id="name" value={props.name} onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj czas w godzinach</label>
                <input type="text" name="czasG" id="czasG" value={props.czasG}      
                onKeyPress={handleKeyPress} 
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj czas w minutach</label>
                <input type="text" name="czasM" id="czasM" value={props.czasM} 
                onKeyPress={handleKeyPress} 
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            {error && <div className="error-message">{error}</div>} {}
            <button onClick={() => props.onSave()}>Ok</button> 
            <button>Cancel</button>
        </div>
    );
}

EdycjaLekcji.propTypes = {
    name: PropTypes.string,
    czasG: PropTypes.string,
    czasM: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default EdycjaLekcji;
