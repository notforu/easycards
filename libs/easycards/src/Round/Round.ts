import EventEmitter from 'eventemitter3';
import { ICard } from '../Card';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IRound<Card extends ICard = ICard, Deck extends IDeck = IDeck>
	extends EventEmitter<RoundEvents> {
	start(): void;
	getCurrentPlayer(): IPlayer<Card>;
	setCurrentPlayer(player: IPlayer<Card>): void;
	putCards(cards: Card[]): void;
	getCards(): Card[];
}

export interface RoundOptions<Card extends ICard, Deck extends IDeck> {
	players: IPlayer<Card>[];
	deck: Deck;
	firstPlayer?: IPlayer<Card>;
}

export class NotAllowedActionError extends Error {
	constructor(message: string = 'This action can not be performed now') {
		super(message);
	}
}

export interface RoundEvents {
	currentPlayerChanged: (player: IPlayer) => void;
	cardsChanged: (cards: ICard[]) => void;
}

export class Round<Card extends ICard, Deck extends IDeck>
	extends EventEmitter<RoundEvents>
	implements IRound<Card, Deck> {
	protected readonly players: IPlayer<Card>[];
	protected readonly deck: Deck;
	protected readonly cards: Card[];
	protected currentPlayer: IPlayer<Card>;

	constructor(options: RoundOptions<Card, Deck>) {
		super();
		const { players, deck } = options;
		const { firstPlayer = options.players[0] } = options;
		this.players = players;
		this.deck = deck;
		this.currentPlayer = firstPlayer;
		this.cards = [];
		this.start();
	}

	getCurrentPlayer(): IPlayer<Card> {
		return this.currentPlayer;
	}

	setCurrentPlayer(player: IPlayer<Card>): void {
		this.currentPlayer = player;
		this.emit('currentPlayerChanged', player);
	}

	putCards(cards: Card[]): void {
		this.cards.push(...cards);
		this.emit('cardsChanged', this.cards);
	}

	getCards(): Card[] {
		return this.cards;
	}

	start(): void {}
}
