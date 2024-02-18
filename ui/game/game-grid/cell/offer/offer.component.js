import { catchOffer } from '../../../../../data.js';
export function Offer() {
	const element = document.createElement('img');
	element.src = './assets/images/offer.png';
	function clickHandler() {
		catchOffer();
	}
	element.addEventListener('click', clickHandler)
	return element;

}
export function MissedOffer() {
	const element = document.createElement('img');
	element.src = './assets/images/offerError.png';
	return element;
}
export function CaughtOffer() {
	const element = document.createElement('img');
	element.src = './assets/images/offerOk.png';
	return element;
}
