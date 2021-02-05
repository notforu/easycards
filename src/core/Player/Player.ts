import { ICard } from '../Card/Card';
import { IDeck } from '../Deck';
import { IRound } from '../Round';

export interface IPlayer {
	getCards(): ICard[];
	pickCards(deck: IDeck, amount: number): ICard[];
	withdraw(cards: ICard[]): ICard[];
	fillHand(deck: IDeck): void;
	takeCards(cards: ICard[]): void;
	putCards(round: IRound, cards: ICard[]): void;
}

// TODO: get rid of this
export const DEFAULT_CARDS_PER_HAND = 6;

export class Player implements IPlayer {
	private cards: ICard[] = [];

	constructor(private cardsPerHand: number = DEFAULT_CARDS_PER_HAND) {}

	getCards(): ICard[] {
		return this.cards;
	}

	withdraw(cards: ICard[]): ICard[] {
		this.cards = this.cards.filter(card => !cards.includes(card));
		return cards;
	}

	pickCards(deck: IDeck, amount: number): ICard[] {
		for (let i = 0; i < amount; i++) {
			const card = deck.pick();
			if (card !== null) {
				this.cards.push(card);
			}
		}
		return this.cards;
	}

	fillHand(deck: IDeck): void {
		const neededAmount = this.cardsPerHand - this.cards.length;
		if (neededAmount > 0) {
			this.pickCards(deck, neededAmount);
		}
	}

	takeCards(cards: ICard[]): void {
		this.cards.push(...cards);
	}

	putCards(round: IRound, cards: ICard[]): void {
		for (const card of cards) {
			const index = this.cards.indexOf(card);
			this.cards.splice(index, 1);
		}
		round.putCards(cards);
	}
}
