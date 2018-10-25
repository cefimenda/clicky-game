import React, { Component } from "react";
import Card from "./dumbs/Card.js";
import Arya from "../images/Arya.jpg"
import Bran from "../images/Bran.png"
import Cersei from "../images/Cersei.png"
import Daenerys from "../images/daenerys.jpg"
import Hound from "../images/Hound.png"
import Jon from "../images/Jon.png"
import Samwell from "../images/Samwell.jpg"
import Sansa from "../images/Sansa.jpg"
import Theon from "../images/Theon.jpg"
import Tormund from "../images/Tormund.png"
import Tyrion from "../images/Tyrion.jpg"
import Varys from "../images/Varys.png"



class Game extends Component {
    state = {
        cards: [
            Arya,
            Bran,
            Cersei,
            Daenerys,
            Hound,
            Jon,
            Samwell,
            Sansa,
            Theon,
            Tormund,
            Tyrion,
            Varys
        ]
    };
    render() {
        return (
            <div>
                <div className="container text-center">
                    <div className="row text-center">
                        {this.state.cards.map((card, i) => <Card imgLink={card} key={i} />)}

                    </div>
                </div>
            </div>
        )
    }
};

export default Game;