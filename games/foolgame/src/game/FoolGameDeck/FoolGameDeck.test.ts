import { DEFAULT_RANKS, FoolGameDeck, IFoolGameDeck } from './FoolGameDeck';
import { IFoolGameCard, Suit } from '../FoolGameCard';

const six = '6';
const seven = '7';
let deck: IFoolGameDeck;

function filterBySuit(cards: IFoolGameCard[], suit: Suit): IFoolGameCard[] {
	return cards.filter((card) => card.getParams().suit === suit);
}

describe('FoolGameDeck', () => {
	beforeEach(() => {
		deck = new FoolGameDeck({ ranks: DEFAULT_RANKS });
	});

	test('Default deck size should be 36', () => {
		expect(deck.getCards().length).toBe(36);
	});

	test('Deck should contain 4 cards of every specified rank, if customCounts is not specified', () => {
		const customDeck = new FoolGameDeck({ ranks: [six, seven] });
		expect(customDeck.getCards().filter((card) => card.getParams().rank === six)).toHaveLength(4);
		expect(customDeck.getCards().filter((card) => card.getParams().rank === seven)).toHaveLength(4);
	});

	test('Should have custom amount of cards per rank, if customCount for this rank is specified', () => {
		const customDeck = new FoolGameDeck({
			ranks: DEFAULT_RANKS,
			customCounts: {
				[six]: 1,
			},
		});
		expect(customDeck.getCards().filter((card) => card.getParams().rank === six)).toHaveLength(1);
	});

	test('Should be 4 cards of every suit in each rank', () => {
		const customDeck = new FoolGameDeck({ ranks: [six] });
		expect(filterBySuit(customDeck.getCards(), Suit.Diamonds)).toHaveLength(1);
		expect(filterBySuit(customDeck.getCards(), Suit.Clubs)).toHaveLength(1);
		expect(filterBySuit(customDeck.getCards(), Suit.Hearts)).toHaveLength(1);
		expect(filterBySuit(customDeck.getCards(), Suit.Spades)).toHaveLength(1);
	});
});
