import { IFoolGameCard, IFoolGamePlayer } from '../../game';
import { Card } from './Card';
import s from './Hand.module.scss';
import { useCallback, useContext } from 'react';
import { FoolGameContext } from '../../context';

export interface HandProps {
	player: IFoolGamePlayer;
}

export function Hand(props: HandProps): JSX.Element {
	const { activePlayer, selectedCards, setSelectedCards } = useContext(FoolGameContext);
	const selectCard = useCallback(
		(card: IFoolGameCard) => {
			const result = [...selectedCards];
			if (selectedCards.includes(card)) {
				result.splice(selectedCards.indexOf(card), 1);
			} else {
				result.push(card);
			}
			setSelectedCards(result);
		},
		[setSelectedCards, selectedCards],
	);
	const { player } = props;
	const cards = player.getCards();

	return (
		<div className={s.hand}>
			{cards.map((card, index) => (
				<Card
					key={index}
					isSelected={selectedCards.includes(card)}
					facedown={player !== activePlayer}
					className={s.card}
					onClick={() => selectCard(card)}
					card={card}
				/>
			))}
		</div>
	);
}
