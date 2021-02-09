import classnames from 'classnames';
import { IFoolGameCard } from '../../../game/FoolGameCard';
import s from './Card.module.scss';

export interface CardProps {
	card: IFoolGameCard;
	className?: string;
}

export function Card(props: CardProps): JSX.Element {
	const { card, className } = props;

	return (
		<div className={classnames(s.card, className)}>
			<div className={s.suit}>{card.getParams().suit}</div>
			<div className={s.rank}>{card.getParams().rank}</div>
		</div>
	);
}
