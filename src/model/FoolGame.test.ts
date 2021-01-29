import { FoolGame, IFoolGame } from './FoolGame';
import { Deck, DEFAULT_RANKS, IDeck } from './Deck';
import { DEFAULT_CARDS_PER_HAND, IPlayer, Player } from './Player';
import { Board, IBoard } from './Board';

let sam: IPlayer;
let john: IPlayer;
let deck: IDeck;
let game: IFoolGame;
let board: IBoard;

describe('Game', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		deck = new Deck({ ranks: DEFAULT_RANKS });
		board = new Board();
		game = new FoolGame({
			deck,
			players: [john, sam],
			board,
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

	test('Should pass the turn after starting round', () => {
		game.startRound(john, [john.getCards()[0].getId()]);
		expect(game.getCurrentPlayer()).toStrictEqual(sam);
	});

	test('Opponent should be able to beat the card with the highest card', () => {
		game.startRound(john, [john.getCards()[0].getId()]);
		const cards = game.getBoard().getUnbeatenCards();
		game.beat(sam, cards[0].getId(), sam.getCards()[0].getId());
		expect(game.getCurrentPlayer()).toStrictEqual(sam);
	});
});
