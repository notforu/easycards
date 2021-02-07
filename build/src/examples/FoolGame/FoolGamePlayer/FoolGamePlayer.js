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
exports.FoolGamePlayer = exports.DEFAULT_CARDS_PER_HAND = void 0;
var Player_1 = require("../../../core/Player");
exports.DEFAULT_CARDS_PER_HAND = 6;
var FoolGamePlayer = /** @class */ (function (_super) {
    __extends(FoolGamePlayer, _super);
    function FoolGamePlayer() {
        return _super.call(this, { cardsPerHand: exports.DEFAULT_CARDS_PER_HAND }) || this;
    }
    return FoolGamePlayer;
}(Player_1.Player));
exports.FoolGamePlayer = FoolGamePlayer;
