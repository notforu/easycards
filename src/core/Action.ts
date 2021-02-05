import { IRound, NotAllowedActionError } from './Round';

export interface IAction {
	run(round: IRound): void;
}

export abstract class Action implements IAction {
	run(round: IRound): void {
		if (!this.canRun(round)) {
			throw new NotAllowedActionError();
		}
	}

	protected abstract canRun(round: IRound): boolean;
}
