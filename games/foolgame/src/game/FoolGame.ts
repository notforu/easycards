import { IGame, Game } from 'easycards';
import { FoolGameRound } from './FoolGameRound';
import { IFoolGamePlayer } from './FoolGamePlayer';
import { IFoolGameDeck } from './FoolGameDeck';
import { IFoolGameCard } from './FoolGameCard';

export interface GameOptions {
	players: IFoolGamePlayer[];
	deck: IFoolGameDeck;
}

export type IFoolGame = IGame<IFoolGameCard>;

export class FoolGame extends Game<IFoolGameCard> implements IFoolGame {
	constructor(options: GameOptions) {
		super(options);
		const { players, deck } = options;
		if (players.length < 2) {
			throw new Error('Must be at least 2 players');
		}
	}

	start(): void {
		this.currentRound = new FoolGameRound({
			deck: this.deck,
			players: this.players,
		});
	}
}
