"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.FoolGameRound = void 0;
var core_1 = require("../../../core");
var FoolGameRound = /** @class */ (function (_super) {
    __extends(FoolGameRound, _super);
    function FoolGameRound(options) {
        var _this = _super.call(this, options) || this;
        _this.beatMap = new Map();
        return _this;
    }
    FoolGameRound.prototype.start = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.players), _c = _b.next(); !_c.done; _c = _b.next()) {
                var player = _c.value;
                player.fillHand(this.deck);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    FoolGameRound.prototype.putCards = function (cards) {
        var e_2, _a;
        _super.prototype.putCards.call(this, cards);
        if (this.beatMap.size === 0) {
            this.currentPlayer = this.getNextPlayer();
        }
        try {
            for (var cards_1 = __values(cards), cards_1_1 = cards_1.next(); !cards_1_1.done; cards_1_1 = cards_1.next()) {
                var card = cards_1_1.value;
                this.beatMap.set(card, null);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (cards_1_1 && !cards_1_1.done && (_a = cards_1.return)) _a.call(cards_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    FoolGameRound.prototype.getBeatMap = function () {
        return this.beatMap;
    };
    FoolGameRound.prototype.getUnbeatenCards = function () {
        var e_3, _a;
        var result = [];
        try {
            for (var _b = __values(this.beatMap.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var card = _c.value;
                if (this.beatMap.get(card) === null) {
                    result.push(card);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    FoolGameRound.prototype.beat = function (player, target, card) {
        _super.prototype.putCards.call(this, [card]);
        this.beatMap.set(target, card);
    };
    FoolGameRound.prototype.getNextPlayer = function () {
        var index = this.players.indexOf(this.currentPlayer);
        if (index === this.players.length - 1) {
            return this.players[0];
        }
        return this.players[index + 1];
    };
    return FoolGameRound;
}(core_1.Round));
exports.FoolGameRound = FoolGameRound;
