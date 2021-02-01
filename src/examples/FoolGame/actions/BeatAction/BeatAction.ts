import { Action, IAction, ICard, IPlayer } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';
import { DEFAULT_RANKS } from '../../FoolGameDeck';

export class BeatAction extends Action implements IAction {
	constructor(
		private round: IFoolGameRound,
		private player: IPlayer,
		private targetCard: ICard,
		private card: ICard,
	) {
		super();
	}

	run(): void {
		super.run();
		this.round.beat(this.player, this.targetCard, this.card);
	}

	canRun(): boolean {
		const isHigher = DEFAULT_RANKS.indexOf(this.targetCard.getRank()) < DEFAULT_RANKS.indexOf(this.card.getRank());
		return (
			this.round.getCurrentPlayer() === this.player && this.round.getUnbeatenCards().length > 0 && isHigher
		);
	}
}
