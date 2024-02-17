import { data, restart } from '../../../data.js'

export function Win() {
	const element = document.createElement('div');
	element.append(`You WIN, point: ${data.catchPoints}; ${data.missPoints}`)
	const restartButton = RestartButton();
	element.append(restartButton);
	return element;
}
export function RestartButton() {
	const element = document.createElement('button');
	element.innerHTML = 'RESTART';
	element.addEventListener('click', () => {
		restart();
	})
	return element;
}