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
exports.FoolGameDeck = exports.DEFAULT_RANKS = exports.DEFAULT_CARDS_PER_RANK = void 0;
var core_1 = require("../../../core");
var FoolGameCard_1 = require("../FoolGameCard");
exports.DEFAULT_CARDS_PER_RANK = 4;
exports.DEFAULT_RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var FoolGameDeck = /** @class */ (function (_super) {
    __extends(FoolGameDeck, _super);
    function FoolGameDeck(options) {
        var e_1, _a;
        if (options === void 0) { options = { ranks: exports.DEFAULT_RANKS }; }
        var _this = _super.call(this) || this;
        var ranks = options.ranks, customCounts = options.customCounts;
        try {
            for (var ranks_1 = __values(ranks), ranks_1_1 = ranks_1.next(); !ranks_1_1.done; ranks_1_1 = ranks_1.next()) {
                var rank = ranks_1_1.value;
                var count = (customCounts === null || customCounts === void 0 ? void 0 : customCounts[rank]) || exports.DEFAULT_CARDS_PER_RANK;
                for (var i = 0; i < count; i++) {
                    _this.cards.push(new core_1.Card({ rank: rank, suit: FoolGameCard_1.Suit.Crosses }));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (ranks_1_1 && !ranks_1_1.done && (_a = ranks_1.return)) _a.call(ranks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    return FoolGameDeck;
}(core_1.Deck));
exports.FoolGameDeck = FoolGameDeck;
