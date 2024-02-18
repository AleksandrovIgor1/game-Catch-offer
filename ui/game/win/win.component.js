import { restart } from '../../../data.js';

export function Win() {
	const element = document.createElement('div');
	const winText = document.createElement('p');
	winText.append('You WIN!')
	element.append(winText);
	const restartButton = RestartButton();
	element.append(restartButton);
	return element;
}
export function RestartButton() {
	const element = document.createElement('button');
	
	element.innerHTML = 'RESTART';
	element.addEventListener('click', () => {
		restart();
	});
	return element;
}