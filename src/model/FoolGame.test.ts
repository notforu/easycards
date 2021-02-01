import { FoolGame, IFoolGame } from './FoolGame';
import { Deck, DEFAULT_RANKS, IDeck } from './Deck';
import { DEFAULT_CARDS_PER_HAND, IPlayer, Player } from './Player';
import { Board, IBoard } from './Board';
import { Card } from './Card';

let sam: IPlayer;
let john: IPlayer;
let deck: IDeck;
let game: IFoolGame;
let board: IBoard;

describe('Game - initial setup', () => {
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
		game.startRound(john, [john.getCards()[0]]);
		expect(game.getCurrentPlayer()).toStrictEqual(sam);
	});

	test('Opponent should be able to beat with the higher card', () => {
		const six = new Card({ rank: '6' });
		const seven = new Card({ rank: '7' });
		john.takeCards([six]);
		game.startRound(john, [six]);
		sam.takeCards([seven]);
		game.beat(sam, six, seven);
		expect(game.getBoard().getUnbeatenCards()).toHaveLength(0);
	});
});
