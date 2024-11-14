import React from "react";
import PropTypes from "prop-types";
import "./Edycja.css";
import { czyPoprawnyNumer2 } from "./utilsy";

const EdycjaLekcji = props => {   
    return(
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="name">Podaj nazwę</label>
                <input type="text" name="name" id="name" value={props.name} onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj czas w godzinach</label>
                <input type="text" name="czasG" id="czasG" value={props.czasG}      
                onKeyPress={e => czyPoprawnyNumer2(e)}
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj czas w minutach</label>
                <input type="text" name="czasM" id="czasM" value={props.czasM} 
                onKeyPress={e => czyPoprawnyNumer2(e)}
                onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <button onClick={() => props.onSave()}>Ok</button> 
            <button>Cancel</button>
        </div>
    );
}

EdycjaLekcji.propTypes = {
    name: PropTypes.string,
    czasG: PropTypes.string,
    czasM: PropTypes.string
}

export default EdycjaLekcji;