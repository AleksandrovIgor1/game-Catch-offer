import { RestartButton } from '../win/win.component.js';

export function Lose() {
	const element = document.createElement('div');
	const loseText = document.createElement('p');
	loseText.append('You LOSE!')
	element.append(loseText);
	const restartButton = RestartButton();
	element.append(restartButton);
	return element;
}
