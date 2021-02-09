import s from './Board.module.scss';
import { useContext, useMemo } from 'react';
import { FoolGameContext } from '../../context';
import { PutAction } from '../../game/actions/PutAction';

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
				{round !== null && putAction.canRun(round) && <div>SLOT FOR CARD</div>}
				<div className={s.outsideRing} />
				<div className={s.insideRing} />
			</div>
		</div>
	);
}
