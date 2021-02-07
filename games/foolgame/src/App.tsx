import { useCallback, useState } from 'react';
import { FoolGame, FoolGamePlayer, DEFAULT_RANKS, FoolGameDeck } from './core';
import styles from './App.module.css';

const sam = new FoolGamePlayer();
const john = new FoolGamePlayer();
const deck = new FoolGameDeck({ ranks: DEFAULT_RANKS });
const game = new FoolGame({
	deck,
	players: [john, sam],
});
game.start();

console.log(game.getCurrentRound());

function App(): JSX.Element {
	const [cards, setCards] = useState(john.getCards());
	const pickCard = useCallback(
		() => {
			const c = john.pickCards(deck, 1);
			console.log(c);
			setCards(c);
		},
		[setCards]
	);
	console.log(cards);

	return (
		<div className={styles.App}>
			<div className={styles.game}>
				<div className={styles.p2}>P2</div>
				<div className={styles.board}>Board</div>
				<div className={styles.deck} onClick={pickCard}>Deck</div>
				<div className={styles.p1}>
					<div className={styles.cards}>
						{cards.map((card, index) => <div key={index} className={styles.card}>
							<div className={styles.suit}>{card.getParams().suit}</div>
							<div className={styles.rank}>{card.getParams().rank}</div>
						</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
