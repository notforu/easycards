"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Card_1 = require("../Card");
var __1 = require("../");
var deck;
var player;
var cardsPerHand = 4;
describe('Player', function () {
    beforeEach(function () {
        deck = new __1.Deck();
        deck.addCards(new Array(20).fill(null).map(function () { return new Card_1.Card(); }));
        player = new Player_1.Player({ cardsPerHand: cardsPerHand });
    });
    test('Should have an empty hand after being created', function () {
        expect(player.getCards()).toHaveLength(0);
    });
    test('Should pick specified amount of cards', function () {
        expect(player.getCards()).toHaveLength(0);
        var pickedCards = player.pickCards(deck, cardsPerHand);
        expect(player.getCards()).toStrictEqual(pickedCards);
    });
    test('Should fill hand if it is empty', function () {
        player.fillHand(deck);
        expect(player.getCards()).toHaveLength(cardsPerHand);
    });
    test('Withdraw should decrease hand size', function () {
        player.fillHand(deck);
        player.withdraw([player.getCards()[0]]);
        expect(player.getCards()).toHaveLength(cardsPerHand - 1);
    });
    test('Should withdraw exact cards', function () {
        player.fillHand(deck);
        var cards = player.getCards();
        var turn = player.withdraw([cards[0], cards[5]]);
        expect(cards[0]).toEqual(turn[0]);
        expect(cards[5]).toEqual(turn[1]);
    });
    test('Should take exact cards', function () {
        var ace = new Card_1.Card({ rank: 'A' });
        var six = new Card_1.Card({ rank: '6' });
        var cards = [ace, six];
        player.takeCards(cards);
        expect(player.getCards()).toContain(ace);
        expect(player.getCards()).toContain(six);
    });
});
