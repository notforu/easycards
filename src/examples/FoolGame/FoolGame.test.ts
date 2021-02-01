import { FoolGame } from './FoolGame';
import { FoolGameDeck, DEFAULT_RANKS } from './FoolGameDeck';
import { IGame, Player } from '../../core';

let game: IGame;

describe('Game - initial setup', () => {
	beforeEach(() => {
		const sam = new Player();
		const john = new Player();
		game = new FoolGame({
			deck: new FoolGameDeck({ ranks: DEFAULT_RANKS }),
			players: [john, sam],
		});
		game.start();
	});

	test('Should initiate first round', () => {
		expect(game.getCurrentRound()).toBeDefined();
	});
});
