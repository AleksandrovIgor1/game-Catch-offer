import { data } from '../../../data.js';
import { Cell } from './cell/cell.component.js';
export function GameGrid() {
	const gridElement = document.createElement('table');
	for (let y = 0; y < data.rowsCount; y++) {
		const rowElement = document.createElement('tr');
		for (let x = 0; x < data.columnsCount; x++) {
			const cellElement = Cell(x, y);
			rowElement.append(cellElement);
		}
		gridElement.append(rowElement);
	}
	return gridElement;
};

