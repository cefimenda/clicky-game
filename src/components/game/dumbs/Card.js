import React from "react";

const Card = props => (
    <div className="col-3 text-center">
        <div onClick={props.onClick} className="p-1 m-3 card shadow" >
            <div className="m-auto" style={{ width: "200px", height: "200px", maxWidth: "300px", maxHeight: "300px", overflow: "hidden" }}>
                <img src={props.imgLink} alt="..." className="img-fluid m-auto" style={{ width: "200px", height: "300px", objectFit: "cover" }} />
            </div>
        </div>
    </div >
);

export default Card