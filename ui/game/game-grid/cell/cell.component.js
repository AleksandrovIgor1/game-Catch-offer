import { data } from '../../../../data.js';
import { CaughtOffer, MissedOffer, Offer } from './offer/offer.component.js';
export function Cell(x, y) {
	const cellElement = document.createElement('td');
	if (x === data.x && y === data.y) {
		cellElement.append(Offer());
	}
	if (x === data.caughtOffer?.x && y === data.caughtOffer?.y) {
		cellElement.append(CaughtOffer());
	}
	if (x === data.missedOffer?.x && y === data.missedOffer?.y) {
		cellElement.append(MissedOffer());
	}
	return cellElement;
}

