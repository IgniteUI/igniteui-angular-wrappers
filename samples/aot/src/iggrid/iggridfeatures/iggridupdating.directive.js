"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    IgGridUpdatingFeature.prototype.setCellValue = function (rowId, colKey, value) { return; };
    ;
    /**
     * Sets values for specified cells in a row. It also creates a transaction and updates the UI.
     * 			If the specified row is currently in edit mode, the function will set the desired values in the row's editors instead.
     *
     * @param rowId    The primary key of the row to update.
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    IgGridUpdatingFeature.prototype.updateRow = function (rowId, values) { return; };
    ;
    /**
     * Adds a new row to the grid. It also creates a transaction and updates the UI.
     *
     * @param values    Pairs of values in the format { column1Key: value1, column2Key: value2, ... } .
     */
    IgGridUpdatingFeature.prototype.addRow = function (values) { return; };
    ;
    /**
     * Deletes a row from the grid. It also creates a transaction and updates the UI.
     *
     * @param rowId    The primary key of the row to delete.
     */
    IgGridUpdatingFeature.prototype.deleteRow = function (rowId) { return; };
    ;
    /**
     * Starts editing for the row or cell specified (depending on the [editMode](ui.iggridupdating#options:editMode)).
     *
     * @param rowId    The row id.
     * @param column    The column key or index.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    IgGridUpdatingFeature.prototype.startEdit = function (rowId, column, raiseEvents) { return; };
    ;
    /**
     * Starts editing for adding a new row.
     *
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    IgGridUpdatingFeature.prototype.startAddRowEdit = function (raiseEvents) { return; };
    ;
    /**
     * Ends the currently active edit mode.
     *
     * @param update    Specifies if the edit process should accept the current changes. Default is 'false'.
     * @param raiseEvents    Specifies whether or not updating events should be raised for this operation.
     */
    IgGridUpdatingFeature.prototype.endEdit = function (update, raiseEvents) { return; };
    ;
    /**
     * Finds and returns the key of the first column the editor for which has invalid value.
     */
    IgGridUpdatingFeature.prototype.findInvalid = function () { return; };
    ;
    /**
     * Checks if the grid is in edit mode.
     */
    IgGridUpdatingFeature.prototype.isEditing = function () { return; };
    ;
    /**
     * Gets the editor for a column by the column key. That method can be used only after the editor has been created.
     *
     * @param key    The key of the column.
     */
    IgGridUpdatingFeature.prototype.editorForKey = function (key) { return; };
    ;
    /**
     * Gets the editor for a column by the cell it resides in. If allowed the function can create the editor if it has not been created yet.
     *
     * @param cell    Reference to the jQuery-wrapped TD object of the grid that the editor belongs to.
     * @param create    Requests to create the editor if it has not been created yet.
     */
    IgGridUpdatingFeature.prototype.editorForCell = function (cell, create) { return; };
    ;
    /**
     * Destroys igGridUpdating.
     */
    IgGridUpdatingFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Shows the delete button for specific row.
     *
     * @param row    A jQuery object of the targeted row.
     */
    IgGridUpdatingFeature.prototype.showDeleteButtonFor = function (row) { return; };
    ;
    /**
     * Hides the delete button.
     */
    IgGridUpdatingFeature.prototype.hideDeleteButton = function () { return; };
    ;
    IgGridUpdatingFeature = __decorate([
        core_1.Directive({
            selector: 'updating',
            inputs: ["disabled", "create", "columnSettings", "editMode", "enableDeleteRow", "enableAddRow", "validation", "doneLabel", "doneTooltip", "cancelLabel", "cancelTooltip", "addRowLabel", "addRowTooltip", "deleteRowLabel", "deleteRowTooltip", "showDoneCancelButtons", "enableDataDirtyException", "startEditTriggers", "horizontalMoveOnEnter", "excelNavigationMode", "saveChangesSuccessHandler", "saveChangesErrorHandler", "swipeDistance", "wrapAround", "rowEditDialogOptions", "dialogWidget", "inherit"],
            outputs: ["editRowStarting", "editRowStarted", "editRowEnding", "editRowEnded", "editCellStarting", "editCellStarted", "editCellEnding", "editCellEnded", "rowAdding", "rowAdded", "rowDeleting", "rowDeleted", "dataDirty", "generatePrimaryKeyValue", "rowEditDialogBeforeOpen", "rowEditDialogAfterOpen", "rowEditDialogBeforeClose", "rowEditDialogAfterClose", "rowEditDialogContentsRendered"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridUpdatingFeature);
    return IgGridUpdatingFeature;
}(feature_1.Feature));
exports.IgGridUpdatingFeature = IgGridUpdatingFeature;
//# sourceMappingURL=iggridupdating.directive.js.map