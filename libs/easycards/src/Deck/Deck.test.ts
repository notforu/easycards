import { Deck, IDeck } from './Deck';
import { Card, ICard } from '../Card';

let deck: IDeck;
const mockCards = [new Card(), new Card()];

interface CustomCard extends ICard {
	foo: string;
}

describe('Deck', () => {
	beforeEach(() => {
		deck = new Deck<CustomCard>();
	});

	test('Should be able to add a card and then get it', () => {
		const card = new Card();
		deck.addCards([card]);
		expect(deck.getCards()).toEqual([card]);
	});

	test('After picking a card, deck size should be decreased', () => {
		deck.addCards(mockCards);
		deck.pick();
		expect(deck.getCards()).toHaveLength(mockCards.length - 1);
	});

	test('Should pick last card', () => {
		deck.addCards(mockCards);
		const cards = deck.getCards();
		const lastCard = cards[cards.length - 1];
		expect(deck.pick()).toEqual(lastCard);
	});
});
