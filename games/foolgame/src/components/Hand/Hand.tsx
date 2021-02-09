import { IFoolGameCard } from '../../game/FoolGameCard';
import { Card } from './Card';
import s from './Hand.module.scss';

export interface HandProps {
	cards: IFoolGameCard[];
}

export function Hand(props: HandProps): JSX.Element {
	const { cards } = props;
	return (
		<div className={s.hand}>
			{cards.map((card, index) => (
				<Card key={index} className={s.card} card={card} />
			))}
		</div>
	);
}
