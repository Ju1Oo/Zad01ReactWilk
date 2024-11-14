import React from "react";
import PropTypes from "prop-types";
import "./Odliczanie.css";
import deleteIcon from "./img/KoszPusty.png"
import deleteIconHover from "./img/KoszHover.png"
import DeleteIconAnimation from "./img/KoszAnimacja.gif"

const Odliczanie = props => (
    <div className="odliczanie1">
        <span>{props.id}. <strong>{props.name}</strong> {props.czasG}:{props.czasM}</span> 
        <img src={deleteIcon} alt="X" className="iks" 
            onMouseOver={e => {e.target.src = deleteIconHover; 
                e.target.style.top = "5px";}} 
            onMouseOut={e => {e.target.src = deleteIcon; 
                e.target.style.top = "0px";}} 
            onClick={e => {e.target.src = DeleteIconAnimation;}}/>
    </div>
);

Odliczanie.propTypes={
    name: PropTypes.string,
    czasM: PropTypes.string,
    czasG: PropTypes.string
};

export default Odliczanie;