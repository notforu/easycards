"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoolGameDeck_1 = require("./FoolGameDeck");
var six = '6';
var seven = '7';
var deck;
describe('FoolGameDeck', function () {
    beforeEach(function () {
        deck = new FoolGameDeck_1.FoolGameDeck({ ranks: FoolGameDeck_1.DEFAULT_RANKS });
    });
    test('Default deck size should be 36', function () {
        expect(deck.getCards().length).toBe(36);
    });
    test('Deck should contain 4 cards of every specified rank, if customCounts is not specified', function () {
        var customDeck = new FoolGameDeck_1.FoolGameDeck({ ranks: [six, seven] });
        expect(customDeck.getCards().filter(function (card) { return card.getParams().rank === six; })).toHaveLength(4);
        expect(customDeck.getCards().filter(function (card) { return card.getParams().rank === seven; })).toHaveLength(4);
    });
    test('Should have custom amount of cards per rank, if customCount for this rank is specified', function () {
        var _a;
        var customDeck = new FoolGameDeck_1.FoolGameDeck({
            ranks: FoolGameDeck_1.DEFAULT_RANKS,
            customCounts: (_a = {},
                _a[six] = 1,
                _a),
        });
        expect(customDeck.getCards().filter(function (card) { return card.getParams().rank === six; })).toHaveLength(1);
    });
});
