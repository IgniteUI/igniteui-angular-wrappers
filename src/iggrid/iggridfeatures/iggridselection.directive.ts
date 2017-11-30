import { Directive, ElementRef } from "@angular/core";
import { Feature } from "../feature";

@Directive({
	selector: 'selection',
	inputs: ["disabled","create","multipleSelection","mouseDragSelect","mode","activation","wrapAround","skipChildren","multipleCellSelectOnClick","touchDragSelect","persist","allowMultipleRangeSelection"],
	outputs: ["rowSelectionChanging","rowSelectionChanged","cellSelectionChanging","cellSelectionChanged","activeCellChanging","activeCellChanged","activeRowChanging","activeRowChanged"]
})
export class IgGridSelectionFeature extends Feature<IgGridSelection> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the selection widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
	 */
	public clearSelection(): void { return; } ;

	/**
	 * Selects a cell by row/col
	 *
	 * @param row     Row index
	 * @param col     Column index
	 * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
	 */
	public selectCell(row: number, col: number, isFixed?: boolean): void { return; } ;

	/**
	 * Selects a cell by row id/column key
	 *
	 * @param id     Row Id
	 * @param colKey     Column key
	 */
	public selectCellById(id: Object, colKey: string): void { return; } ;

	/**
	 * Deselects a cell by row/col
	 *
	 * @param row     Row index
	 * @param col     Column index
	 * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
	 */
	public deselectCell(row: number, col: number, isFixed?: boolean): void { return; } ;

	/**
	 * Deselects a cell by row id/column key
	 *
	 * @param id     Row Id
	 * @param colKey     Column key
	 */
	public deselectCellById(id: Object, colKey: string): void { return; } ;

	/**
	 * Selects a row by index
	 *
	 * @param index     Row index
	 */
	public selectRow(index: number): void { return; } ;

	/**
	 * Selects a row by row id
	 *
	 * @param id     Row Id
	 */
	public selectRowById(id: Object): void { return; } ;

	/**
	 * Deselects a row by index
	 *
	 * @param index     Row index
	 */
	public deselectRow(index: number): void { return; } ;

	/**
	 * Deselects a row by row id
	 *
	 * @param id     Row Id
	 */
	public deselectRowById(id: Object): void { return; } ;

	/**
	 * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
	 * 			
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedCells(): any[] { return; } ;

	/**
	 * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
	 * 			
	 * 				If multiple selection is disabled the function will return null.
	 */
	public selectedRows(): any[] { return; } ;

	/**
	 * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 * 			
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedCell(): Object { return; } ;

	/**
	 * Returns the currently selected row that has the format { element: , index: }, if any.
	 * 			
	 * 				If multiple selection is enabled the function will return null.
	 */
	public selectedRow(): Object { return; } ;

	/**
	 * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
	 */
	public activeCell(): Object { return; } ;

	/**
	 * Returns the currently active (focused) row that has the format { element: , index: }, if any.
	 */
	public activeRow(): Object { return; } ;
}