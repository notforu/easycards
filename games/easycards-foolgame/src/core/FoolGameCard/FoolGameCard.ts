import { ICard } from '../../../core/Card';

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
