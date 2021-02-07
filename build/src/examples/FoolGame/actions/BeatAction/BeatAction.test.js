"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var FoolGameDeck_1 = require("../../FoolGameDeck");
var core_1 = require("../../../../core");
var PutAction_1 = require("../PutAction");
var BeatAction_1 = require("./BeatAction");
var FoolGameCard_1 = require("../../FoolGameCard");
var FoolGamePlayer_1 = require("../../FoolGamePlayer");
var sam;
var john;
var round;
describe('FoolGame - BeatAction', function () {
    beforeEach(function () {
        sam = new FoolGamePlayer_1.FoolGamePlayer();
        john = new FoolGamePlayer_1.FoolGamePlayer();
        round = new index_1.FoolGameRound({
            players: [john, sam],
            deck: new FoolGameDeck_1.FoolGameDeck(),
        });
    });
    test('After put opponent should be able to beat with the higher card', function () {
        var six = new core_1.Card({ rank: '6', suit: FoolGameCard_1.Suit.Crosses });
        john.takeCards([six]);
        new PutAction_1.PutAction(john, [six]).run(round);
        var seven = new core_1.Card({ rank: '7', suit: FoolGameCard_1.Suit.Crosses });
        sam.takeCards([seven]);
        new BeatAction_1.BeatAction(sam, six, seven).run(round);
        expect(round.getUnbeatenCards()).toHaveLength(0);
    });
    test('Opponent should not be able to beat with the lower card', function () {
        var queen = new core_1.Card({ rank: 'Q', suit: FoolGameCard_1.Suit.Crosses });
        var seven = new core_1.Card({ rank: '7', suit: FoolGameCard_1.Suit.Crosses });
        john.takeCards([queen]);
        new PutAction_1.PutAction(john, [queen]).run(round);
        sam.takeCards([seven]);
        expect(function () { return new BeatAction_1.BeatAction(sam, queen, seven).run(round); }).toThrowError(new core_1.NotAllowedActionError());
    });
    test('Should not be able to beat with another suit if it is not empowered', function () {
        var queen = new core_1.Card({ rank: 'Q', suit: FoolGameCard_1.Suit.Crosses });
        var seven = new core_1.Card({ rank: '7', suit: FoolGameCard_1.Suit.Diamonds });
        john.takeCards([seven]);
        new PutAction_1.PutAction(john, [seven]).run(round);
        sam.takeCards([queen]);
        expect(function () { return new BeatAction_1.BeatAction(sam, seven, queen).run(round); }).toThrowError(new core_1.NotAllowedActionError());
    });
});
