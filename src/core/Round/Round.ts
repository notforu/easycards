import { ICard } from '../Card';
import { IPlayer } from '../Player';
import { IDeck } from '../Deck';

export interface IRound<Card extends ICard = ICard> {
	start(): void;
	getCurrentPlayer(): IPlayer<Card>;
	putCards(cards: Card[]): void;
	getCards(): Card[];
}

export interface RoundOptions<Card extends ICard = ICard> {
	players: IPlayer<Card>[];
	deck: IDeck<Card>;
	firstPlayer?: IPlayer<Card>;
}

export class NotAllowedActionError extends Error {
	constructor(message: string = 'This action can not be performed now') {
		super(message);
	}
}

export class Round<Card extends ICard = ICard> implements IRound<Card> {
	protected readonly players: IPlayer<Card>[];
	protected readonly deck: IDeck<Card>;
	protected readonly cards: Card[];
	protected currentPlayer: IPlayer<Card>;

	constructor(options: RoundOptions<Card>) {
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

	putCards(cards: Card[]): void {
		this.cards.push(...cards);
	};

	getCards(): Card[] {
		return this.cards;
	}

	start(): void {}
}
