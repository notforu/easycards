"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoolGame_1 = require("./FoolGame");
var FoolGameDeck_1 = require("./FoolGameDeck");
var FoolGamePlayer_1 = require("./FoolGamePlayer");
var game;
describe('Game - initial setup', function () {
    beforeEach(function () {
        var sam = new FoolGamePlayer_1.FoolGamePlayer();
        var john = new FoolGamePlayer_1.FoolGamePlayer();
        game = new FoolGame_1.FoolGame({
            deck: new FoolGameDeck_1.FoolGameDeck({ ranks: FoolGameDeck_1.DEFAULT_RANKS }),
            players: [john, sam],
        });
        game.start();
    });
    test('Should initiate first round', function () {
        expect(game.getCurrentRound()).toBeDefined();
    });
});
