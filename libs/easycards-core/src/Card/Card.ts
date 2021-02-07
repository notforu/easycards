export type CardParametersMap = object;

export interface ICard<Parameters extends CardParametersMap = {}> {
	getParams(): Parameters;
}

export class Card<Parameters extends CardParametersMap = {}> implements ICard<Parameters> {
	private params: Parameters;

	constructor(options: Parameters = {} as Parameters) {
		this.params = options;
	}

	getParams(): Parameters {
		return this.params;
	}
}
