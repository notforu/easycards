import { Player, IPlayer, DEFAULT_CARDS_PER_HAND } from './Player';
import { FoolGameDeck, DEFAULT_RANKS } from '../../examples/FoolGame/FoolGameDeck/FoolGameDeck';
import { Card } from '../Card';
import { IDeck } from '../index';

let deck: IDeck;
let player: IPlayer;

describe('Player', () => {
	beforeEach(() => {
		deck = new FoolGameDeck({ ranks: DEFAULT_RANKS });
		player = new Player();
	});

	test('Should have an empty hand after being created', () => {
		expect(player.getCards()).toHaveLength(0);
	});

	test('Should pick specified amount of cards', () => {
		expect(player.getCards()).toHaveLength(0);
		const pickedCards = player.pickCards(deck, DEFAULT_CARDS_PER_HAND);
		expect(player.getCards()).toStrictEqual(pickedCards);
	});

	test('Should fill hand if it is empty', () => {
		player.fillHand(deck);
		expect(player.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});

	test('Turn should decrease hand size', () => {
		player.fillHand(deck);
		player.withdraw([player.getCards()[0]]);
		expect(player.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND - 1);
	});

	test('Should turn with exact cards', () => {
		player.fillHand(deck);
		const cards = player.getCards();
		const turn = player.withdraw([cards[0], cards[5]]);
		expect(cards[0]).toEqual(turn[0]);
		expect(cards[5]).toEqual(turn[1]);
	});

	test('Should take exact cards', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		const cards = [ace, six];
		player.takeCards(cards);
		expect(player.getCards()).toContain(ace);
		expect(player.getCards()).toContain(six);
	});
});
