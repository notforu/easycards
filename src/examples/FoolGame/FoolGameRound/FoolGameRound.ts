import { IRound, Round, RoundOptions, IPlayer } from '../../../core';
import { IFoolGameCard } from '../FoolGameCard';

export interface IFoolGameRound extends IRound<IFoolGameCard> {
	getUnbeatenCards(): IFoolGameCard[];
	getBeatMap(): Map<IFoolGameCard, IFoolGameCard | null>; // null if unbeaten
	beat(player: IPlayer, target: IFoolGameCard, card: IFoolGameCard): void;
}

export type FoolGameRoundOptions = RoundOptions<IFoolGameCard>;

export class FoolGameRound extends Round<IFoolGameCard> implements IFoolGameRound {
	private readonly beatMap: Map<IFoolGameCard, IFoolGameCard | null>;

	constructor(options: FoolGameRoundOptions) {
		super(options);
		this.beatMap = new Map<IFoolGameCard, IFoolGameCard | null>();
	}

	start(): void {
		for (const player of this.players) {
			player.fillHand(this.deck);
		}
	}

	putCards(cards: IFoolGameCard[]): void {
		super.putCards(cards);
		if (this.beatMap.size === 0) {
			this.currentPlayer = this.getNextPlayer();
		}
		for (const card of cards) {
			this.beatMap.set(card, null);
		}
	}

	getBeatMap(): Map<IFoolGameCard, IFoolGameCard | null> {
		return this.beatMap;
	}

	getUnbeatenCards(): IFoolGameCard[] {
		const result: IFoolGameCard[] = [];
		for (const card of this.beatMap.keys()) {
			if (this.beatMap.get(card) === null) {
				result.push(card);
			}
		}
		return result;
	}

	beat(player: IPlayer, target: IFoolGameCard, card: IFoolGameCard): void {
		super.putCards([card]);
		this.beatMap.set(target, card);
	}

	private getNextPlayer(): IPlayer<IFoolGameCard> {
		const index = this.players.indexOf(this.currentPlayer);
		if (index === this.players.length - 1) {
			return this.players[0];
		}
		return this.players[index + 1];
	}
}
