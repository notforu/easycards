import { IRound } from './Round/Round';

export interface IGame {
	start(): void;
	getCurrentRound(): IRound;
}
