import { IFoolGamePlayer } from '../../game';
import { Card } from './Card';
import s from './Hand.module.scss';
import { useContext } from 'react';
import { FoolGameContext } from '../../context';

export interface HandProps {
	player: IFoolGamePlayer;
}

export function Hand(props: HandProps): JSX.Element {
	const { activePlayer } = useContext(FoolGameContext);
	const { player } = props;
	const cards = player.getCards();
	return (
		<div className={s.hand}>
			{cards.map((card, index) => (
				<Card key={index} facedown={player !== activePlayer} className={s.card} card={card} />
			))}
		</div>
	);
}
