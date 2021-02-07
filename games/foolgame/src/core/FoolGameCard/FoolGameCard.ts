import { ICard } from 'easycards';

export enum Suit {
	Crosses,
	Hearts,
	Spades,
	Diamonds,
}

export interface FoolCardParameters {
	rank: string;
	suit: Suit;
}

export type IFoolGameCard = ICard<FoolCardParameters>;
