import { data } from '../../../data.js';

export function SettingsPanel() {
	const element = document.createElement('div');
	const pointsToWin = document.createElement('p');
	const pointsToLose = document.createElement('p');
	pointsToWin.append('Points to win: ' + data.winPoints);
	pointsToLose.append('Points to lose: ' + data.losePoints);
	

	element.append(pointsToWin, pointsToLose);
	return element;
}

