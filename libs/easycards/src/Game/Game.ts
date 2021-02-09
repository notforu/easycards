import { ICard } from '../Card';
import { IRound } from '../Round';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IGame<Card extends ICard = ICard> {
	start(): void;
	getCurrentRound(): IRound<Card> | null;
	getPlayers(): IPlayer<Card>[];
	getDeck(): IDeck<Card>;
}

export interface GameOptions<Card extends ICard = ICard> {
	players: IPlayer<Card>[];
	deck: IDeck<Card>;
}

export class Game<Card extends ICard = ICard> implements IGame<Card> {
	protected readonly players: IPlayer<Card>[];
	protected readonly deck: IDeck<Card>;
	protected currentRound: IRound<Card> | null = null;

	constructor(options: GameOptions<Card>) {
		const { players, deck } = options;
		if (players.length < 2) {
			throw new Error('Must be at least 2 players');
		}
		this.players = players;
		this.deck = deck;
	}

	start(): void {}

	getCurrentRound(): IRound<Card> | null {
		return this.currentRound;
	}

	getPlayers(): IPlayer<Card>[] {
		return this.players;
	}

	getDeck(): IDeck<Card> {
		return this.deck;
	}
}
