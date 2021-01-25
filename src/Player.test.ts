import { Player } from './Player';
import { Deck, IDeck } from './Deck';
import { DEFAULT_RANKS } from './constants';

let deck: IDeck;

describe('Player', () => {
	beforeEach(() => {
		deck = new Deck(DEFAULT_RANKS);
	});

	test('Should have an empty hand after being created', () => {
		const player = new Player(deck);
		expect(player.cards()).toHaveLength(0);
	});

	test('Should pick specified amount of cards', () => {
		const player = new Player(deck);
		const pickedCards = player.pickCards(5);
		expect(pickedCards).toHaveLength(5);
		expect(player.cards()).toHaveLength(5);
		expect(player.cards()).toEqual(pickedCards);
	});
});
