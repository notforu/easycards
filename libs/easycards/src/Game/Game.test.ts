import { Game, IGame } from './Game';
import { Deck, IDeck } from '../Deck';
import { IPlayer, Player } from '../Player';
import { ICard } from '../Card';
import { IRound } from '../Round';

const cardsPerHand = 6;
let game: IGame<ICard, IRound, IDeck>;
let players: IPlayer[];
let deck: IDeck;

describe('Game', () => {
	beforeEach(() => {
		const sam = new Player({ cardsPerHand });
		const john = new Player({ cardsPerHand });
		players = [sam, john];
		deck = new Deck();
		game = new Game({ deck, players });
		game.start();
	});

	test('Should return players', () => {
		expect(game.getPlayers()).toEqual(players);
	});

	test('Should return current round', () => {
		expect(game.getCurrentRound()).toBeNull();
	});

	test('Should return deck', () => {
		expect(game.getDeck()).toEqual(deck);
	});
});
