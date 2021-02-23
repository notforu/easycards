import styled, { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { Board } from './components';
import { Hand } from './components/Hand';
import { FoolGameContext } from './context';
import { theme } from './theme';

const StyledGame = styled.div`
	display: grid;
	width: 100vw;
	height: 100vh;
	justify-items: center;
	align-items: center;
	grid-template-areas:
		'. p2 .'
		'. board deck'
		'. p1 .';
	background: radial-gradient(red 3px, transparent 4px), radial-gradient(black 3px, transparent 4px),
		linear-gradient(#fff 4px, transparent 0),
		linear-gradient(
			45deg,
			transparent 74px,
			transparent 75px,
			#a4a4a4 75px,
			#a4a4a4 76px,
			transparent 77px,
			transparent 109px
		),
		linear-gradient(
			-45deg,
			transparent 75px,
			transparent 76px,
			#a4a4a4 76px,
			#a4a4a4 77px,
			transparent 78px,
			transparent 109px
		),
		#efefef;
	background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
	background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
`;

const StyledActivePlayer = styled.div`
	grid-area: p1;
	align-self: start;
`;

const StyledOpponent = styled.div`
	grid-area: p2;
	align-self: end;
`;

const StyledDeck = styled.div`
	grid-area: deck;
`;

const StyledBoard = styled.div`
	grid-area: board;
`;

function App(): JSX.Element {
	const { game } = useContext(FoolGameContext);
	const [player1, player2] = game.getPlayers();

	return (
		<ThemeProvider theme={theme}>
			<StyledGame>
				<StyledOpponent>
					<Hand player={player2} />
				</StyledOpponent>
				<StyledBoard>
					<Board />
				</StyledBoard>
				<StyledDeck />
				<StyledActivePlayer>
					<Hand player={player1} />
				</StyledActivePlayer>
			</StyledGame>
		</ThemeProvider>
	);
}

export default App;
