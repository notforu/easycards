import { IPlayer, Action, IAction } from 'easycards';
import { IFoolGameRound } from '../../FoolGameRound';
import { IFoolGameCard } from '../../FoolGameCard';

export class PutAction extends Action implements IAction {
	constructor(private player: IPlayer, private cards: IFoolGameCard[]) {
		super();
	}

	run(round: IFoolGameRound): void {
		super.run(round);
		this.player.putCards(round, this.cards);
	}

	canRun(round: IFoolGameRound): boolean {
		if (this.cards.length === 0) {
			return false;
		}
		return (
			(round.getCards().length === 0 && round.getCurrentPlayer() === this.player) ||
			this.hasSameRank(round.getUnbeatenCards())
		);
	}

	private hasSameRank(unbeatenCards: IFoolGameCard[]): boolean {
		const ranks = unbeatenCards.map((card) => card.getParams().rank);
		return this.cards.some((card) => ranks.includes(card.getParams().rank));
	}
}
