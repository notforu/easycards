import { render, screen } from '@testing-library/react';
import './setupTests';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const deckElement = screen.getByText(/Deck/i);
	expect(deckElement).toBeInTheDocument();
});
