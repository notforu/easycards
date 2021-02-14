import classnames from 'classnames';
import { Card, FacedownCard } from '../Hand';
import s from './Deck.module.scss';
import { IFoolGameDeck } from '../../game/FoolGameDeck';

export interface DeckProps {
	deck: IFoolGameDeck;
	className?: string;
}

export function Deck(props: DeckProps): JSX.Element | null {
	const { deck, className } = props;
	const poweredCard = deck.getPoweredCard();
	if (poweredCard === null) {
		return null;
	}

	return (
		<div className={classnames(s.deck, className)}>
			<Card card={poweredCard} className={classnames(s.powered, s.card)} />
			{deck.getUnpoweredCards().map((card, index) => (
				<FacedownCard key={index} className={s.card} style={{ top: -index, right: -index }} />
			))}
		</div>
	);
}
