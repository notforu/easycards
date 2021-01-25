import { ICard } from './Card';
import { IDeck } from './Deck';

export interface IPlayer {
	cards(): ICard[];
	pickCards(amount: number): ICard[];
}

export class Player implements IPlayer {
	private _cards: ICard[];
	constructor(private deck: IDeck) {}

	cards(): ICard[] {
		return this._cards || [];
	}

	pickCards(amount: number): ICard[] {
		this._cards = new Array(5);
		return this._cards;
	}
}
