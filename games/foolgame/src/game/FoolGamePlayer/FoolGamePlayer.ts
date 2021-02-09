import { IPlayer, Player } from 'easycards';
import { IFoolGameCard } from '../FoolGameCard';

export type IFoolGamePlayer = IPlayer<IFoolGameCard>;

export const DEFAULT_CARDS_PER_HAND = 6;

export class FoolGamePlayer extends Player<IFoolGameCard> implements IFoolGamePlayer {
	constructor() {
		super({ cardsPerHand: DEFAULT_CARDS_PER_HAND });
	}
}
