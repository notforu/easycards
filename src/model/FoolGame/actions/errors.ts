export class IncorrectBeatError extends Error {
	constructor(message: string = 'Source card must be higher than target') {
		super(message);
	}
}
