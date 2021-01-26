import { Board, IBoard } from './Board';

let board: IBoard;

describe('Board', () => {
	beforeEach(() => {
		board = new Board();
	});

	test('Should be empty after being created', () => {
		expect(board.getCards().size).toEqual(0);
	});
});
