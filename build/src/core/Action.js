"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Round_1 = require("./Round");
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.prototype.run = function (round) {
        if (!this.canRun(round)) {
            throw new Round_1.NotAllowedActionError();
        }
    };
    return Action;
}());
exports.Action = Action;
