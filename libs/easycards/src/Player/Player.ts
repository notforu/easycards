import { ICard } from '../Card';
import { IDeck } from '../Deck';
import { IRound } from '../Round';

export interface IPlayer<Card extends ICard = ICard> {
	getCards(): Card[];
	pickCards(deck: IDeck<Card>, amount: number): Card[];
	withdraw(cards: Card[]): Card[];
	fillHand(deck: IDeck<Card>): void;
	takeCards(cards: Card[]): void;
	putCards(round: IRound, cards: Card[]): void;
}

export interface PlayerOptions {
	cardsPerHand: number;
}

export class Player<Card extends ICard = ICard> implements IPlayer<Card> {
	protected cards: Card[] = [];
	private cardsPerHand: number;

	constructor(options: PlayerOptions) {
		this.cardsPerHand = options.cardsPerHand;
	}

	getCards(): Card[] {
		return this.cards;
	}

	withdraw(cards: Card[]): Card[] {
		this.cards = this.cards.filter((card) => !cards.includes(card));
		return cards;
	}

	pickCards(deck: IDeck<Card>, amount: number): Card[] {
		for (let i = 0; i < amount; i++) {
			const card = deck.pick();
			if (card !== null) {
				this.cards.push(card);
			}
		}
		return this.cards;
	}

	fillHand(deck: IDeck<Card>): void {
		const neededAmount = this.cardsPerHand - this.cards.length;
		if (neededAmount > 0) {
			this.pickCards(deck, neededAmount);
		}
	}

	takeCards(cards: Card[]): void {
		this.cards.push(...cards);
	}

	putCards(round: IRound, cards: Card[]): void {
		for (const card of cards) {
			const index = this.cards.indexOf(card);
			this.cards.splice(index, 1);
		}
		round.putCards(cards);
	}
}
