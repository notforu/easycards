import { ICard } from './Card';
import { IDeck } from './Deck';

export interface IPlayer {
	getCards(): ICard[];
	pickCards(deck: IDeck, amount: number): ICard[];
}

export const DEFAULT_CARDS_PER_HAND = 6;

function createCounter(): () => number {
	let id = 0;
	return function next(): number {
		return ++id;
	}
}

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

	pickCards(deck: IDeck, amount: number): ICard[] {
		for (let i = 0; i < amount; i++) {
			const card = deck.pick();
			if (card !== null) {
				this.cards.push(card);
			}
		}
		return this.cards;
	}
}
