import { FoolGame } from './FoolGame';
import { Deck, DEFAULT_RANKS, IDeck } from '../Deck';
import { DEFAULT_CARDS_PER_HAND, IPlayer, Player } from '../Player';
import { IFoolGameRound } from './FoolGameRound';
import { Card } from '../Card';
import { IncorrectBeatError } from '../utils/errors';
import { IGame } from '../common/Game';
import { BeatAction } from './actions/BeatAction';

let sam: IPlayer;
let john: IPlayer;
let deck: IDeck;
let game: IGame;
let round: IFoolGameRound;

describe('Fool game round logic', () => {
	beforeEach(() => {
		sam = new Player();
		john = new Player();
		deck = new Deck({ ranks: DEFAULT_RANKS });
		game = new FoolGame({
			deck,
			players: [john, sam],
		});
		game.start();
		round = game.getCurrentRound();
	});

	test('Should be empty after being created', () => {
		expect(round.getCards().size).toEqual(0);
	});

	test('First player should begin the game', () => {
		expect(round.getCurrentPlayer()).toStrictEqual(john);
	});

	test('Every player should have 6 cards, when game starts', () => {
		expect(sam.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
		expect(john.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	test('Should have exact cards player\'s after turn', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		john.takeCards([ace, six]);
		round.put(john, [ace, six]);
		expect(round.getCards().get(ace)).toBeNull();
		expect(round.getCards().get(six)).toBeNull();
	});

	test('Should return unbeaten card', () => {
		const ace = new Card({ rank: 'A' });
		john.takeCards([ace]);
		round.put(john, [ace]);
		expect(round.getUnbeatenCards()).toEqual([ace]);
	});

	test('Should beat unbeaten card', () => {
		const jack = new Card({ rank: 'J' });
		john.takeCards([jack]);
		round.put(john, [jack]);
		const queen  = new Card({ rank: 'Q' });
		sam.takeCards([queen]);
		round.beat(sam, jack, queen);
		expect(round.getUnbeatenCards()).toHaveLength(0);
	});

	test('Opponent should be able to perform action "beat" after first put', () => {
		round.put(john, [john.getCards()[0]]);
		expect(new BeatAction().canBePerformed(john, round));
	});

	test('Opponent should be able to beat with the higher card', () => {
		const six = new Card({ rank: '6' });
		const seven = new Card({ rank: '7' });
		john.takeCards([six]);
		round.put(john, [six]);
		sam.takeCards([seven]);
		round.beat(sam, six, seven);
		expect(game.getCurrentRound().getUnbeatenCards()).toHaveLength(0);
	});

	test('Opponent should not be able to beat with the lower card', () => {
		const queen = new Card({ rank: 'Q' });
		const seven = new Card({ rank: '7' });
		john.takeCards([queen]);
		round.put(john, [queen]);
		sam.takeCards([seven]);
		expect(() => round.beat(sam, queen, seven)).toThrowError(new IncorrectBeatError());
	});
});
