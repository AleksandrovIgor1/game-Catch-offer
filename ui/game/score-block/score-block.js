import { data } from '../../../data.js';
export function ScoreBlock() {
	const element = document.createElement('div');
  element.append('Catch: ' + data.catchPoints + '; Miss: ' + data.missPoints);
	return element;
}
