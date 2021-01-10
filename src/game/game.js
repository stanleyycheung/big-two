import React from 'react';

class Game extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    shuffleDeck(deck) {
        var currentIndex = deck.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }
        return deck;
    }

    createDeck() {
        const suits = ["♥", "♠", "♦", "♣"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var deck = [];
        for (let suit of suits) {
            for (let value of values) {
                let card = {
                    suit: suit,
                    display_value: value
                }
                deck.push(card)
            }
        }
        return deck
    }

    render() {
        <div>
            <p>
                test
            </p>
        </div>
    }

}

export default Game;