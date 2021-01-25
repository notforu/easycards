import { IPlayer } from './Player';
import { IDeck } from './Deck';

export interface IGame {
	start(): void;
}

export interface GameOptions {
	players: IPlayer[];
	deck: IDeck;
}

export class Game implements IGame {
	private players: IPlayer[];
	private deck: IDeck;

	constructor(options: GameOptions) {
		const { players, deck } = options;
		this.players = players;
		this.deck = deck;
	}

	start(): void {
	}

	currentPlayer(): IPlayer {
		return this.players[0];
	}
}
