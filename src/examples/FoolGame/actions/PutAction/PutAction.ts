import { ICard, IPlayer, Action, IAction } from '../../../../core';
import { IFoolGameRound } from '../../FoolGameRound';

export class PutAction extends Action implements IAction {
	constructor(private player: IPlayer, private cards: ICard[]) {
		super();
	}

	run(round: IFoolGameRound): void {
		super.run(round);
		this.player.putCards(round, this.cards);
	}

	canRun(round: IFoolGameRound): boolean {
		return (round.getCards().length === 0 && round.getCurrentPlayer() === this.player) || this.hasSameRank(round.getUnbeatenCards());
	}

	private hasSameRank(unbeatenCards: ICard[]): boolean {
		const ranks = unbeatenCards.map(card => card.getRank());
		return this.cards.some(card => ranks.includes(card.getRank()));
	}
}
