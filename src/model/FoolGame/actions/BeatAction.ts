import { IAction } from '../../common/Action';
import { IRound } from '../../common/Round';
import { IPlayer } from '../../Player';

export class BeatAction implements IAction {
	constructor() {
	}
	run(): void {

	}
	canBePerformed(player: IPlayer, round: IRound): boolean {
		return true;
	}
}
