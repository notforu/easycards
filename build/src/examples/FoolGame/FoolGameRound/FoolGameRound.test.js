"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoolGameDeck_1 = require("../FoolGameDeck");
var FoolGameRound_1 = require("./FoolGameRound");
var core_1 = require("../../../core");
var FoolGameCard_1 = require("../FoolGameCard");
var sam;
var john;
var round;
var cardsPerHand = 6;
describe('Fool game round logic', function () {
    beforeEach(function () {
        sam = new core_1.Player({ cardsPerHand: cardsPerHand });
        john = new core_1.Player({ cardsPerHand: cardsPerHand });
        round = new FoolGameRound_1.FoolGameRound({
            players: [john, sam],
            deck: new FoolGameDeck_1.FoolGameDeck({ ranks: FoolGameDeck_1.DEFAULT_RANKS })
        });
    });
    test('Should be empty after being created', function () {
        expect(round.getBeatMap().size).toEqual(0);
    });
    test('Every player should have 6 cards, when game starts', function () {
        expect(sam.getCards()).toHaveLength(cardsPerHand);
        expect(john.getCards()).toHaveLength(cardsPerHand);
    });
    test('Should return unbeaten card', function () {
        var ace = new core_1.Card({ rank: 'A' });
        john.takeCards([ace]);
        john.putCards(round, [ace]);
        expect(round.getUnbeatenCards()).toEqual([ace]);
    });
    test('Should be able to get all cards, including beaten', function () {
        var jack = new core_1.Card({ rank: 'J', suit: FoolGameCard_1.Suit.Crosses });
        john.putCards(round, [jack]);
        var ace = new core_1.Card({ rank: 'A', suit: FoolGameCard_1.Suit.Crosses });
        round.beat(sam, jack, ace);
        expect(round.getCards()).toHaveLength(2);
        expect(round.getCards()).toContain(jack);
        expect(round.getCards()).toContain(ace);
    });
});
