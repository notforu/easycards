import { ICard } from './Card';

export interface IDeck<Card extends ICard> {
	getCards(): Card[];
	pick(): Card | null;
}
