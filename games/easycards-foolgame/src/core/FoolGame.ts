import { FoolGameRound, IFoolGameRound } from './FoolGameRound';
import { IGame } from '../../core';
import { IFoolGamePlayer } from './FoolGamePlayer';
import { IFoolGameDeck } from './FoolGameDeck';

export interface GameOptions {
	players: IFoolGamePlayer[];
	deck: IFoolGameDeck;
}

export class FoolGame implements IGame {
	private readonly players: IFoolGamePlayer[];
	private readonly deck: IFoolGameDeck;
	private currentRound: IFoolGameRound;

	constructor(options: GameOptions) {
		const { players, deck } = options;
		if (players.length < 2) {
			throw new Error('Must be at least 2 players');
		}
		this.players = players;
		this.deck = deck;
		this.currentRound = new FoolGameRound({
			deck: this.deck,
			players: this.players,
		});
	}

	start(): void {}

	getCurrentRound(): IFoolGameRound {
		return this.currentRound;
	}
}
