import { FoolGameRound } from '../../index';
import { FoolGameDeck, DEFAULT_RANKS } from '../../FoolGameDeck';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card, IPlayer, Player } from '../../../../core';
import { PutAction } from './PutAction';

let sam: IPlayer;
let john: IPlayer;
let round: IFoolGameRound;

describe('FoolGame - PutAction', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck({ ranks: DEFAULT_RANKS }),
		});
	});

	test('Should not be able to perform when game starts', () => {
		const currentPlayer = round.getCurrentPlayer();
		expect(
			new PutAction(currentPlayer, currentPlayer.getCards()).canRun(round),
		).toBeTruthy();
	});

	test('Should have exact cards player\'s after turn', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		john.takeCards([ace, six]);
		new PutAction(john, [ace, six]).run(round);
		expect(round.getBeatMap().get(ace)).toBeNull();
		expect(round.getBeatMap().get(six)).toBeNull();
	});

	test('Should be able to put more cards with same ranks', () => {
		const six1 = new Card({ rank: '6' });
		const six2 = new Card({ rank: '6' });
		john.takeCards([six1, six2]);
		new PutAction(john, [six1]).run(round);
		expect(new PutAction(john, [six2]).canRun(round)).toBeTruthy();
	});

	test('Shouldn\'t be able to put, if needs to beat', () => {
		const six = new Card({ rank: '6' });
		const seven = new Card({ rank: '7' });
		john.takeCards([six]);
		sam.takeCards([seven]);
		new PutAction(john, [six]).run(round);
		expect(new PutAction(sam, [seven]).canRun(round)).toBeFalsy();
	});
});
