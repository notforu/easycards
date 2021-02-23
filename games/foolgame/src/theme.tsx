import baseStyled, { ThemedStyledInterface } from 'styled-components';

export interface FoolGameTheme {
	cardWidth: number;
	cardHeight: number;
	cardSelectedWidth: number;
	cardSelectedHeight: number;
}

export const theme: FoolGameTheme = {
	cardHeight: 60,
	cardWidth: 42,
	cardSelectedHeight: 70,
	cardSelectedWidth: 45,
};

export const styled = baseStyled as ThemedStyledInterface<FoolGameTheme>;
