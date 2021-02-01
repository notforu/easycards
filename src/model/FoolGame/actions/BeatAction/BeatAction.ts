import { Action, IAction } from '../../../common';
import { IPlayer } from '../../../Player';
import { IFoolGameRound } from '../../FoolGameRound';
import { ICard } from '../../../Card';
import { DEFAULT_RANKS } from '../../../Deck';

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
