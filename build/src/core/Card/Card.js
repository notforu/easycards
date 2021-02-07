"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(options) {
        if (options === void 0) { options = {}; }
        this.params = options;
    }
    Card.prototype.getParams = function () {
        return this.params;
    };
    return Card;
}());
exports.Card = Card;
