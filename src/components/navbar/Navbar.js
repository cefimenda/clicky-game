import React, { Component } from "react";
import Title from "./dumbs/Title.js";
import Message from "./dumbs/Message.js";
import Score from "./dumbs/Score.js";

class Navbar extends Component {

    render() {
        return (
            <div className="navbar fixed-top navbar-expand-lg navbar-dark border-bottom border-light p-3" style={{zIndex:2, background:'#792427'}}>
                <div className="row w-100">
                    <div className="col-4 text-left">
                        <Title />
                    </div>
                    <div className="col-4 text-center">
                        <Message message = {this.props.message}/>
                    </div>
                    <div className="col-4 text-right">
                        <Score score={this.props.score} topScore = {this.props.topScore}  />
                    </div>
                </div>
            </div>
        )
    }
};

export default Navbar;