export function createCounter(): () => number {
	let id = 0;
	return function next(): number {
		return ++id;
	};
}
