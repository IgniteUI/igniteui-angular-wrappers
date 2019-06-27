import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
	selector: 'updating',
	inputs: ["disabled","create","columnSettings","editMode","enableDeleteRow","enableAddRow","validation","doneLabel","doneTooltip","cancelLabel","cancelTooltip","addRowLabel","addRowTooltip","deleteRowLabel","deleteRowTooltip","showDoneCancelButtons","enableDataDirtyException","startEditTriggers","horizontalMoveOnEnter","excelNavigationMode","saveChangesSuccessHandler","saveChangesErrorHandler","swipeDistance","wrapAround","rowEditDialogOptions","dialogWidget","inherit"],
	outputs: ["editRowStarting","editRowStarted","editRowEnding","editRowEnded","editCellStarting","editCellStarted","editCellEnding","editCellEnded","rowAdding","rowAdded","rowDeleting","rowDeleted","dataDirty","generatePrimaryKeyValue","rowEditDialogBeforeOpen","rowEditDialogAfterOpen","rowEditDialogBeforeClose","rowEditDialogAfterClose","rowEditDialogContentsRendered"]
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
	public setCellValue(rowId: Object, colKey: string, value: Object): void { return; } ;

	/**
	 * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
	 * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
	 *
	 * @param rowId    The primary key of the row to update.
	 * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
	 */
	public updateRow(rowId: Object, values: Object): void { return; } ;

	/**
	 * Adds a new row to the grid. It also creates a transaction and updates the UI.
	 *
	 * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
	 */
	public addRow(values: Object): void { return; } ;

	/**
	 * Deletes a row from the grid. It also creates a transaction and updates the UI.
	 *
	 * @param rowId    The primary key of the row to delete.
	 */
	public deleteRow(rowId: Object): void { return; } ;

	/**
	 * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
	 *
	 * @param rowId    The row id.
	 * @param column    The column key or index.
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public startEdit(rowId: Object, column: Object, raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Starts editing for adding a new row.
	 *
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public startAddRowEdit(raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Ends the currently active edit mode.
	 *
	 * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
	 * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
	 */
	public endEdit(update?: boolean, raiseEvents?: boolean): boolean { return; } ;

	/**
	 * Finds and returns the key of the first column the editor for which has invalid value.
	 */
	public findInvalid(): string { return; } ;

	/**
	 * Checks if the grid is in edit mode.
	 */
	public isEditing(): boolean { return; } ;

	/**
	 * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
	 *
	 * @param key    The key of the column.
	 */
	public editorForKey(key: string): Object { return; } ;

	/**
	 * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
	 *
	 * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
	 * @param create    Requests to create the editor if it has not been created yet.
	 */
	public editorForCell(cell: string, create?: boolean): Object { return; } ;

	/**
	 * Destroys igGridUpdating.
	 */
	public destroy(): Object { return; } ;

	/**
	 * Shows the delete button for specific row.
	 *
	 * @param row    A jQuery object of the targeted row.
	 */
	public showDeleteButtonFor(row: Object): void { return; } ;

	/**
	 * Hides the delete button.
	 */
	public hideDeleteButton(): void { return; } ;
}