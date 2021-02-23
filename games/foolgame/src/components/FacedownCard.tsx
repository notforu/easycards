import { CSSProperties } from 'react';
import { styled } from '../theme';

export interface FacedownCardProps {
	className?: string;
	style?: CSSProperties;
}

const StyledFacedownCard = styled.div<FacedownCardProps>`
	border: 1px solid #666;
	border-radius: 10%;
	height: ${(props) => props.theme.cardHeight}px;
	width: ${(props) => props.theme.cardWidth}px;
	background: repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px);
	cursor: default;
`;

export function FacedownCard(props: FacedownCardProps): JSX.Element {
	return <StyledFacedownCard className={props.className} style={props.style} />;
}
