import { Deck } from './Deck';
import { DEFAULT_RANKS } from './constants';

describe('Deck', () => {
	test('Default deck size should be 36', () => {
		const deck = new Deck(DEFAULT_RANKS);
		expect(deck.cards().length).toBe(36);
	});

	test('After picking a card, deck size should be decreased', () => {
		const deck = new Deck(DEFAULT_RANKS);
		deck.pick();
		expect(deck.cards()).toHaveLength(35);
		deck.pick();
		deck.pick();
		expect(deck.cards()).toHaveLength(33);
	});

	test('Default deck should contain 4 cards of every specified ranks', () => {
		const deck = new Deck(['6', '7']);
		expect(deck.cards().filter(card => card.rank === '6')).toHaveLength(4);
		expect(deck.cards().filter(card => card.rank === '7')).toHaveLength(4);
	});
});
