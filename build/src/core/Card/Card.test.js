"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
describe('Card', function () {
    test('Should return default parameters', function () {
        var name = 'Diablo';
        var HP = 30;
        var card = new Card_1.Card({ name: name, HP: HP });
        expect(card.getParams().name).toEqual(name);
        expect(card.getParams().HP).toEqual(HP);
    });
});
