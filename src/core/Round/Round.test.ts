import { IPlayer, Player } from '../Player';
import { IRound, Round } from './Round';
import { Card } from '../Card';

let sam: IPlayer;
let john: IPlayer;
let round: IRound;

class RoundMock extends Round {
	start(): void {}
}

describe('Fool game round logic', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		round = new RoundMock({
			players: [john, sam],
			deck: {
				getCards: jest.fn(),
				pick: jest.fn(),
			}
		});
	});

	test('First player should begin the game', () => {
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
