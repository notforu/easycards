import { FoolGameRound, IFoolGameRound } from './FoolGameRound';
import { IGame, IDeck, IPlayer } from '../core';

export interface GameOptions {
	players: IPlayer[];
	deck: IDeck;
}

export class FoolGame implements IGame {
	private readonly players: IPlayer[];
	private readonly deck: IDeck;
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
			players: this.players
		});
	}

	start(): void {}

	getCurrentRound(): IFoolGameRound {
		return this.currentRound;
	}
}
