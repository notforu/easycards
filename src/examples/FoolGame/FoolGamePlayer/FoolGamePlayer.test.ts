import { DEFAULT_CARDS_PER_HAND, FoolGamePlayer, IFoolGamePlayer } from './FoolGamePlayer';
import { FoolGameDeck, IFoolGameDeck } from '../FoolGameDeck';

let deck: IFoolGameDeck;
let player: IFoolGamePlayer;

describe('FoolGamePlayer', () => {
	beforeEach(() => {
		deck = new FoolGameDeck();
		player = new FoolGamePlayer();
	});

	test('Should fill hand to default cardsPerHand of foolgame', () => {
		player.fillHand(deck);
		expect(player.getCards()).toHaveLength(DEFAULT_CARDS_PER_HAND);
	});
});
