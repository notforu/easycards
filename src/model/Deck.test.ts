import { Deck, DEFAULT_RANKS, IDeck } from './Deck';

const six = '6';
const seven = '7';
let deck: IDeck;

describe('Deck', () => {
	beforeEach(() => {
		deck = new Deck({ ranks: DEFAULT_RANKS });
	});

	test('Default deck size should be 36', () => {
		expect(deck.getCards().length).toBe(36);
	});

	test('After picking a card, deck size should be decreased', () => {
		deck.pick();
		expect(deck.getCards()).toHaveLength(35);
	});

	test('Should pick last card', () => {
		const cards = deck.getCards();
		const lastCard = cards[cards.length - 1];
		expect(deck.pick()).toEqual(lastCard);
	});

	test('Deck should contain 4 cards of every specified rank, if customCounts is not specified', () => {
		const customDeck = new Deck({ ranks: [six, seven] });
		expect(customDeck.getCards().filter((card) => card.getRank() === six)).toHaveLength(4);
		expect(customDeck.getCards().filter((card) => card.getRank() === seven)).toHaveLength(4);
	});

	test('Should have custom amount of cards per rank, if customCount for this rank is specified', () => {
		const customDeck = new Deck({
			ranks: DEFAULT_RANKS,
			customCounts: {
				[six]: 1,
			},
		});
		expect(customDeck.getCards().filter((card) => card.getRank() === six)).toHaveLength(1);
	});
});
