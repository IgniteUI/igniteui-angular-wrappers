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
var IgGridSelectionFeature = /** @class */ (function (_super) {
    __extends(IgGridSelectionFeature, _super);
    function IgGridSelectionFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the selection widget.
     */
    /**
         * Destroys the selection widget.
         */
    IgGridSelectionFeature.prototype.destroy = /**
         * Destroys the selection widget.
         */
    function () { return; };
    ;
    /**
     * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
     */
    /**
         * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
         */
    IgGridSelectionFeature.prototype.clearSelection = /**
         * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
         */
    function () { return; };
    ;
    /**
     * Selects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    /**
         * Selects a cell by row/col
         *
         * @param row     Row index
         * @param col     Column index
         * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
         */
    IgGridSelectionFeature.prototype.selectCell = /**
         * Selects a cell by row/col
         *
         * @param row     Row index
         * @param col     Column index
         * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
         */
    function (row, col, isFixed) { return; };
    ;
    /**
     * Selects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    /**
         * Selects a cell by row id/column key
         *
         * @param id     Row Id
         * @param colKey     Column key
         */
    IgGridSelectionFeature.prototype.selectCellById = /**
         * Selects a cell by row id/column key
         *
         * @param id     Row Id
         * @param colKey     Column key
         */
    function (id, colKey) { return; };
    ;
    /**
     * Deselects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    /**
         * Deselects a cell by row/col
         *
         * @param row     Row index
         * @param col     Column index
         * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
         */
    IgGridSelectionFeature.prototype.deselectCell = /**
         * Deselects a cell by row/col
         *
         * @param row     Row index
         * @param col     Column index
         * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
         */
    function (row, col, isFixed) { return; };
    ;
    /**
     * Deselects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    /**
         * Deselects a cell by row id/column key
         *
         * @param id     Row Id
         * @param colKey     Column key
         */
    IgGridSelectionFeature.prototype.deselectCellById = /**
         * Deselects a cell by row id/column key
         *
         * @param id     Row Id
         * @param colKey     Column key
         */
    function (id, colKey) { return; };
    ;
    /**
     * Selects a row by index
     *
     * @param index     Row index
     */
    /**
         * Selects a row by index
         *
         * @param index     Row index
         */
    IgGridSelectionFeature.prototype.selectRow = /**
         * Selects a row by index
         *
         * @param index     Row index
         */
    function (index) { return; };
    ;
    /**
     * Selects a row by row id
     *
     * @param id     Row Id
     */
    /**
         * Selects a row by row id
         *
         * @param id     Row Id
         */
    IgGridSelectionFeature.prototype.selectRowById = /**
         * Selects a row by row id
         *
         * @param id     Row Id
         */
    function (id) { return; };
    ;
    /**
     * Deselects a row by index
     *
     * @param index     Row index
     */
    /**
         * Deselects a row by index
         *
         * @param index     Row index
         */
    IgGridSelectionFeature.prototype.deselectRow = /**
         * Deselects a row by index
         *
         * @param index     Row index
         */
    function (index) { return; };
    ;
    /**
     * Deselects a row by row id
     *
     * @param id     Row Id
     */
    /**
         * Deselects a row by row id
         *
         * @param id     Row Id
         */
    IgGridSelectionFeature.prototype.deselectRowById = /**
         * Deselects a row by row id
         *
         * @param id     Row Id
         */
    function (id) { return; };
    ;
    /**
     * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    /**
         * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
         *
         * 				If multiple selection is disabled the function will return null.
         */
    IgGridSelectionFeature.prototype.selectedCells = /**
         * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
         *
         * 				If multiple selection is disabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    /**
         * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
         *
         * 				If multiple selection is disabled the function will return null.
         */
    IgGridSelectionFeature.prototype.selectedRows = /**
         * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
         *
         * 				If multiple selection is disabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    /**
         * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         *
         * 				If multiple selection is enabled the function will return null.
         */
    IgGridSelectionFeature.prototype.selectedCell = /**
         * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         *
         * 				If multiple selection is enabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently selected row that has the format { element: , index: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    /**
         * Returns the currently selected row that has the format { element: , index: }, if any.
         *
         * 				If multiple selection is enabled the function will return null.
         */
    IgGridSelectionFeature.prototype.selectedRow = /**
         * Returns the currently selected row that has the format { element: , index: }, if any.
         *
         * 				If multiple selection is enabled the function will return null.
         */
    function () { return; };
    ;
    /**
     * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     */
    /**
         * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         */
    IgGridSelectionFeature.prototype.activeCell = /**
         * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
         */
    function () { return; };
    ;
    /**
     * Returns the currently active (focused) row that has the format { element: , index: }, if any.
     */
    /**
         * Returns the currently active (focused) row that has the format { element: , index: }, if any.
         */
    IgGridSelectionFeature.prototype.activeRow = /**
         * Returns the currently active (focused) row that has the format { element: , index: }, if any.
         */
    function () { return; };
    ;
    IgGridSelectionFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'selection',
                    inputs: ["disabled", "create", "multipleSelection", "mouseDragSelect", "mode", "activation", "wrapAround", "skipChildren", "multipleCellSelectOnClick", "touchDragSelect", "persist", "allowMultipleRangeSelection"],
                    outputs: ["rowSelectionChanging", "rowSelectionChanged", "cellSelectionChanging", "cellSelectionChanged", "activeCellChanging", "activeCellChanged", "activeRowChanging", "activeRowChanged"]
                },] },
    ];
    /** @nocollapse */
    IgGridSelectionFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridSelectionFeature;
}(feature_1.Feature));
exports.IgGridSelectionFeature = IgGridSelectionFeature;
//# sourceMappingURL=iggridselection.directive.js.map