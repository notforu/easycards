import { ICard } from './Card';

export interface IBoard {
	put(cards: ICard[]): void;
	getCards(): Map<ICard, ICard | null>; // null if unbeaten
}

export class Board implements IBoard {
	private readonly cards: Map<ICard, ICard | null>;
	constructor() {
		this.cards = new Map<ICard, ICard | null>();
	}

	put(cards: ICard[]): void {
		for (const card of cards) {
			this.cards.set(card, null);
		}
	}

	getCards(): Map<ICard, ICard | null> {
		return this.cards;
	}
}
