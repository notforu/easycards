import { ICard } from '../Card';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IRound {
	start(): void;
	put(player: IPlayer, cards: ICard[]): void;
}

export interface RoundOptions {
	players: IPlayer[];
	deck: IDeck;
}

export class NotAllowedActionError extends Error {
	constructor(message: string = 'This action can not be performed now') {
		super(message);
	}
}

export abstract class Round implements IRound {
	protected readonly players: IPlayer[];
	protected readonly deck: IDeck;

	constructor(options: RoundOptions) {
		const { players, deck } = options;
		this.players = players;
		this.deck = deck;
		this.start();
	}

	abstract start(): void;

	abstract put(player: IPlayer, cards: ICard[]): void;
}
