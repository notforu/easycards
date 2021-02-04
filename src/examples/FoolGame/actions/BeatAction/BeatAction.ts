import { Action, IAction, ICard, IPlayer, IRound } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';
import { DEFAULT_RANKS } from '../../FoolGameDeck';

export class BeatAction extends Action implements IAction {
	constructor(
		private player: IPlayer,
		private targetCard: ICard,
		private card: ICard,
	) {
		super();
	}

	run(round: IFoolGameRound): void {
		super.run(round);
		round.beat(this.player, this.targetCard, this.card);
	}

	canRun(round: IFoolGameRound): boolean {
		const isHigher = DEFAULT_RANKS.indexOf(this.targetCard.getRank()) < DEFAULT_RANKS.indexOf(this.card.getRank());
		return (
			round.getCurrentPlayer() === this.player && round.getUnbeatenCards().length > 0 && isHigher
		);
	}
}
