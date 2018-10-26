import React, { Component } from "react";
import Card from "./dumbs/Card.js";
import Navbar from "../navbar";

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

import Walkers from "../images/walkers.jpg"


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
        ],
        clicked: []
    };
    componentDidMount() {
        this.nextTurn();
    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    handleCardSelect = async event => {
        let selected = event.target.getAttribute("src");

        if (this.state.clicked.includes(selected)) {
            await this.setState({ clicked: [] })
            this.props.score("Wrong")
        }
        else {
            await this.setState(prevState => ({ clicked: [...prevState.clicked, selected] }))
            this.props.score("Correct")
        }
        this.nextTurn();
    };
    nextTurn = async () => {
        await this.setState({ cards: this.shuffle(this.state.cards) });
    };
    render() {
        return (
            <div style={{
                backgroundImage: `url(${Walkers})`, backgroundSize: 'cover',
            }}>
                <div className="container text-center">
                    <div className="row text-center">
                        {this.state.cards.map((card, i) => <Card imgLink={card} key={i} onClick={this.handleCardSelect} />)}
                    </div>
                </div>
            </div>
        )
    }
};

export default Game;