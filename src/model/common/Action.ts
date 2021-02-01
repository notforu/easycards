import { NotAllowedActionError } from './Round';

export interface IAction {
	run(): void;
	canRun(): boolean;
}

export abstract class Action implements IAction {
	run(): void {
		if (!this.canRun()) {
			throw new NotAllowedActionError();
		}
	}

	abstract canRun(): boolean;
}
