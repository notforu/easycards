import { ICard } from './Card';
import { IDeck } from './Deck';
import { createCounter } from './utils/createCounter';

export interface IPlayer {
	getCards(): ICard[];
	pickCards(deck: IDeck, amount: number): ICard[];
	withdraw(cardIndexes: number[]): ICard[];
	fillHand(deck: IDeck): void;
}

export const DEFAULT_CARDS_PER_HAND = 6;

const getId = createCounter();

export class Player implements IPlayer {
	private cards: ICard[] = [];
	private id: number = getId();

	getCards(): ICard[] {
		return this.cards;
	}

	getId(): number {
		return this.id;
	}

	withdraw(cardIndexes: number[]): ICard[] {
		const cards = [];
		for (const cardIndex of cardIndexes) {
			cards.push(this.cards[cardIndex]);
			this.cards.splice(cardIndex, 1);
		}
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
}
