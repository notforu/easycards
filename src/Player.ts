import { ICard } from './Card';
import { IDeck } from './Deck';

export interface IPlayer {
	cards(): ICard[];
	pickCards(amount: number): ICard[];
}

export const DEFAULT_CARDS_PER_HAND = 6;

export class Player implements IPlayer {
	private _cards: ICard[] = [];
	constructor(private deck: IDeck) {}

	cards(): ICard[] {
		return this._cards;
	}

	pickCards(amount: number): ICard[] {
		for (let i = 0; i < amount; i++) {
			const card = this.deck.pick();
			if (card !== null) {
				this._cards.push(card);
			}
		}
		return this._cards;
	}
}
