import React, { Component } from "react";
import Title from "./dumbs/Title.js";
import Message from "./dumbs/Message.js";
import Score from "./dumbs/Score.js";

class Navbar extends Component {
    state = {
        score:0,
        topScore: localStorage.getItem("topScore")||0,
        message:"Working?!"
    };
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="row w-100">
                    <div className="col-4 text-left">
                        <Title />
                    </div>
                    <div className="col-4 text-center">
                        <Message message = {this.state.message}/>
                    </div>
                    <div className="col-4 text-right">
                        <Score score={this.state.score} topScore = {this.state.topScore}  />
                    </div>
                </div>
            </div>
        )
    }
};

export default Navbar;