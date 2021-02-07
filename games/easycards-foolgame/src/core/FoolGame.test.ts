import { FoolGame } from './FoolGame';
import { FoolGameDeck, DEFAULT_RANKS } from './FoolGameDeck';
import { IGame } from '../../core';
import { FoolGamePlayer } from './FoolGamePlayer';

let game: IGame;

describe('Game - initial setup', () => {
	beforeEach(() => {
		const sam = new FoolGamePlayer();
		const john = new FoolGamePlayer();
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
