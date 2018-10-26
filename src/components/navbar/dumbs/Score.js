import React from "react";

const Score = props =>(
    <h3 className="text-light">Score: {props.score} | Top Score: {props.topScore}</h3>
);

export default Score;