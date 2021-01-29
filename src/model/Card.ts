import { Identifiable } from './utils/Identifiable';
import { createCounter } from './utils/createCounter';

export interface ICard extends Identifiable {
	getRank(): string;
}

export interface CardOptions {
	rank: string;
}

const counter = createCounter();

export class Card implements ICard {
	private rank: string;
	private id: string = `Card_${String(counter())}`;

	constructor(options: CardOptions) {
		this.rank = options.rank;
	}

	getRank(): string {
		return this.rank;
	}

	getId(): string {
		return this.id;
	}
}
