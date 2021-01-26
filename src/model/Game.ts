import { IPlayer } from './Player';
import { IDeck } from './Deck';
import { ICard } from './Card';
import { Board, IBoard } from './Board';

export interface IGame {
	start(): void;
	getCurrentPlayer(): IPlayer;
	getBoard(): IBoard;
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
		for (let player of this.players) {
			player.fillHand(this.deck);
		}
	}

	getCurrentPlayer(): IPlayer {
		return this.players[0];
	}

	getBoard(): IBoard {
		return new Board();
	}
}
