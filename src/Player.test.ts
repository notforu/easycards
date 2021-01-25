import { Player, DEFAULT_CARDS_PER_HAND } from './Player';
import { Deck, IDeck, DEFAULT_RANKS } from './Deck';

let deck: IDeck;

describe('Player', () => {
	beforeEach(() => {
		deck = new Deck({ ranks: DEFAULT_RANKS });
	});

	test('Should have an empty hand after being created', () => {
		const player = new Player();
		expect(player.getCards()).toHaveLength(0);
	});

	test('Should pick specified amount of cards', () => {
		const player = new Player();
		const pickedCards = player.pickCards(deck, DEFAULT_CARDS_PER_HAND);
		expect(pickedCards).toHaveLength(DEFAULT_CARDS_PER_HAND);
		expect(player.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	test('Should pick exact card', () => {
		const six = '6';
		const oneCardDeck = new Deck({ ranks: [six], customCounts: { [six]: 1 } });
		const player = new Player();
		const card = player.pickCards(oneCardDeck, 1)?.[0];
		expect(card.rank).toBe(six);
	})
});
