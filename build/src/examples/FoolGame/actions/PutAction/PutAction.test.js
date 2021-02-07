"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var FoolGameDeck_1 = require("../../FoolGameDeck");
var core_1 = require("../../../../core");
var PutAction_1 = require("./PutAction");
var FoolGameCard_1 = require("../../FoolGameCard");
var FoolGamePlayer_1 = require("../../FoolGamePlayer");
var sam;
var john;
var round;
describe('FoolGame - PutAction', function () {
    beforeEach(function () {
        sam = new FoolGamePlayer_1.FoolGamePlayer();
        john = new FoolGamePlayer_1.FoolGamePlayer();
        round = new index_1.FoolGameRound({
            players: [john, sam],
            deck: new FoolGameDeck_1.FoolGameDeck({ ranks: FoolGameDeck_1.DEFAULT_RANKS }),
        });
    });
    test('Should not be able to perform when game starts', function () {
        var currentPlayer = round.getCurrentPlayer();
        expect(new PutAction_1.PutAction(currentPlayer, currentPlayer.getCards()).canRun(round)).toBeTruthy();
    });
    test('Should have exact cards player\'s after turn', function () {
        var ace = new core_1.Card({ rank: 'A', suit: FoolGameCard_1.Suit.Crosses });
        var six = new core_1.Card({ rank: '6', suit: FoolGameCard_1.Suit.Crosses });
        john.takeCards([ace, six]);
        new PutAction_1.PutAction(john, [ace, six]).run(round);
        expect(round.getBeatMap().get(ace)).toBeNull();
        expect(round.getBeatMap().get(six)).toBeNull();
    });
    test('Should be able to put more cards with same ranks', function () {
        var six1 = new core_1.Card({ rank: '6', suit: FoolGameCard_1.Suit.Crosses });
        var six2 = new core_1.Card({ rank: '6', suit: FoolGameCard_1.Suit.Crosses });
        john.takeCards([six1, six2]);
        new PutAction_1.PutAction(john, [six1]).run(round);
        expect(new PutAction_1.PutAction(john, [six2]).canRun(round)).toBeTruthy();
    });
    test('Shouldn\'t be able to put, if needs to beat', function () {
        var six = new core_1.Card({ rank: '6', suit: FoolGameCard_1.Suit.Crosses });
        var seven = new core_1.Card({ rank: '7', suit: FoolGameCard_1.Suit.Crosses });
        john.takeCards([six]);
        sam.takeCards([seven]);
        new PutAction_1.PutAction(john, [six]).run(round);
        expect(new PutAction_1.PutAction(sam, [seven]).canRun(round)).toBeFalsy();
    });
});
