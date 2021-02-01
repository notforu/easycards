import { IPlayer } from './Player';
import { DEFAULT_RANKS, IDeck } from './Deck';
import { IBoard } from './Board';
import { ICard } from './Card';
import { IncorrectBeatError } from './utils/errors';

export interface IFoolGame {
	start(): void;
	getCurrentPlayer(): IPlayer;
	getBoard(): IBoard;
	startRound(player: IPlayer, cards: ICard[]): void;
	beat(player: IPlayer, target: ICard, card: ICard): void;
}

export interface GameOptions {
	players: IPlayer[];
	deck: IDeck;
	board: IBoard;
}

export class FoolGame implements IFoolGame {
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

	startRound(player: IPlayer, cards: ICard[]): void {
		this.board.put(player.withdraw(cards));
		this.currentPlayer = this.getNextPlayer();
	}

	beat(player: IPlayer, target: ICard, card: ICard): void {
		if (!this.canBeat(target, card)) {
			throw new IncorrectBeatError();
		}
		return this.board.beat(target, card);
	}

	private getNextPlayer(): IPlayer {
		const index = this.players.indexOf(this.currentPlayer);
		if (index === this.players.length - 1) {
			return this.players[0];
		}
		return this.players[index + 1];
	}

	private canBeat(target: ICard, card: ICard): boolean {
		return DEFAULT_RANKS.indexOf(target.getRank()) < DEFAULT_RANKS.indexOf(card.getRank());
	}
}
