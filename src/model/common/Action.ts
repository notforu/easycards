import { IPlayer } from '../Player';
import { IRound } from './Round';

export interface IAction {
	run(): void;
	canBePerformed(player: IPlayer, round: IRound): boolean;
}
