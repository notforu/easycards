import { FoolGameRound } from '../../index';
import { FoolGameDeck } from '../../FoolGameDeck';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card, IPlayer, Player, NotAllowedActionError } from '../../../../core';
import { PutAction } from '../PutAction';
import { BeatAction } from './BeatAction';

let sam: IPlayer;
let john: IPlayer;
let round: IFoolGameRound;

describe('FoolGame - BeatAction', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck(),
		});
	});

	test('After put opponent should be able to beat with the higher card', () => {
		const six = new Card({ rank: '6' });
		john.takeCards([six]);
		new PutAction(john, [six]).run(round);
		const seven = new Card({ rank: '7' });
		sam.takeCards([seven]);
		new BeatAction(sam, six, seven).run(round);
		expect(round.getUnbeatenCards()).toHaveLength(0);
	});

	test('Opponent should not be able to beat with the lower card', () => {
		const queen = new Card({ rank: 'Q' });
		const seven = new Card({ rank: '7' });
		john.takeCards([queen]);
		new PutAction(john, [queen]).run(round);
		sam.takeCards([seven]);
		expect(() => new BeatAction(sam, queen, seven).run(round)).toThrowError(
			new NotAllowedActionError(),
		);
	});
});
