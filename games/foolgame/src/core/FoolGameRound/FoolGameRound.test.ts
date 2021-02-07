import { FoolGameDeck, DEFAULT_RANKS } from '../FoolGameDeck';
import { FoolGameRound, IFoolGameRound } from './FoolGameRound';
import { Card } from 'easycards';
import { Suit } from '../FoolGameCard';
import { FoolGamePlayer, IFoolGamePlayer } from '../FoolGamePlayer';

let sam: IFoolGamePlayer;
let john: IFoolGamePlayer;
let round: IFoolGameRound;
const cardsPerHand = 6;

describe('Fool game round logic', () => {
	beforeEach(() => {
		sam = new FoolGamePlayer();
		john = new FoolGamePlayer();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck({ ranks: DEFAULT_RANKS }),
		});
	});

	test('Should be empty after being created', () => {
		expect(round.getBeatMap().size).toEqual(0);
	});

	test('Every player should have 6 cards, when game starts', () => {
		expect(sam.getCards()).toHaveLength(cardsPerHand);
		expect(john.getCards()).toHaveLength(cardsPerHand);
	});

	test('Should return unbeaten card', () => {
		const ace = new Card({ rank: 'A', suit: Suit.Crosses });
		john.takeCards([ace]);
		john.putCards(round, [ace]);
		expect(round.getUnbeatenCards()).toEqual([ace]);
	});

	test('Should be able to get all cards, including beaten', () => {
		const jack = new Card({ rank: 'J', suit: Suit.Crosses });
		john.putCards(round, [jack]);
		const ace = new Card({ rank: 'A', suit: Suit.Crosses });
		round.beat(sam, jack, ace);
		expect(round.getCards()).toHaveLength(2);
		expect(round.getCards()).toContain(jack);
		expect(round.getCards()).toContain(ace);
	});
});
