import { ICard } from './Card';

export interface IBoard {
	put(cards: ICard[]): void;
	getCards(): Map<ICard, ICard | null>; // null if unbeaten
}

export class Board implements IBoard {
	constructor() {}

	put(cards: ICard[]): void {}

	getCards(): Map<ICard, ICard> {
		return new Map<ICard, ICard>();
	}
}
