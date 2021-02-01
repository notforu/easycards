import { ICard, IPlayer, Action, IAction } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';

export class PutAction extends Action implements IAction {
	constructor(private round: IFoolGameRound, private player: IPlayer, private cards: ICard[]) {
		super();
	}

	run(): void {
		super.run();
		this.round.put(this.player, this.cards);
	}

	canRun(): boolean {
		return this.round.getCurrentPlayer() === this.player;
	}
}
