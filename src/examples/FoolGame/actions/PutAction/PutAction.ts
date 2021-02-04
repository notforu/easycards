import { ICard, IPlayer, Action, IAction, IRound } from '../../../../core';

export class PutAction extends Action implements IAction {
	constructor(private player: IPlayer, private cards: ICard[]) {
		super();
	}

	run(round: IRound): void {
		super.run(round);
		round.putCards(this.player, this.cards);
	}

	canRun(round: IRound): boolean {
		return round.getCurrentPlayer() === this.player;
	}
}
