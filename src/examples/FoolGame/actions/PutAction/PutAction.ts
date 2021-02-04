import { ICard, IPlayer, Action, IAction, IRound } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';

export class PutAction extends Action implements IAction {
	constructor(private player: IPlayer, private cards: ICard[]) {
		super();
	}

	run(round: IFoolGameRound): void {
		super.run(round);
		round.putCards(this.player, this.cards);
	}

	canRun(round: IFoolGameRound): boolean {
		return round.getCurrentPlayer() === this.player || this.hasSameRank(round.getUnbeatenCards());
	}

	private hasSameRank(unbeatenCards: ICard[]): boolean {
		const ranks = unbeatenCards.map(card => card.getRank());
		return this.cards.some(card => ranks.includes(card.getRank()));
	}
}
