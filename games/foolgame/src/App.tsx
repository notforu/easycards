import { useCallback, useContext, useState } from 'react';
import styles from './App.module.css';
import { Board } from './components/Board';
import { Hand } from './components/Hand';
import { FoolGameContext } from './context';
import { ensureNotNull } from './utils';

function App(): JSX.Element {
	const { game } = useContext(FoolGameContext);
	const [john, sam] = ensureNotNull(game).getPlayers();
	const [p1Cards, setp1Cards] = useState(john.getCards());
	const pickCard = useCallback(() => {
		setp1Cards([...john.pickCards(ensureNotNull(game).getDeck(), 1)]);
	}, [setp1Cards]);

	return (
		<div className={styles.App}>
			<div className={styles.game}>
				<div className={styles.p2}>
					<Hand player={sam} />
				</div>
				<div className={styles.board}>
					<Board />
				</div>
				<div className={styles.deck} onClick={pickCard}>
					Deck
				</div>
				<div className={styles.p1}>
					<Hand player={john} />
				</div>
			</div>
		</div>
	);
}

export default App;
