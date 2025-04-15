import { Directive, ElementRef } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'selection',
    inputs: ['disabled', 'create', 'multipleSelection', 'mouseDragSelect', 'mode', 'activation', 'wrapAround', 'skipChildren', 'multipleCellSelectOnClick', 'touchDragSelect', 'persist', 'allowMultipleRangeSelection'],
    outputs: ['rowSelectionChanging', 'rowSelectionChanged', 'cellSelectionChanging', 'cellSelectionChanged', 'activeCellChanging', 'activeCellChanged', 'activeRowChanging', 'activeRowChanged'],
    standalone: false
})
export class IgGridSelectionFeature extends Feature<IgGridSelection> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Destroys the selection widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
     */
    /* istanbul ignore next */
    public clearSelection(): void { return; }

    /**
     * Selects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    /* istanbul ignore next */
    public selectCell(row: number, col: number, isFixed?: boolean): void { return; }

    /**
     * Selects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    /* istanbul ignore next */
    public selectCellById(id: object, colKey: string): void { return; }

    /**
     * Deselects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    /* istanbul ignore next */
    public deselectCell(row: number, col: number, isFixed?: boolean): void { return; }

    /**
     * Deselects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    /* istanbul ignore next */
    public deselectCellById(id: object, colKey: string): void { return; }

    /**
     * Selects a row by index
     *
     * @param index     Row index
     */
    /* istanbul ignore next */
    public selectRow(index: number): void { return; }

    /**
     * Selects a row by row id
     *
     * @param id     Row Id
     */
    /* istanbul ignore next */
    public selectRowById(id: object): void { return; }

    /**
     * Deselects a row by index
     *
     * @param index     Row index
     */
    /* istanbul ignore next */
    public deselectRow(index: number): void { return; }

    /**
     * Deselects a row by row id
     *
     * @param id     Row Id
     */
    /* istanbul ignore next */
    public deselectRowById(id: object): void { return; }

    /**
     * Returns an array of selected cells in arbitrary order where every objects has the format
     * { element: , row: , index: , rowIndex: , columnKey: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedCells(): any[] { return; }

    /**
     * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedRows(): any[] { return; }

    /**
     * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedCell(): object { return; }

    /**
     * Returns the currently selected row that has the format { element: , index: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    /* istanbul ignore next */
    public selectedRow(): object { return; }

    /**
     * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     */
    /* istanbul ignore next */
    public activeCell(): object { return; }

    /**
     * Returns the currently active (focused) row that has the format { element: , index: }, if any.
     */
    /* istanbul ignore next */
    public activeRow(): object { return; }
}
