import { IPlayer } from './Player';
import { IDeck } from './Deck';
import { IBoard } from './Board';

export interface IGame {
	start(): void;
	getCurrentPlayer(): IPlayer;
	getBoard(): IBoard;
	makeTurn(player: IPlayer, cardIndexes: number[]): void;
}

export interface GameOptions {
	players: IPlayer[];
	deck: IDeck;
	board: IBoard;
}

export class Game implements IGame {
	private readonly players: IPlayer[];
	private readonly deck: IDeck;
	private readonly board: IBoard;
	private currentPlayer: IPlayer;

	constructor(options: GameOptions) {
		const { players, deck, board } = options;
		if (players.length < 2) {
			throw new Error('Must be at least 2 players');
		}
		this.players = players;
		this.deck = deck;
		this.board = board;
		this.currentPlayer = players[0];
	}

	start(): void {
		for (let player of this.players) {
			player.fillHand(this.deck);
		}
	}

	getCurrentPlayer(): IPlayer {
		return this.currentPlayer;
	}

	getBoard(): IBoard {
		return this.board;
	}

	makeTurn(player: IPlayer, cardIndexes: number[]): void {
		this.board.put(player.withdraw(cardIndexes));
		this.currentPlayer = this.getNextPlayer();
	}

	private getNextPlayer(): IPlayer {
		const index = this.players.indexOf(this.currentPlayer);
		if (index === this.players.length - 1) {
			return this.players[0];
		}
		return this.players[index + 1];
	}
}
