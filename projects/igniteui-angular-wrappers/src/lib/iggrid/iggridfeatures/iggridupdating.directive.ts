import { ElementRef, Directive } from '@angular/core';
import { Feature } from '../feature';

@Directive({
    selector: 'updating',
    inputs: ['disabled', 'create', 'columnSettings', 'editMode', 'enableDeleteRow', 'enableAddRow', 'validation', 'doneLabel',
        'doneTooltip', 'cancelLabel', 'cancelTooltip', 'addRowLabel', 'addRowTooltip', 'deleteRowLabel', 'deleteRowTooltip', 'showDoneCancelButtons', 'enableDataDirtyException', 'startEditTriggers', 'horizontalMoveOnEnter', 'excelNavigationMode', 'saveChangesSuccessHandler', 'saveChangesErrorHandler', 'swipeDistance', 'wrapAround', 'rowEditDialogOptions', 'dialogWidget', 'inherit'],
    outputs: ['editRowStarting', 'editRowStarted', 'editRowEnding', 'editRowEnded', 'editCellStarting', 'editCellStarted', 'editCellEnding', 'editCellEnded', 'rowAdding', 'rowAdded', 'rowDeleting', 'rowDeleted', 'dataDirty', 'generatePrimaryKeyValue', 'rowEditDialogBeforeOpen', 'rowEditDialogAfterOpen', 'rowEditDialogBeforeClose', 'rowEditDialogAfterClose', 'rowEditDialogContentsRendered'],
    standalone: false
})
export class IgGridUpdatingFeature extends Feature<IgGridUpdating> {
    constructor(el: ElementRef) {
        super(el);
    }

    /**
     * Sets a cell value for the specified cell. It also creates a transaction and updates the UI.
     * 			If the specified cell is currently in edit mode, the function will set the desired value in the cell's editor instead.
     *
     * @param rowId    The primary key of the row the cell is a child of.
     * @param colKey    The column key of the cell.
     * @param value    The new value for the cell.
     */
    /* istanbul ignore next */
    public setCellValue(rowId: object, colKey: string, value: object): void { return; }

    /**
     * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
     * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
     *
     * @param rowId    The primary key of the row to update.
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    /* istanbul ignore next */
    public updateRow(rowId: any, values: object): void { return; }

    /**
     * Adds a new row to the grid. It also creates a transaction and updates the UI.
     *
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    /* istanbul ignore next */
    public addRow(values: object): void { return; }

    /**
     * Deletes a row from the grid. It also creates a transaction and updates the UI.
     *
     * @param rowId    The primary key of the row to delete.
     */
    /* istanbul ignore next */
    public deleteRow(rowId: any): void { return; }

    /**
     * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
     *
     * @param rowId    The row id.
     * @param column    The column key or index.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /* istanbul ignore next */
    public startEdit(rowId: object, column: object, raiseEvents?: boolean): boolean { return; }

    /**
     * Starts editing for adding a new row.
     *
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /* istanbul ignore next */
    public startAddRowEdit(raiseEvents?: boolean): boolean { return; }

    /**
     * Ends the currently active edit mode.
     *
     * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /* istanbul ignore next */
    public endEdit(update?: boolean, raiseEvents?: boolean): boolean { return; }

    /**
     * Finds and returns the key of the first column the editor for which has invalid value.
     */
    /* istanbul ignore next */
    public findInvalid(): string { return; }

    /**
     * Checks if the grid is in edit mode.
     */
    /* istanbul ignore next */
    public isEditing(): boolean { return; }

    /**
     * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
     *
     * @param key    The key of the column.
     */
    /* istanbul ignore next */
    public editorForKey(key: string): object { return; }

    /**
     * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
     *
     * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
     * @param create    Requests to create the editor if it has not been created yet.
     */
    /* istanbul ignore next */
    public editorForCell(cell: string, create?: boolean): object { return; }

    /**
     * Destroys igGridUpdating.
     */
    /* istanbul ignore next */
    public destroy(): object { return; }

    /**
     * Shows the delete button for specific row.
     *
     * @param row    A jQuery object of the targeted row.
     */
    /* istanbul ignore next */
    public showDeleteButtonFor(row: object): void { return; }

    /**
     * Hides the delete button.
     */
    /* istanbul ignore next */
    public hideDeleteButton(): void { return; }
}
