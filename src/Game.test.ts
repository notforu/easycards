import { Game } from './Game';
import { Deck, DEFAULT_RANKS } from './Deck';
import { Player } from './Player';

describe('Game', () => {
	test('First player should start the game', () => {
		const deck = new Deck({ ranks: DEFAULT_RANKS });
		const john = new Player();
		const sam = new Player();
		const game = new Game({
			deck,
			players: [john, sam],
		});
		game.start();
		expect(game.currentPlayer()).toStrictEqual(john);
	});
});
