import { Card, IDeck } from '../../../core';
import {IFoolGameCard, Suit } from '../FoolGameCard/FoolGameCard';

export const DEFAULT_CARDS_PER_RANK = 4;
export const DEFAULT_RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export interface DeckOptions {
	ranks: string[];
	customCounts?: Record<string, number>;
}

export type IFoolGameDeck = IDeck<IFoolGameCard>;

export class FoolGameDeck implements IFoolGameDeck {
	private cards: IFoolGameCard[] = [];

	constructor(options: DeckOptions = { ranks: DEFAULT_RANKS }) {
		const { ranks, customCounts } = options;
		for (const rank of ranks) {
			const count = customCounts?.[rank] || DEFAULT_CARDS_PER_RANK;
			for (let i = 0; i < count; i++) {
				this.cards.push(new Card({ rank, suit: Suit.Crosses }));
			}
		}
	}

	getCards(): IFoolGameCard[] {
		return this.cards;
	}

	pick(): IFoolGameCard | null {
		return this.cards.pop() || null;
	}
}
