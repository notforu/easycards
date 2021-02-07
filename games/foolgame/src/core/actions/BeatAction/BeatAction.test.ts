import { FoolGameRound } from '../../index';
import { FoolGameDeck } from '../../FoolGameDeck';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card, NotAllowedActionError } from 'easycards';
import { PutAction } from '../PutAction';
import { BeatAction } from './BeatAction';
import { Suit } from '../../FoolGameCard';
import { FoolGamePlayer, IFoolGamePlayer } from '../../FoolGamePlayer';

let sam: IFoolGamePlayer;
let john: IFoolGamePlayer;
let round: IFoolGameRound;

describe('FoolGame - BeatAction', () => {
	beforeEach(() => {
		sam = new FoolGamePlayer();
		john = new FoolGamePlayer();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck(),
		});
	});

	test('After put opponent should be able to beat with the higher card', () => {
		const six = new Card({ rank: '6', suit: Suit.Crosses });
		john.takeCards([six]);
		new PutAction(john, [six]).run(round);
		const seven = new Card({ rank: '7', suit: Suit.Crosses });
		sam.takeCards([seven]);
		new BeatAction(sam, six, seven).run(round);
		expect(round.getUnbeatenCards()).toHaveLength(0);
	});

	test('Opponent should not be able to beat with the lower card', () => {
		const queen = new Card({ rank: 'Q', suit: Suit.Crosses });
		const seven = new Card({ rank: '7', suit: Suit.Crosses });
		john.takeCards([queen]);
		new PutAction(john, [queen]).run(round);
		sam.takeCards([seven]);
		expect(() => new BeatAction(sam, queen, seven).run(round)).toThrowError(
			new NotAllowedActionError(),
		);
	});

	test('Should not be able to beat with another suit if it is not empowered', () => {
		const queen = new Card({ rank: 'Q', suit: Suit.Crosses });
		const seven = new Card({ rank: '7', suit: Suit.Diamonds });
		john.takeCards([seven]);
		new PutAction(john, [seven]).run(round);
		sam.takeCards([queen]);
		expect(() => new BeatAction(sam, seven, queen).run(round)).toThrowError(
			new NotAllowedActionError(),
		);
	});
});
