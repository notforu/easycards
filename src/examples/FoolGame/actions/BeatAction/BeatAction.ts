import { Action, IAction, IPlayer } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';
import { DEFAULT_RANKS } from '../../FoolGameDeck';
import { IFoolGameCard } from '../../FoolGameCard';

export class BeatAction extends Action implements IAction {
	constructor(
		private player: IPlayer,
		private targetCard: IFoolGameCard,
		private card: IFoolGameCard,
	) {
		super();
	}

	run(round: IFoolGameRound): void {
		super.run(round);
		round.beat(this.player, this.targetCard, this.card);
	}

	canRun(round: IFoolGameRound): boolean {
		const isHigher = DEFAULT_RANKS.indexOf(this.targetCard.getParams().rank) < DEFAULT_RANKS.indexOf(this.card.getParams().rank);
		return (
			round.getCurrentPlayer() === this.player && round.getUnbeatenCards().length > 0 && isHigher
		);
	}
}
