"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = require("./Deck");
var Card_1 = require("../Card");
var deck;
var mockCards = [new Card_1.Card(), new Card_1.Card()];
describe('Deck', function () {
    beforeEach(function () {
        deck = new Deck_1.Deck();
    });
    test('Should be able to add a card and then get it', function () {
        var card = new Card_1.Card();
        deck.addCards([card]);
        expect(deck.getCards()).toEqual([card]);
    });
    test('After picking a card, deck size should be decreased', function () {
        deck.addCards(mockCards);
        deck.pick();
        expect(deck.getCards()).toHaveLength(mockCards.length - 1);
    });
    test('Should pick last card', function () {
        deck.addCards(mockCards);
        var cards = deck.getCards();
        var lastCard = cards[cards.length - 1];
        expect(deck.pick()).toEqual(lastCard);
    });
});
