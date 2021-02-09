import { FoolGameRound } from '../../index';
import { FoolGameDeck, DEFAULT_RANKS } from '../../FoolGameDeck';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card } from 'easycards';
import { PutAction } from './PutAction';
import { Suit } from '../../FoolGameCard';
import { FoolGamePlayer, IFoolGamePlayer } from '../../FoolGamePlayer';

let sam: IFoolGamePlayer;
let john: IFoolGamePlayer;
let round: IFoolGameRound;

describe('FoolGame - PutAction', () => {
	beforeEach(() => {
		sam = new FoolGamePlayer();
		john = new FoolGamePlayer();
		round = new FoolGameRound({
			players: [john, sam],
			deck: new FoolGameDeck({ ranks: DEFAULT_RANKS }),
		});
	});

	test('Should not be able to perform when game starts', () => {
		const currentPlayer = round.getCurrentPlayer();
		expect(new PutAction(currentPlayer, currentPlayer.getCards()).canRun(round)).toBeTruthy();
	});

	test("Should have exact cards player's after turn", () => {
		const ace = new Card({ rank: 'A', suit: Suit.Clubs });
		const six = new Card({ rank: '6', suit: Suit.Clubs });
		john.takeCards([ace, six]);
		new PutAction(john, [ace, six]).run(round);
		expect(round.getBeatMap().get(ace)).toBeNull();
		expect(round.getBeatMap().get(six)).toBeNull();
	});

	test('Should be able to put more cards with same ranks', () => {
		const six1 = new Card({ rank: '6', suit: Suit.Clubs });
		const six2 = new Card({ rank: '6', suit: Suit.Clubs });
		john.takeCards([six1, six2]);
		new PutAction(john, [six1]).run(round);
		expect(new PutAction(john, [six2]).canRun(round)).toBeTruthy();
	});

	test("Shouldn't be able to put, if needs to beat", () => {
		const six = new Card({ rank: '6', suit: Suit.Clubs });
		const seven = new Card({ rank: '7', suit: Suit.Clubs });
		john.takeCards([six]);
		sam.takeCards([seven]);
		new PutAction(john, [six]).run(round);
		expect(new PutAction(sam, [seven]).canRun(round)).toBeFalsy();
	});

	test("Shouldn't be able to put empty array of cards", () => {
		expect(new PutAction(john, []).canRun(round)).toBeFalsy();
	});
});
