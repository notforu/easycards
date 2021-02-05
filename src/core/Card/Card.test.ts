import { Card } from './Card';

describe('Card', () => {
	test('Should return default parameters', () => {
		const name = 'Diablo';
		const HP = 30;
		const card = new Card({ name, HP });
		expect(card.getParams().name).toEqual(name);
		expect(card.getParams().HP).toEqual(HP);
	});
});
