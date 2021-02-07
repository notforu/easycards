/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
	clearMocks: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/', '/build'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
};
