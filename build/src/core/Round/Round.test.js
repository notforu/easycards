"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("../Player");
var Round_1 = require("./Round");
var Card_1 = require("../Card");
var Deck_1 = require("../Deck");
var sam;
var john;
var round;
var cardsPerHand = 6;
describe('Round', function () {
    beforeEach(function () {
        sam = new Player_1.Player({ cardsPerHand: cardsPerHand });
        john = new Player_1.Player({ cardsPerHand: cardsPerHand });
        round = new Round_1.Round({
            players: [john, sam],
            deck: new Deck_1.Deck()
        });
    });
    test('First player should start the round by default', function () {
        expect(round.getCurrentPlayer()).toStrictEqual(john);
    });
    test('Should be able to put card and then get it', function () {
        var jack = new Card_1.Card({ rank: 'J' });
        var nine = new Card_1.Card({ rank: '9' });
        john.putCards(round, [jack, nine]);
        expect(round.getCards()).toContain(jack);
        expect(round.getCards()).toContain(nine);
        expect(round.getCards()).toHaveLength(2);
    });
});
