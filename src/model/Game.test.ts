import { Game, IGame } from './Game';
import { Deck, DEFAULT_RANKS, IDeck } from './Deck';
import { DEFAULT_CARDS_PER_HAND, IPlayer, Player } from './Player';

let sam: IPlayer;
let john: IPlayer;
let deck: IDeck;
let game: IGame;

describe('Game', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		deck = new Deck({ ranks: DEFAULT_RANKS });
		game = new Game({
			deck,
			players: [john, sam],
		});
		game.start();
	});

	test('First player should begin the game', () => {
		expect(game.getCurrentPlayer()).toStrictEqual(john);
	});

	test('Every player should have 6 cards, when game starts', () => {
		expect(sam.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
		expect(john.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	/*
	TODO: separate it
	test('Should be exact card on board after turn', () => {
		const board = game.getBoard();
		const cards = john.turn([0]);
		board.put(cards);
		expect(board.getCards().has(cards[0]));
	});
	*/
});
