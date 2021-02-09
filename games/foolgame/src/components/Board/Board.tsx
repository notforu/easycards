import s from './Board.module.scss';
import { useContext, useMemo } from 'react';
import { FoolGameContext } from '../../context';
import { PutAction } from '../../game/actions/PutAction';
import { Deck } from '../Deck';

export function Board(): JSX.Element {
	const { game, activePlayer, selectedCards } = useContext(FoolGameContext);
	const putAction = useMemo(() => new PutAction(activePlayer, selectedCards), [
		activePlayer,
		selectedCards,
	]);
	const round = game.getCurrentRound();

	return (
		<div className={s.pokerContainer}>
			<div className={s.pokerTable}>
				{round !== null && putAction.canRun(round) && <div />}
				<div className={s.outsideRing} />
				<div className={s.insideRing} />
			</div>
			<div className={s.deckContainer}>
				<Deck deck={game.getDeck()} className={s.deck} />
			</div>
		</div>
	);
}
