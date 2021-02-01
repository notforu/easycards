import { ICard } from '../Card';
import { IRound, Round, RoundOptions } from '../common/Round';
import { IPlayer } from '../Player';
import { DEFAULT_RANKS, IDeck } from '../Deck';
import { IncorrectBeatError } from '../utils/errors';
import { IAction } from '../common/Action';

export interface IFoolGameRound extends IRound {
	getUnbeatenCards(): ICard[];
	getCards(): Map<ICard, ICard | null>; // null if unbeaten
	beat(player: IPlayer, target: ICard, card: ICard): void;
	getCurrentPlayer(): IPlayer;
}

export interface FoolGameRoundOptions extends RoundOptions {
	firstPlayer?: IPlayer;
}

export class FoolGameRound extends Round implements IFoolGameRound {
	private readonly cards: Map<ICard, ICard | null>;
	private currentPlayer: IPlayer;

	constructor(options: FoolGameRoundOptions) {
		super(options);
		const { firstPlayer = options.players[0] } = options;
		this.cards = new Map<ICard, ICard | null>();
		this.currentPlayer = firstPlayer;
	}

	put(player: IPlayer, cards: ICard[]): void {
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
		if (!this.canBeat(target, card)) {
			throw new IncorrectBeatError();
		}
		this.cards.set(target, card);
	}

	canPerform(player: IPlayer, action: IAction): boolean {
		return true;
	}

	getCurrentPlayer(): IPlayer {
		return this.currentPlayer;
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
