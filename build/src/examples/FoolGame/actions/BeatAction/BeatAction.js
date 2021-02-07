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
exports.BeatAction = void 0;
var core_1 = require("../../../../core");
var FoolGameDeck_1 = require("../../FoolGameDeck");
var BeatAction = /** @class */ (function (_super) {
    __extends(BeatAction, _super);
    function BeatAction(player, targetCard, card) {
        var _this = _super.call(this) || this;
        _this.player = player;
        _this.targetCard = targetCard;
        _this.card = card;
        return _this;
    }
    BeatAction.prototype.run = function (round) {
        _super.prototype.run.call(this, round);
        round.beat(this.player, this.targetCard, this.card);
    };
    BeatAction.prototype.canRun = function (round) {
        var isHigher = FoolGameDeck_1.DEFAULT_RANKS.indexOf(this.targetCard.getParams().rank) < FoolGameDeck_1.DEFAULT_RANKS.indexOf(this.card.getParams().rank);
        var sameSuit = this.targetCard.getParams().suit === this.card.getParams().suit;
        return (round.getCurrentPlayer() === this.player && round.getUnbeatenCards().length > 0 && isHigher && sameSuit);
    };
    return BeatAction;
}(core_1.Action));
exports.BeatAction = BeatAction;
