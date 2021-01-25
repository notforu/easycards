import { Deck, DEFAULT_RANKS } from './Deck';

const six = '6';

describe('Deck', () => {
	test('Default deck size should be 36', () => {
		const deck = new Deck({ ranks: DEFAULT_RANKS });
		expect(deck.cards().length).toBe(36);
	});

	test('After picking a card, deck size should be decreased', () => {
		const deck = new Deck({ ranks: DEFAULT_RANKS });
		deck.pick();
		expect(deck.cards()).toHaveLength(35);
		deck.pick();
		deck.pick();
		expect(deck.cards()).toHaveLength(33);
	});

	test('Default deck should contain 4 cards of every specified ranks', () => {
		const deck = new Deck({ ranks: [six] });
		expect(deck.cards().filter((card) => card.rank === six)).toHaveLength(4);
	});

	test('Should have custom amount of cards per rank, if customCount for this rank is specified', () => {
		const deck = new Deck({
			ranks: [six],
			customCounts: {
				[six]: 1,
			},
		});
		const card = deck.pick();
		expect(card?.rank).toEqual(six);
		expect(deck.cards()).toHaveLength(0);
	});
});
