import React from "react";

const Info = props => (
    <div>
        <div className="container pt-5 mt-5 w-100" style={{ maxWidth: "100%", background:'#D1BDA2'}}>
            <div className=" py-5 p-0 m-0 w-100" >
                <h1 className=" text-center" style={{color:"#545058"}}>Game Of Murders!</h1>
                <h3 className=" text-center"  style={{color:"#545058"}}>Click on an image to kill that character! Don't kill them twice, otherwise they will become walkers...</h3>
            </div>
        </div>
    </div>
);

export default Info