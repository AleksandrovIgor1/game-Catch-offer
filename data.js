export const data = {
	catchPoints: 0,
	missPoints: 0,
	winPoints: 5,
	losePoints: 10,
	win: false,
	lose: false,
	missedOffer: null,
	caughtOffer: null,
	x: 0,
	y: 0,
	rowsCount: 3,
	columnsCount: 3,
	ms: 1000,
}

let listener = null;

function getRandomInt(N) {
	return Math.floor(Math.random() * N);
}
function changeOfferCoordinates() {
	let newX = 0;
	let newY = 0;
	let newCoordsIsEqualOldCoords;
	do {
		newX = getRandomInt(data.columnsCount);
		newY = getRandomInt(data.rowsCount);
		newCoordsIsEqualOldCoords = newX === data.x && newY === data.y;
	} 
	while (
		newCoordsIsEqualOldCoords
	);
	data.x = newX;
	data.y = newY;
}
let offerJumpRunInterval = null;
function runOfferJumpInterval() {
	clearInterval(offerJumpRunInterval);
	offerJumpRunInterval = setInterval(missOffer, data.ms);
}
runOfferJumpInterval();
export function catchOffer() {
	data.catchPoints++;
	if (data.catchPoints === data.winPoints) {
		data.win = true;
		clearInterval(offerJumpRunInterval);
	}
	else {
		setCaughtOffer(data.x, data.y);
		setTimeout((() => {
			clearCaughtOffer();
			listener();
		}), 200);
		changeOfferCoordinates();
		runOfferJumpInterval();
	}
	listener();
}

function missOffer() {
	data.missPoints++;
	if (data.missPoints === data.losePoints) {
		data.lose = true;
		clearInterval(offerJumpRunInterval);
	}
	else {
		setMissedOffer(data.x, data.y);
		setTimeout((() => {
			clearMissedOffer();
			listener();
		}), 200);
		changeOfferCoordinates();
	}
	listener();
}
export function restart() {
	data.catchPoints = 0;
	data.missPoints = 0;
	data.x = 0;
	data.y = 0;
	data.win = false;
	data.lose = false;
	runOfferJumpInterval();
	listener();
}

function setMissedOffer(x, y) {
	data.missedOffer = {x, y};
}
function clearMissedOffer() {
	data.missedOffer = null;
}
function setCaughtOffer(x, y) {
	data.caughtOffer = {x, y};
}
function clearCaughtOffer() {
	data.caughtOffer = null;
}
export function subscribe(observer) {
	listener = observer;
}