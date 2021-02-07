"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoolGame = void 0;
var FoolGameRound_1 = require("./FoolGameRound");
var FoolGame = /** @class */ (function () {
    function FoolGame(options) {
        var players = options.players, deck = options.deck;
        if (players.length < 2) {
            throw new Error('Must be at least 2 players');
        }
        this.players = players;
        this.deck = deck;
        this.currentRound = new FoolGameRound_1.FoolGameRound({
            deck: this.deck,
            players: this.players
        });
    }
    FoolGame.prototype.start = function () { };
    FoolGame.prototype.getCurrentRound = function () {
        return this.currentRound;
    };
    return FoolGame;
}());
exports.FoolGame = FoolGame;
