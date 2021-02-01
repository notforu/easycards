import { Card, ICard, IDeck } from '../../../core';

export const DEFAULT_CARDS_PER_RANK = 4;
export const DEFAULT_RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export interface DeckOptions {
	ranks: string[];
	customCounts?: Record<string, number>;
}

export class FoolGameDeck implements IDeck {
	private cards: ICard[] = [];

	constructor(options: DeckOptions = { ranks: DEFAULT_RANKS }) {
		const { ranks, customCounts } = options;
		for (const rank of ranks) {
			const count = customCounts?.[rank] || DEFAULT_CARDS_PER_RANK;
			for (let i = 0; i < count; i++) {
				this.cards.push(new Card({ rank }));
			}
		}
	}

	getCards(): ICard[] {
		return this.cards;
	}

	pick(): ICard | null {
		return this.cards.pop() || null;
	}
}
