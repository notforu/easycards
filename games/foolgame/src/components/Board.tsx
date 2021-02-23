import { useContext, useMemo } from 'react';
import { styled } from '../theme';
import { FoolGameContext } from '../context';
import { PutAction } from '../game/actions';
import { Deck } from './Deck';

const StyledContainer = styled.div`
	display: grid;
	position: relative;
	width: 800px;
	height: 360px;
`;

const StyledTable = styled.div`
	justify-self: center;
	align-self: center;
	max-width: 800px;
	width: 100%;
	max-height: 360px;
	height: 100%;
	background-color: #4d2712;
	border-radius: 180px;
	position: relative;
	display: grid;
`;

const StyledInsideRing = styled.div`
	max-width: 640px;
	max-height: 200px;
	width: 100%;
	height: 100%;
	border: 5px rgba(#fff, 0.5) solid;
	position: absolute;
	justify-self: center;
	align-self: center;
	border-radius: 180px;
`;

const StyledOutsideRing = styled.div`
	max-width: 740px;
	max-height: 300px;
	width: 100%;
	height: 100%;
	background: #36aa25;
	background: radial-gradient(circle, #36aa25 -30%, #073602 90%);
	position: absolute;
	border-radius: 180px;
	justify-self: center;
	align-self: center;
	border: 5px #c29f41 solid;
`;

const StyledCardSlot = styled.div`
	position: absolute;
	top: 30%;
	left: 20%;
	height: 70px;
	width: 45px;
	border-radius: 4px;
	border: 1px solid yellow;
`;

const StyledDeckContainer = styled.div`
	position: absolute;
	bottom: 60%;
	right: 10%;
`;

export function Board(): JSX.Element {
	const { game, activePlayer, selectedCards, slotRef } = useContext(FoolGameContext);
	const putAction = useMemo(() => new PutAction(activePlayer, selectedCards), [
		activePlayer,
		selectedCards,
	]);
	const round = game.getCurrentRound();

	return (
		<StyledContainer>
			<StyledTable>
				<StyledOutsideRing />
				<StyledInsideRing />
				{round !== null && putAction.canRun(round) && <StyledCardSlot ref={slotRef} />}
			</StyledTable>
			<StyledDeckContainer>
				<Deck deck={game.getDeck()} />
			</StyledDeckContainer>
		</StyledContainer>
	);
}
