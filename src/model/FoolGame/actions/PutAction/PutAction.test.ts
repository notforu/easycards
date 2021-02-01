import { FoolGameRound } from '../../index';
import { Deck, DEFAULT_RANKS } from '../../../Deck';
import { IPlayer, Player } from '../../../Player';
import { IFoolGameRound } from '../../FoolGameRound';
import { Card } from '../../../Card';
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
			deck: new Deck({ ranks: DEFAULT_RANKS }),
		});
	});

	test('Should not be able to perform when game starts', () => {
		const currentPlayer = round.getCurrentPlayer();
		expect(
			new PutAction(round, currentPlayer, currentPlayer.getCards()).canRun(),
		).toBeTruthy();
	});

	test('Should have exact cards player\'s after turn', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		john.takeCards([ace, six]);
		new PutAction(round, john, [ace, six]).run();
		expect(round.getCards().get(ace)).toBeNull();
		expect(round.getCards().get(six)).toBeNull();
	});
});
