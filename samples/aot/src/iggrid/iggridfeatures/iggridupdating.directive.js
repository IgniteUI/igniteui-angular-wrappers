"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feature_1 = require("../feature");
var IgGridUpdatingFeature = /** @class */ (function (_super) {
    __extends(IgGridUpdatingFeature, _super);
    function IgGridUpdatingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Sets a cell value for the specified cell. It also creates a transaction and updates the UI.
     * 			If the specified cell is currently in edit mode, the function will set the desired value in the cell's editor instead.
     *
     * @param rowId    The primary key of the row the cell is a child of.
     * @param colKey    The column key of the cell.
     * @param value    The new value for the cell.
     */
    /**
         * Sets a cell value for the specified cell. It also creates a transaction and updates the UI.
         * 			If the specified cell is currently in edit mode, the function will set the desired value in the cell's editor instead.
         *
         * @param rowId    The primary key of the row the cell is a child of.
         * @param colKey    The column key of the cell.
         * @param value    The new value for the cell.
         */
    IgGridUpdatingFeature.prototype.setCellValue = /**
         * Sets a cell value for the specified cell. It also creates a transaction and updates the UI.
         * 			If the specified cell is currently in edit mode, the function will set the desired value in the cell's editor instead.
         *
         * @param rowId    The primary key of the row the cell is a child of.
         * @param colKey    The column key of the cell.
         * @param value    The new value for the cell.
         */
    function (rowId, colKey, value) { return; };
    ;
    /**
     * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
     * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
     *
     * @param rowId    The primary key of the row to update.
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    /**
         * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
         * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
         *
         * @param rowId    The primary key of the row to update.
         * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
         */
    IgGridUpdatingFeature.prototype.updateRow = /**
         * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
         * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
         *
         * @param rowId    The primary key of the row to update.
         * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
         */
    function (rowId, values) { return; };
    ;
    /**
     * Adds a new row to the grid. It also creates a transaction and updates the UI.
     *
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    /**
         * Adds a new row to the grid. It also creates a transaction and updates the UI.
         *
         * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
         */
    IgGridUpdatingFeature.prototype.addRow = /**
         * Adds a new row to the grid. It also creates a transaction and updates the UI.
         *
         * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
         */
    function (values) { return; };
    ;
    /**
     * Deletes a row from the grid. It also creates a transaction and updates the UI.
     *
     * @param rowId    The primary key of the row to delete.
     */
    /**
         * Deletes a row from the grid. It also creates a transaction and updates the UI.
         *
         * @param rowId    The primary key of the row to delete.
         */
    IgGridUpdatingFeature.prototype.deleteRow = /**
         * Deletes a row from the grid. It also creates a transaction and updates the UI.
         *
         * @param rowId    The primary key of the row to delete.
         */
    function (rowId) { return; };
    ;
    /**
     * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
     *
     * @param rowId    The row id.
     * @param column    The column key or index.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /**
         * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
         *
         * @param rowId    The row id.
         * @param column    The column key or index.
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    IgGridUpdatingFeature.prototype.startEdit = /**
         * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
         *
         * @param rowId    The row id.
         * @param column    The column key or index.
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    function (rowId, column, raiseEvents) { return; };
    ;
    /**
     * Starts editing for adding a new row.
     *
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /**
         * Starts editing for adding a new row.
         *
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    IgGridUpdatingFeature.prototype.startAddRowEdit = /**
         * Starts editing for adding a new row.
         *
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    function (raiseEvents) { return; };
    ;
    /**
     * Ends the currently active edit mode.
     *
     * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    /**
         * Ends the currently active edit mode.
         *
         * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    IgGridUpdatingFeature.prototype.endEdit = /**
         * Ends the currently active edit mode.
         *
         * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
         * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
         */
    function (update, raiseEvents) { return; };
    ;
    /**
     * Finds and returns the key of the first column the editor for which has invalid value.
     */
    /**
         * Finds and returns the key of the first column the editor for which has invalid value.
         */
    IgGridUpdatingFeature.prototype.findInvalid = /**
         * Finds and returns the key of the first column the editor for which has invalid value.
         */
    function () { return; };
    ;
    /**
     * Checks if the grid is in edit mode.
     */
    /**
         * Checks if the grid is in edit mode.
         */
    IgGridUpdatingFeature.prototype.isEditing = /**
         * Checks if the grid is in edit mode.
         */
    function () { return; };
    ;
    /**
     * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
     *
     * @param key    The key of the column.
     */
    /**
         * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
         *
         * @param key    The key of the column.
         */
    IgGridUpdatingFeature.prototype.editorForKey = /**
         * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
         *
         * @param key    The key of the column.
         */
    function (key) { return; };
    ;
    /**
     * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
     *
     * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
     * @param create    Requests to create the editor if it has not been created yet.
     */
    /**
         * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
         *
         * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
         * @param create    Requests to create the editor if it has not been created yet.
         */
    IgGridUpdatingFeature.prototype.editorForCell = /**
         * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
         *
         * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
         * @param create    Requests to create the editor if it has not been created yet.
         */
    function (cell, create) { return; };
    ;
    /**
     * Destroys igGridUpdating.
     */
    /**
         * Destroys igGridUpdating.
         */
    IgGridUpdatingFeature.prototype.destroy = /**
         * Destroys igGridUpdating.
         */
    function () { return; };
    ;
    /**
     * Shows the delete button for specific row.
     *
     * @param row    A jQuery object of the targeted row.
     */
    /**
         * Shows the delete button for specific row.
         *
         * @param row    A jQuery object of the targeted row.
         */
    IgGridUpdatingFeature.prototype.showDeleteButtonFor = /**
         * Shows the delete button for specific row.
         *
         * @param row    A jQuery object of the targeted row.
         */
    function (row) { return; };
    ;
    /**
     * Hides the delete button.
     */
    /**
         * Hides the delete button.
         */
    IgGridUpdatingFeature.prototype.hideDeleteButton = /**
         * Hides the delete button.
         */
    function () { return; };
    ;
    IgGridUpdatingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'updating',
                    inputs: ["disabled", "create", "columnSettings", "editMode", "enableDeleteRow", "enableAddRow", "validation", "doneLabel", "doneTooltip", "cancelLabel", "cancelTooltip", "addRowLabel", "addRowTooltip", "deleteRowLabel", "deleteRowTooltip", "showDoneCancelButtons", "enableDataDirtyException", "startEditTriggers", "horizontalMoveOnEnter", "excelNavigationMode", "saveChangesSuccessHandler", "saveChangesErrorHandler", "swipeDistance", "wrapAround", "rowEditDialogOptions", "dialogWidget", "inherit"],
                    outputs: ["editRowStarting", "editRowStarted", "editRowEnding", "editRowEnded", "editCellStarting", "editCellStarted", "editCellEnding", "editCellEnded", "rowAdding", "rowAdded", "rowDeleting", "rowDeleted", "dataDirty", "generatePrimaryKeyValue", "rowEditDialogBeforeOpen", "rowEditDialogAfterOpen", "rowEditDialogBeforeClose", "rowEditDialogAfterClose", "rowEditDialogContentsRendered"]
                },] },
    ];
    /** @nocollapse */
    IgGridUpdatingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridUpdatingFeature;
}(feature_1.Feature));
exports.IgGridUpdatingFeature = IgGridUpdatingFeature;
//# sourceMappingURL=iggridupdating.directive.js.map