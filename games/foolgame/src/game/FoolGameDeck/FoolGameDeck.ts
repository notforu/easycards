import { Card, Deck, IDeck } from 'easycards';
import { IFoolGameCard, Suit } from '../FoolGameCard';

const suits = [Suit.Spades, Suit.Hearts, Suit.Diamonds, Suit.Clubs];
export const DEFAULT_RANKS = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export interface DeckOptions {
	ranks: string[];
	customCounts?: Record<string, number>;
}

export type IFoolGameDeck = IDeck<IFoolGameCard>;

export class FoolGameDeck extends Deck<IFoolGameCard> implements IDeck<IFoolGameCard> {
	constructor(options: DeckOptions = { ranks: DEFAULT_RANKS }) {
		super();
		const { ranks, customCounts } = options;
		for (const rank of ranks) {
			const count = customCounts?.[rank] || suits.length;
			for (let i = 0; i < count; i++) {
				this.cards.push(new Card({ rank, suit: suits[i] }));
			}
		}
		this.cards = this.shuffle(this.cards);
	}

	private shuffle(arr: IFoolGameCard[]): IFoolGameCard[] {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}
}
