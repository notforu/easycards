import { FoolGame } from './FoolGame';
import { Deck, DEFAULT_RANKS, IDeck } from '../Deck';
import { IPlayer, Player } from '../Player';
import { IGame } from '../common';

let sam: IPlayer;
let john: IPlayer;
let deck: IDeck;
let game: IGame;

describe('Game - initial setup', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		deck = new Deck({ ranks: DEFAULT_RANKS });
		game = new FoolGame({
			deck,
			players: [john, sam],
		});
		game.start();
	});

	test('Should initiate first round', () => {
		expect(game.getCurrentRound()).toBeDefined();
	});
});
