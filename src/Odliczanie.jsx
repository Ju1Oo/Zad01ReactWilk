import React from "react";
import PropTypes from "prop-types";
import "./Odliczanie.css";
import deleteIcon from "./img/KoszPusty.png"
import deleteIconHover from "./img/KoszHover.png"
import DeleteIconAnimation from "./img/KoszAnimacja.gif"

const Odliczanie = props => (
    <div className="odliczanie1">
        <span>{props.id}. <strong>{props.name}</strong>{props.czasG}:{props.czasM}</span> 
        <div className="Odliczanie_kasowanie">
        </div>
       <div className="operacje">
        <i className="edycja" onClick={() => props.edytujLekcje(props.id)}>[E]</i>
        
        <img src={deleteIcon} alt="X" className="iks" 
            onMouseOver={e => {e.target.src = deleteIconHover; 
                e.target.style.top = "5px";}} 
            onMouseOut={e => {e.target.src = deleteIcon; 
                e.target.style.top = "0px";}} 
            onClick={e => {e.target.src = DeleteIconAnimation; 
            setTimeout(() => props.Usun(props.id), 1000)
            }}
           />
        </div> 
    </div>
);

Odliczanie.propTypes={
    name: PropTypes.string,
    czasM: PropTypes.number,
    czasG: PropTypes.number
};

export default Odliczanie;