import { ICard } from './Card';

export interface IDeck {
	cards(): ICard[];
}

export class Deck implements IDeck {
	constructor(ranks: string[]) {
	}
	public cards(): ICard[] {
		return Array(36);
	}
}
