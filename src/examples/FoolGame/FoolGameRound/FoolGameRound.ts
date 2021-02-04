import { IRound, Round, RoundOptions, IPlayer, ICard } from '../../../core';

export interface IFoolGameRound extends IRound {
	getUnbeatenCards(): ICard[];
	getBeatMap(): Map<ICard, ICard | null>; // null if unbeaten
	beat(player: IPlayer, target: ICard, card: ICard): void;
}

export class FoolGameRound extends Round implements IFoolGameRound {
	private readonly beatMap: Map<ICard, ICard | null>;

	constructor(options: RoundOptions) {
		super(options);
		this.beatMap = new Map<ICard, ICard | null>();
	}

	start(): void {
		for (const player of this.players) {
			player.fillHand(this.deck);
		}
	}

	putCards(cards: ICard[]): void {
		super.putCards(cards);
		if (this.beatMap.size === 0) {
			this.currentPlayer = this.getNextPlayer();
		}
		for (const card of cards) {
			this.beatMap.set(card, null);
		}
	}

	getBeatMap(): Map<ICard, ICard | null> {
		return this.beatMap;
	}

	getUnbeatenCards(): ICard[] {
		const result: ICard[] = [];
		for (const card of this.beatMap.keys()) {
			if (this.beatMap.get(card) === null) {
				result.push(card);
			}
		}
		return result;
	}

	beat(player: IPlayer, target: ICard, card: ICard): void {
		super.putCards([card]);
		this.beatMap.set(target, card);
	}

	private getNextPlayer(): IPlayer {
		const index = this.players.indexOf(this.currentPlayer);
		if (index === this.players.length - 1) {
			return this.players[0];
		}
		return this.players[index + 1];
	}
}
