import { IPlayer, Player } from '../Player';
import { IRound, Round } from './Round';
import { Card } from '../Card';
import { Deck } from '../Deck';

let sam: IPlayer;
let john: IPlayer;
let round: IRound;
const cardsPerHand = 6;

describe('Round', () => {
	beforeEach(() => {
		sam = new Player({ cardsPerHand });
		john = new Player({ cardsPerHand });
		round = new Round({
			players: [john, sam],
			deck: new Deck()
		});
	});

	test('First player should start the round by default', () => {
		expect(round.getCurrentPlayer()).toStrictEqual(john);
	});

	test('Should be able to put card and then get it', () => {
		const jack = new Card({ rank: 'J' });
		const nine = new Card({ rank: '9' });
		john.putCards(round, [jack, nine]);
		expect(round.getCards()).toContain(jack);
		expect(round.getCards()).toContain(nine);
		expect(round.getCards()).toHaveLength(2);
	});
});
