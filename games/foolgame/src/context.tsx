import { createContext, useState } from 'react';
import {
	FoolGame,
	FoolGamePlayer,
	DEFAULT_RANKS,
	FoolGameDeck,
	IFoolGame,
	IFoolGamePlayer,
	IFoolGameCard,
} from './game';

export interface FoolGameContextValues {
	game: IFoolGame;
	activePlayer: IFoolGamePlayer;
	selectedCards: IFoolGameCard[];
	setSelectedCards: (cards: IFoolGameCard[]) => void;
}

export const FoolGameContext = createContext<FoolGameContextValues>({} as FoolGameContextValues);

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
	const [selectedCards, setSelectedCards] = useState<IFoolGameCard[]>([]);
	return (
		<FoolGameContext.Provider value={{ game, activePlayer: john, selectedCards, setSelectedCards }}>
			{props.children}
		</FoolGameContext.Provider>
	);
}
