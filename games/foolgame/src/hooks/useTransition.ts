import { useCallback, useState } from 'react';
import { ICard } from 'easycards';
import { CardCoordinate } from '../components';

export function useTransition(
	slotRef: React.RefObject<HTMLElement>,
	cards: ICard[],
): { start: () => void; coordinates: Map<ICard, CardCoordinate> } {
	const [coordinates, setCoordinates] = useState<Map<ICard, CardCoordinate>>(new Map());
	const start = useCallback(() => {
		if (slotRef.current === null) {
			console.log(slotRef.current);
			return;
		}
		const { top, left } = slotRef.current.getBoundingClientRect();
		const newCoordinates: Map<ICard, CardCoordinate> = new Map<ICard, CardCoordinate>();
		cards.forEach((card, index) => {
			newCoordinates.set(card, { top, left: left + index * 60 });
		});
		console.log(newCoordinates);
		setCoordinates(newCoordinates);
	}, [setCoordinates, cards]);

	return { start, coordinates };
}
