import { data, subscribe } from './data.js';
import { Game } from "./ui/game/game.component.js";
import { Lose } from './ui/game/lose/lose.component.js';
import { Win } from './ui/game/win/win.component.js';
const appElement = document.querySelector("#app");
function renderApp() {
	appElement.innerHTML = '';
	if (data.win) {
		const win = Win();
		appElement.append(win);
	}
	else if (data.lose) {
		const lose = Lose();
		appElement.append(lose);
	}
	else {
		const game = Game();
		appElement.append(game);
	}
	
}
renderApp();
subscribe(renderApp);