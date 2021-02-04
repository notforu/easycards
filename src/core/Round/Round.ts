import { ICard } from '../Card';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IRound {
	start(): void;
	getCurrentPlayer(): IPlayer;
	putCards(cards: ICard[]): void;
	getCards(): ICard[];
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
	protected readonly cards: ICard[];
	protected currentPlayer: IPlayer;

	constructor(options: RoundOptions) {
		const { players, deck } = options;
		const { firstPlayer = options.players[0] } = options;
		this.players = players;
		this.deck = deck;
		this.currentPlayer = firstPlayer;
		this.cards = [];
		this.start();
	}

	getCurrentPlayer(): IPlayer {
		return this.currentPlayer;
	}

	putCards(cards: ICard[]): void {
		this.cards.push(...cards);
	};

	getCards(): ICard[] {
		return this.cards;
	}

	abstract start(): void;
}
