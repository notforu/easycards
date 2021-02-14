import { useContext } from 'react';
import styles from './App.module.scss';
import { Board } from './components/Board';
import { Hand } from './components/Hand';
import { FoolGameContext } from './context';

function App(): JSX.Element {
	const { game } = useContext(FoolGameContext);
	const [player1, player2] = game.getPlayers();

	return (
		<div className={styles.game}>
			<div className={styles.p2}>
				<Hand player={player2} />
			</div>
			<div className={styles.board}>
				<Board />
			</div>
			<div className={styles.deck} />
			<div className={styles.p1}>
				<Hand player={player1} />
			</div>
		</div>
	);
}

export default App;
