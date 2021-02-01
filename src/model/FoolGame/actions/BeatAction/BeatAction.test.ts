import { FoolGameRound } from '../../index';
import { Deck } from '../../../Deck';
import { IPlayer, Player } from '../../../Player';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card } from '../../../Card';
import { PutAction } from '../PutAction';
import { BeatAction } from './BeatAction';
import { NotAllowedActionError } from '../../../common';

let sam: IPlayer;
let john: IPlayer;
let round: IFoolGameRound;

describe('FoolGame - BeatAction', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new Deck(),
		});
	});

	test('After first put opponent should be able to beat with the higher card', () => {
		const six = new Card({ rank: '6' });
		john.takeCards([six]);
		new PutAction(round, john, [six]).run();
		const seven = new Card({ rank: '7' });
		sam.takeCards([seven]);
		new BeatAction(round, sam, six, seven).run();
		expect(round.getUnbeatenCards()).toHaveLength(0);
	});

	test('Opponent should not be able to beat with the lower card', () => {
		const queen = new Card({ rank: 'Q' });
		const seven = new Card({ rank: '7' });
		john.takeCards([queen]);
		new PutAction(round, john, [queen]).run();
		sam.takeCards([seven]);
		expect(() => new BeatAction(round, sam, queen, seven).run()).toThrowError(
			new NotAllowedActionError(),
		);
	});
});
