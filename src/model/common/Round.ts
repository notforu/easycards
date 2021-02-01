import { ICard } from '../Card';
import { IPlayer } from '../Player';
import { IAction } from './Action';
import { FoolGameRoundOptions } from '../FoolGame';
import { IDeck } from '../Deck';

export interface IRound {
	start(): void;
	put(player: IPlayer, cards: ICard[]): void;
	canPerform(player: IPlayer, action: IAction): boolean;
}

export interface RoundOptions {
	players: IPlayer[];
	deck: IDeck;
}

export abstract class Round implements IRound {
	protected readonly players: IPlayer[];
	protected readonly deck: IDeck;

	constructor(options: FoolGameRoundOptions) {
		const { players, deck } = options;
		this.players = players;
		this.deck = deck;
		this.start();
	}

	start(): void {
		for (let player of this.players) {
			player.fillHand(this.deck);
		}
	}

	abstract canPerform(player: IPlayer, action: IAction): boolean;

	abstract put(player: IPlayer, cards: ICard[]): void;
}
