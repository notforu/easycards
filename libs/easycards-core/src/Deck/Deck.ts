import { ICard } from '../Card';

export interface IDeck<Card extends ICard = ICard> {
	getCards(): Card[];
	pick(): Card | null;
	addCards(cards: Card[]): void
}

export class Deck<Card extends ICard = ICard> implements IDeck<Card> {
	protected cards: Card[] = [];

	getCards(): Card[] {
		return this.cards;
	}

	pick(): Card | null {
		return this.cards.pop() || null;
	}

	addCards(cards: Card[]): void {
		this.cards.push(...cards);
	}
}
