import { styled } from '../theme';
import { IFoolGameCard, Suit } from '../game';

export interface CardCoordinate {
	top?: number;
	left?: number;
}

export interface CardProps extends CardCoordinate {
	card: IFoolGameCard;
	onClick?: (e: React.MouseEvent) => void;
	onDoubleClick?: (e: React.MouseEvent) => void;
	isSelected?: boolean;
	className?: string;
}

const mapSuitToColor = {
	[Suit.Clubs]: 'black',
	[Suit.Spades]: 'black',
	[Suit.Diamonds]: 'red',
	[Suit.Hearts]: 'red',
};

const StyledCard = styled.div<CardProps>`
	border: 1px solid #666;
	border-radius: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: ${(props) =>
		props.isSelected ? props.theme.cardSelectedHeight : props.theme.cardHeight}px;
	width: ${(props) => (props.isSelected ? props.theme.cardSelectedWidth : props.theme.cardWidth)}px;
	cursor: pointer;
	background: white;
	transition: width 0.3s, height 0.3s, top 1s ease 1s, left 1s ease 1s;
	color: ${({ card }: CardProps) => mapSuitToColor[card.getParams().suit]};

	&:hover {
		background: #ccffcc;
	}

	${(props: CardProps) =>
		props.isSelected
			? `
		background: #88ff88;
		border-color: black;
		transition: width 0s, height 0s;
	`
			: ''}
`;

const StyledRank = styled.div`
	font-size: 18px;
`;

export function Card(props: CardProps): JSX.Element {
	const { card, top, left } = props;

	return (
		<StyledCard {...props} style={{ top, left, position: top && left ? 'absolute' : undefined }}>
			<StyledRank>{card.getParams().rank}</StyledRank>
			<div>{card.getParams().suit}</div>
		</StyledCard>
	);
}
