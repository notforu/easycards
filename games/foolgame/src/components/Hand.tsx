import { styled } from '../theme';
import { IFoolGameCard, IFoolGamePlayer } from '../game';
import { useCallback, useContext } from 'react';
import { FoolGameContext } from '../context';
import { useTransition } from '../hooks';
import { Card } from './Card';
import { FacedownCard } from './FacedownCard';

const StyledHand = styled.div`
	display: flex;
	flex-direction: row;
	height: 70px;
`;

const StyledCard = styled(Card)`
	margin-right: 20px;
`;

const StyledFacedownCard = styled(FacedownCard)`
	margin-right: 20px;
`;

export interface HandProps {
	player: IFoolGamePlayer;
}

export function Hand(props: HandProps): JSX.Element {
	const { player } = props;
	const cards = player.getCards();
	const { activePlayer, selectedCards, setSelectedCards, slotRef } = useContext(FoolGameContext);
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
	const { coordinates, start } = useTransition(slotRef, selectedCards);
	console.log(coordinates, selectedCards);

	return (
		<StyledHand>
			{cards.map((card, index) => {
				if (activePlayer === player) {
					const { top, left } = coordinates.get(card) || {};
					return (
						<StyledCard
							key={`${index}_${top}_${left}`}
							isSelected={selectedCards.includes(card)}
							onClick={() => selectCard(card)}
							top={top}
							left={left}
							card={card}
						/>
					);
				}
				return <StyledFacedownCard key={index} />;
			})}
			<div onClick={start}>PUT</div>
		</StyledHand>
	);
}
