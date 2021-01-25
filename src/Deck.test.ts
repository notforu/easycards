import { Deck } from './Deck';

describe('Deck', () => {
	test('Default deck size should be 36', () => {
		const deck = new Deck(['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
		expect(deck.cards().length).toBe(36);
	});
});
