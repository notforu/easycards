import { createContext } from 'react';
import { FoolGame, FoolGamePlayer, DEFAULT_RANKS, FoolGameDeck, IFoolGame } from './game';

export interface FoolGameContextValues {
	game: IFoolGame | null;
}

export const FoolGameContext = createContext<FoolGameContextValues>({ game: null });

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
	return <FoolGameContext.Provider value={{ game }}>{props.children}</FoolGameContext.Provider>;
}
