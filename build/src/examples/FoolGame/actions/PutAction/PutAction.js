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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAction = void 0;
var core_1 = require("../../../../core");
var PutAction = /** @class */ (function (_super) {
    __extends(PutAction, _super);
    function PutAction(player, cards) {
        var _this = _super.call(this) || this;
        _this.player = player;
        _this.cards = cards;
        return _this;
    }
    PutAction.prototype.run = function (round) {
        _super.prototype.run.call(this, round);
        this.player.putCards(round, this.cards);
    };
    PutAction.prototype.canRun = function (round) {
        return (round.getCards().length === 0 && round.getCurrentPlayer() === this.player) || this.hasSameRank(round.getUnbeatenCards());
    };
    PutAction.prototype.hasSameRank = function (unbeatenCards) {
        var ranks = unbeatenCards.map(function (card) { return card.getParams().rank; });
        return this.cards.some(function (card) { return ranks.includes(card.getParams().rank); });
    };
    return PutAction;
}(core_1.Action));
exports.PutAction = PutAction;
