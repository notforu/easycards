import { Player, DEFAULT_CARDS_PER_HAND, IPlayer } from './Player';
import { Deck, IDeck, DEFAULT_RANKS } from './Deck';

let deck: IDeck;
let player: IPlayer;

describe('Player', () => {
	beforeEach(() => {
		deck = new Deck({ ranks: DEFAULT_RANKS });
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
		player.withdraw([0]);
		expect(player.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND - 1);
	});

	test('Should turn with exact cards', () => {
		player.fillHand(deck);
		const cards = player.getCards();
		const turn = player.withdraw([0,5]);
		expect(cards[0]).toEqual(turn[0]);
		expect(cards[5]).toEqual(turn[1]);
	});
});
