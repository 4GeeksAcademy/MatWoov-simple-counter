import React from "react";
import propTypes from "prop-types";


function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    )
}

SimpleCounter.propTypes = {
    digitSix: propTypes.number,
    digitFive: propTypes.number,
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number
};

export default SimpleCounter;