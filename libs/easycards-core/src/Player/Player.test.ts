import { Player, IPlayer } from './Player';
import { Card } from '../Card';
import { Deck, IDeck } from '../';

let deck: IDeck;
let player: IPlayer;
const cardsPerHand = 4;

describe('Player', () => {
	beforeEach(() => {
		deck = new Deck();
		deck.addCards(new Array(20).fill(null).map(() => new Card()));
		player = new Player({ cardsPerHand });
	});

	test('Should have an empty hand after being created', () => {
		expect(player.getCards()).toHaveLength(0);
	});

	test('Should pick specified amount of cards', () => {
		expect(player.getCards()).toHaveLength(0);
		const pickedCards = player.pickCards(deck, cardsPerHand);
		expect(player.getCards()).toStrictEqual(pickedCards);
	});

	test('Should fill hand if it is empty', () => {
		player.fillHand(deck);
		expect(player.getCards()).toHaveLength(cardsPerHand);
	});

	test('Withdraw should decrease hand size', () => {
		player.fillHand(deck);
		player.withdraw([player.getCards()[0]]);
		expect(player.getCards()).toHaveLength(cardsPerHand - 1);
	});

	test('Should withdraw exact cards', () => {
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
