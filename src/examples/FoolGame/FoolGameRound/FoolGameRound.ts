import { IRound, Round, RoundOptions, IPlayer, ICard } from '../../../core';

export interface IFoolGameRound extends IRound {
	getUnbeatenCards(): ICard[];
	getCards(): Map<ICard, ICard | null>; // null if unbeaten
	beat(player: IPlayer, target: ICard, card: ICard): void;
}

export class FoolGameRound extends Round implements IFoolGameRound {
	private readonly cards: Map<ICard, ICard | null>;

	constructor(options: RoundOptions) {
		super(options);
		this.cards = new Map<ICard, ICard | null>();
	}

	start(): void {
		for (const player of this.players) {
			player.fillHand(this.deck);
		}
	}

	putCards(player: IPlayer, cards: ICard[]): void {
		if (this.cards.size === 0) {
			this.currentPlayer = this.getNextPlayer();
		}
		for (const card of cards) {
			this.cards.set(card, null);
		}
	}

	getCards(): Map<ICard, ICard | null> {
		return this.cards;
	}

	getUnbeatenCards(): ICard[] {
		const result: ICard[] = [];
		for (const card of this.cards.keys()) {
			if (this.cards.get(card) === null) {
				result.push(card);
			}
		}
		return result;
	}

	beat(player: IPlayer, target: ICard, card: ICard): void {
		this.cards.set(target, card);
	}

	private getNextPlayer(): IPlayer {
		const index = this.players.indexOf(this.currentPlayer);
		if (index === this.players.length - 1) {
			return this.players[0];
		}
		return this.players[index + 1];
	}
}
