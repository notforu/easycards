"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(options) {
        this.cards = [];
        this.cardsPerHand = options.cardsPerHand;
    }
    Player.prototype.getCards = function () {
        return this.cards;
    };
    Player.prototype.withdraw = function (cards) {
        this.cards = this.cards.filter(function (card) { return !cards.includes(card); });
        return cards;
    };
    Player.prototype.pickCards = function (deck, amount) {
        for (var i = 0; i < amount; i++) {
            var card = deck.pick();
            if (card !== null) {
                this.cards.push(card);
            }
        }
        return this.cards;
    };
    Player.prototype.fillHand = function (deck) {
        var neededAmount = this.cardsPerHand - this.cards.length;
        if (neededAmount > 0) {
            this.pickCards(deck, neededAmount);
        }
    };
    Player.prototype.takeCards = function (cards) {
        var _a;
        (_a = this.cards).push.apply(_a, __spread(cards));
    };
    Player.prototype.putCards = function (round, cards) {
        var e_1, _a;
        try {
            for (var cards_1 = __values(cards), cards_1_1 = cards_1.next(); !cards_1_1.done; cards_1_1 = cards_1.next()) {
                var card = cards_1_1.value;
                var index = this.cards.indexOf(card);
                this.cards.splice(index, 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cards_1_1 && !cards_1_1.done && (_a = cards_1.return)) _a.call(cards_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        round.putCards(cards);
    };
    return Player;
}());
exports.Player = Player;
