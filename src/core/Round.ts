import { ICard } from './Card';
import { IPlayer } from './Player';
import { IDeck } from './Deck';

export interface IRound {
	start(): void;
	getCurrentPlayer(): IPlayer;
	putCards(player: IPlayer, cards: ICard[]): void;
}

export interface RoundOptions {
	players: IPlayer[];
	deck: IDeck;
	firstPlayer?: IPlayer;
}

export class NotAllowedActionError extends Error {
	constructor(message: string = 'This action can not be performed now') {
		super(message);
	}
}

export abstract class Round implements IRound {
	protected readonly players: IPlayer[];
	protected readonly deck: IDeck;
	protected currentPlayer: IPlayer;

	constructor(options: RoundOptions) {
		const { players, deck } = options;
		const { firstPlayer = options.players[0] } = options;
		this.players = players;
		this.deck = deck;
		this.currentPlayer = firstPlayer;
		this.start();
	}

	getCurrentPlayer(): IPlayer {
		return this.currentPlayer;
	}

	abstract start(): void;

	abstract putCards(player: IPlayer, cards: ICard[]): void;
}
