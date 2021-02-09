import classnames from 'classnames';
import { CSSProperties } from 'react';
import s from './Card.module.scss';

export interface FacedownCardProps {
	className?: string;
	style?: CSSProperties;
}

export function FacedownCard(props: FacedownCardProps): JSX.Element {
	return <div className={classnames(s.facedownCard, props.className)} style={props.style} />;
}
