import { ICard } from './Card';
import { IDeck } from './Deck';
import { createCounter } from './utils/createCounter';
import { Identifiable } from './utils/Identifiable';

export interface IPlayer extends Identifiable {
	getCards(): ICard[];
	pickCards(deck: IDeck, amount: number): ICard[];
	withdraw(cardIds: string[]): ICard[];
	fillHand(deck: IDeck): void;
	takeCards(cards: ICard[]): void;
}

export const DEFAULT_CARDS_PER_HAND = 6;

const counter = createCounter();

export class Player implements IPlayer {
	private cards: ICard[] = [];
	private id: string = `Player_${String(counter())}`;

	getCards(): ICard[] {
		return this.cards;
	}

	getId(): string {
		return this.id;
	}

	withdraw(cardIds: string[]): ICard[] {
		const cards: ICard[] = this.cards.filter(card => cardIds.includes(card.getId()));
		if (cardIds.length !== cards.length) {
			throw new Error('Only cards ids from player\'s hand must be in cardIds');
		}
		this.cards = this.cards.filter(card => !cardIds.includes(card.getId()));
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
		const neededAmount = DEFAULT_CARDS_PER_HAND - this.cards.length;
		if (neededAmount > 0) {
			this.pickCards(deck, neededAmount);
		}
	}

	takeCards(cards: ICard[]): void {
		this.cards.push(...cards);
	}
}
