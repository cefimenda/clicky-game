import React, { Component } from "react";
import Title from "./dumbs/Title.js";
import Message from "./dumbs/Message.js";
import Score from "./dumbs/Score.js";

class Navbar extends Component {

    componentDidMount(){
        this.setState(this.props.state)
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
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