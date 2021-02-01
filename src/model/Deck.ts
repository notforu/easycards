import { Card, ICard } from './Card';

export interface IDeck {
	getCards(): ICard[];
	pick(): ICard | null;
}

export const DEFAULT_CARDS_PER_RANK = 4;
export const DEFAULT_RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export interface DeckOptions {
	ranks: string[];
	customCounts?: Record<string, number>;
}

export class Deck implements IDeck {
	private _cards: ICard[] = [];

	constructor(options: DeckOptions = { ranks: DEFAULT_RANKS }) {
		const { ranks, customCounts } = options;
		for (const rank of ranks) {
			const count = customCounts?.[rank] || DEFAULT_CARDS_PER_RANK;
			for (let i = 0; i < count; i++) {
				this._cards.push(new Card({ rank }));
			}
		}
	}

	getCards(): ICard[] {
		return this._cards;
	}

	pick(): ICard | null {
		return this._cards.pop() || null;
	}
}
