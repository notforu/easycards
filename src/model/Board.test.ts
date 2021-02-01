import { Board, IBoard } from './Board';
import { Card } from './Card';

let board: IBoard;

describe('Board', () => {
	beforeEach(() => {
		board = new Board();
	});

	test('Should be empty after being created', () => {
		expect(board.getCards().size).toEqual(0);
	});

	test('Should have exact cards player\'s after turn', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		board.put([ace, six]);
		expect(board.getCards().get(ace)).toBeNull();
		expect(board.getCards().get(six)).toBeNull();
	});

	test('Should return unbeaten card', () => {
		const six = new Card({ rank: '6' });
		board.put([six]);
		expect(board.getUnbeatenCards()).toEqual([six]);
	});

	test('Should beat unbeaten card', () => {
		const jack = new Card({ rank: 'J' });
		board.put([jack]);
		const queen  = new Card({ rank: 'Q' });
		board.beat(jack, queen);
		expect(board.getUnbeatenCards()).toHaveLength(0);
	});
});
