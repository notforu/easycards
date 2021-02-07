"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoolGamePlayer_1 = require("./FoolGamePlayer");
var FoolGameDeck_1 = require("../FoolGameDeck");
var deck;
var player;
describe('FoolGamePlayer', function () {
    beforeEach(function () {
        deck = new FoolGameDeck_1.FoolGameDeck();
        player = new FoolGamePlayer_1.FoolGamePlayer();
    });
    test('Should fill hand to default cardsPerHand of foolgame', function () {
        player.fillHand(deck);
        expect(player.getCards()).toHaveLength(FoolGamePlayer_1.DEFAULT_CARDS_PER_HAND);
    });
});
