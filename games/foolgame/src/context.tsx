import { createContext } from 'react';
import {
	FoolGame,
	FoolGamePlayer,
	DEFAULT_RANKS,
	FoolGameDeck,
	IFoolGame,
	IFoolGamePlayer,
} from './game';

export interface FoolGameContextValues {
	game: IFoolGame | null;
	activePlayer: IFoolGamePlayer | null;
}

export const FoolGameContext = createContext<FoolGameContextValues>({
	game: null,
	activePlayer: null,
});

const sam = new FoolGamePlayer();
const john = new FoolGamePlayer();
const deck = new FoolGameDeck({ ranks: DEFAULT_RANKS });
const game = new FoolGame({
	deck,
	players: [john, sam],
});
game.start();

export interface FoolGameProviderProps {
	children: React.ReactNode;
}

export function FoolGameProvider(props: FoolGameProviderProps): JSX.Element {
	return (
		<FoolGameContext.Provider value={{ game, activePlayer: john }}>
			{props.children}
		</FoolGameContext.Provider>
	);
}
