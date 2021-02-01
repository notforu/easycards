import { FoolGame } from './FoolGame';
import { FoolGameDeck, DEFAULT_RANKS } from './FoolGameDeck';
import { IGame, IPlayer, Player } from '../core';

let sam: IPlayer;
let john: IPlayer;
let game: IGame;

describe('Game - initial setup', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
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
