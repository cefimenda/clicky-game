import React from "react";

const Card = props => (
    <div className="col-3 text-center">
        <div onClick={props.onClick} className=" m-3 card characterCard "style={{ width: "160px", height: "160px"}} >
            <div className="m-auto " style={{ width: "150px", height: "150px", maxWidth: "150px", maxHeight: "150px", overflow: "hidden" }}>
                <img src={props.imgLink} alt="..." className="img-fluid m-auto" style={{ width: "150px", height: "250px", objectFit: "cover" }} />
            </div>
        </div>
    </div >
);

export default Card