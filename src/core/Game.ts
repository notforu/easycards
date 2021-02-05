import { IRound } from './Round';

export interface IGame {
	start(): void;
	getCurrentRound(): IRound;
}
