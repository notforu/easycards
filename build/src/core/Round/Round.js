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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = exports.NotAllowedActionError = void 0;
var NotAllowedActionError = /** @class */ (function (_super) {
    __extends(NotAllowedActionError, _super);
    function NotAllowedActionError(message) {
        if (message === void 0) { message = 'This action can not be performed now'; }
        return _super.call(this, message) || this;
    }
    return NotAllowedActionError;
}(Error));
exports.NotAllowedActionError = NotAllowedActionError;
var Round = /** @class */ (function () {
    function Round(options) {
        var players = options.players, deck = options.deck;
        var _a = options.firstPlayer, firstPlayer = _a === void 0 ? options.players[0] : _a;
        this.players = players;
        this.deck = deck;
        this.currentPlayer = firstPlayer;
        this.cards = [];
        this.start();
    }
    Round.prototype.getCurrentPlayer = function () {
        return this.currentPlayer;
    };
    Round.prototype.putCards = function (cards) {
        var _a;
        (_a = this.cards).push.apply(_a, __spread(cards));
    };
    ;
    Round.prototype.getCards = function () {
        return this.cards;
    };
    Round.prototype.start = function () { };
    return Round;
}());
exports.Round = Round;
