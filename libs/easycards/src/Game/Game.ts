import { ICard } from '../Card';
import { IRound } from '../Round';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IGame<Card extends ICard, Round extends IRound, Deck extends IDeck> {
	start(): void;
	getCurrentRound(): Round | null;
	getPlayers(): IPlayer<Card>[];
	getDeck(): Deck;
}

export interface GameOptions<Card extends ICard, Deck extends IDeck> {
	players: IPlayer<Card>[];
	deck: Deck;
}

export class Game<Card extends ICard, Round extends IRound, Deck extends IDeck>
	implements IGame<Card, Round, Deck> {
	protected readonly players: IPlayer<Card>[];
	protected readonly deck: Deck;
	protected currentRound: Round | null = null;

	constructor(options: GameOptions<Card, Deck>) {
		const { players, deck } = options;
		if (players.length < 2) {
			throw new Error('Must be at least 2 players');
		}
		this.players = players;
		this.deck = deck;
	}

	start(): void {}

	getCurrentRound(): Round | null {
		return this.currentRound;
	}

	getPlayers(): IPlayer<Card>[] {
		return this.players;
	}

	getDeck(): Deck {
		return this.deck;
	}
}
