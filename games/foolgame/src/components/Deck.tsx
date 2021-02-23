import { styled } from '../theme';
import { Card } from './Card';
import { FacedownCard } from './FacedownCard';
import { IFoolGameDeck } from '../game/FoolGameDeck';

export interface DeckProps {
	deck: IFoolGameDeck;
	className?: string;
}

const StyledDeck = styled.div`
	position: relative;
`;

const StyledFacedownCard = styled(FacedownCard)`
	position: absolute;
`;

const StyledPoweredCard = styled(Card)`
	position: absolute;
	transform: rotate(90deg);
	right: 40px;

	&:hover {
		background: #fff;
	}
`;

export function Deck(props: DeckProps): JSX.Element | null {
	const { deck, className } = props;
	const poweredCard = deck.getPoweredCard();
	if (poweredCard === null) {
		return null;
	}

	return (
		<StyledDeck className={className}>
			<StyledPoweredCard card={poweredCard} />
			{deck.getUnpoweredCards().map((card, index) => (
				<StyledFacedownCard key={index} style={{ top: -index, right: -index }} />
			))}
		</StyledDeck>
	);
}
