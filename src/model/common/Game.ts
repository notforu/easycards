import { IFoolGameRound } from '../FoolGame';

export interface IGame {
	start(): void;
	getCurrentRound(): IFoolGameRound;
}
