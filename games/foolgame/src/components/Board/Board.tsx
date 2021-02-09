import s from './Board.module.scss';

export function Board(): JSX.Element {
	return (
		<div className={s.pokerContainer}>
			<div className={s.pokerTable}>
				<div className={s.outsideRing}></div>
				<div className={s.insideRing}></div>
			</div>
		</div>
	);
}
