import { ICard } from './Card';

export interface IDeck {
	getCards(): ICard[];
	pick(): ICard | null;
}
