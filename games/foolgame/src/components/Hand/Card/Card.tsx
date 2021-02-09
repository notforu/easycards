import classnames from 'classnames';
import { IFoolGameCard, Suit } from '../../../game';
import s from './Card.module.scss';

export interface CardProps {
	card: IFoolGameCard;
	facedown?: boolean;
	className?: string;
}

const mapSuitToClassName = {
	[Suit.Clubs]: s.black,
	[Suit.Spades]: s.black,
	[Suit.Diamonds]: s.red,
	[Suit.Hearts]: s.red,
};

export function Card(props: CardProps): JSX.Element {
	const { card, className, facedown } = props;

	return (
		<div
			className={classnames(
				s.card,
				mapSuitToClassName[card.getParams().suit],
				facedown && s.facedown,
				className,
			)}
		>
			{!facedown && (
				<>
					<div className={s.rank}>{card.getParams().rank}</div>
					<div className={s.suit}>{card.getParams().suit}</div>
				</>
			)}
		</div>
	);
}
