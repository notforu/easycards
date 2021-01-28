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

	test('Should be exact card on board after turn', () => {
		const ace = new Card({ rank: 'A' });
		const six = new Card({ rank: '6' });
		board.put([ace, six]);
		expect(board.getCards().get(ace)).toBeNull();
		expect(board.getCards().get(six)).toBeNull();
	});
});
