import { createContext, useRef, useState } from 'react';
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
	slotRef: React.RefObject<HTMLDivElement>;
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
	const slotRef = useRef<HTMLDivElement | null>(null);
	return (
		<FoolGameContext.Provider
			value={{ game, activePlayer: john, selectedCards, setSelectedCards, slotRef }}
		>
			{props.children}
		</FoolGameContext.Provider>
	);
}
