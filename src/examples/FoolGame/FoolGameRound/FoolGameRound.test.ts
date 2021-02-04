import { FoolGameDeck, DEFAULT_RANKS } from '../FoolGameDeck';
import { FoolGameRound, IFoolGameRound } from './FoolGameRound';
import { Card, DEFAULT_CARDS_PER_HAND, IPlayer, Player } from '../../../core';

let sam: IPlayer;
let john: IPlayer;
let round: IFoolGameRound;

describe('Fool game round logic', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck({ ranks: DEFAULT_RANKS })
		});
	});

	test('Should be empty after being created', () => {
		expect(round.getBeatMap().size).toEqual(0);
	});

	test('Every player should have 6 cards, when game starts', () => {
		expect(sam.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
		expect(john.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	test('Should return unbeaten card', () => {
		const ace = new Card({ rank: 'A' });
		john.takeCards([ace]);
		john.putCards(round, [ace]);
		expect(round.getUnbeatenCards()).toEqual([ace]);
	});

	test('Should be able to get all cards, including beaten', () => {
		const jack = new Card({ rank: 'J' });
		john.putCards(round, [jack]);
		const ace = new Card({ rank: 'A' });
		round.beat(sam, jack, ace);
		expect(round.getCards()).toHaveLength(2);
		expect(round.getCards()).toContain(jack);
		expect(round.getCards()).toContain(ace);
	});
});
