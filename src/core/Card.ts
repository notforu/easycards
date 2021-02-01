export interface ICard {
	getRank(): string;
}

export interface CardOptions {
	rank: string;
}

export class Card implements ICard {
	private rank: string;

	constructor(options: CardOptions) {
		this.rank = options.rank;
	}

	getRank(): string {
		return this.rank;
	}
}
