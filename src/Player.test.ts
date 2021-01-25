import { Player, DEFAULT_CARDS_PER_HAND } from './Player';
import { Deck, IDeck, DEFAULT_RANKS } from './Deck';

let deck: IDeck;

describe('Player', () => {
	beforeEach(() => {
		deck = new Deck({ ranks: DEFAULT_RANKS });
	});

	test('Should have an empty hand after being created', () => {
		const player = new Player(deck);
		expect(player.cards()).toHaveLength(0);
	});

	test('Should pick specified amount of cards', () => {
		const player = new Player(deck);
		const pickedCards = player.pickCards(DEFAULT_CARDS_PER_HAND);
		expect(pickedCards).toHaveLength(DEFAULT_CARDS_PER_HAND);
		expect(player.cards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	test('Should pick exact card', () => {
		const six = '6';
		const oneCardDeck = new Deck({ ranks: [six], customCounts: { 6: 1 } });
		const player = new Player(oneCardDeck);
		const card = player.pickCards(1)?.[0];
		expect(card.rank).toBe(six);
	})
});
