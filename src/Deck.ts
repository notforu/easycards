import { ICard } from './Card';

export interface IDeck {
	cards(): ICard[];
	pick(): ICard;
}

const DEFAULT_CARDS_PER_RANK = 4;

export class Deck implements IDeck {
	private _cards: ICard[] = [];

	constructor(ranks: string[]) {
		for (const rank of ranks) {
			for (let i = 0; i < DEFAULT_CARDS_PER_RANK; i++) {
				this._cards.push({
					rank,
				});
			}
		}
	}

	cards(): ICard[] {
		return this._cards;
	}

	pick(): ICard {
		return this._cards.pop();
	}
}
