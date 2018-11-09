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
var IgGridSelectionFeature = /** @class */ (function (_super) {
    __extends(IgGridSelectionFeature, _super);
    function IgGridSelectionFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the selection widget.
     */
    IgGridSelectionFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Clears all selected cells, selected rows, active cell and active row. Also updates the UI accordingly
     */
    IgGridSelectionFeature.prototype.clearSelection = function () { return; };
    ;
    /**
     * Selects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    IgGridSelectionFeature.prototype.selectCell = function (row, col, isFixed) { return; };
    ;
    /**
     * Selects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    IgGridSelectionFeature.prototype.selectCellById = function (id, colKey) { return; };
    ;
    /**
     * Deselects a cell by row/col
     *
     * @param row     Row index
     * @param col     Column index
     * @param isFixed     If the cell is part of the fixed or unfixed area of the grid.
     */
    IgGridSelectionFeature.prototype.deselectCell = function (row, col, isFixed) { return; };
    ;
    /**
     * Deselects a cell by row id/column key
     *
     * @param id     Row Id
     * @param colKey     Column key
     */
    IgGridSelectionFeature.prototype.deselectCellById = function (id, colKey) { return; };
    ;
    /**
     * Selects a row by index
     *
     * @param index     Row index
     */
    IgGridSelectionFeature.prototype.selectRow = function (index) { return; };
    ;
    /**
     * Selects a row by row id
     *
     * @param id     Row Id
     */
    IgGridSelectionFeature.prototype.selectRowById = function (id) { return; };
    ;
    /**
     * Deselects a row by index
     *
     * @param index     Row index
     */
    IgGridSelectionFeature.prototype.deselectRow = function (index) { return; };
    ;
    /**
     * Deselects a row by row id
     *
     * @param id     Row Id
     */
    IgGridSelectionFeature.prototype.deselectRowById = function (id) { return; };
    ;
    /**
     * Returns an array of selected cells in arbitrary order where every objects has the format { element: , row: , index: , rowIndex: , columnKey: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    IgGridSelectionFeature.prototype.selectedCells = function () { return; };
    ;
    /**
     * Returns an array of selected rows in arbitrary order where every object has the format { element: , index: } .
     *
     * 				If multiple selection is disabled the function will return null.
     */
    IgGridSelectionFeature.prototype.selectedRows = function () { return; };
    ;
    /**
     * Returns the currently selected cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    IgGridSelectionFeature.prototype.selectedCell = function () { return; };
    ;
    /**
     * Returns the currently selected row that has the format { element: , index: }, if any.
     *
     * 				If multiple selection is enabled the function will return null.
     */
    IgGridSelectionFeature.prototype.selectedRow = function () { return; };
    ;
    /**
     * Returns the currently active (focused) cell that has the format { element: , row: , index: , rowIndex: , columnKey: }, if any.
     */
    IgGridSelectionFeature.prototype.activeCell = function () { return; };
    ;
    /**
     * Returns the currently active (focused) row that has the format { element: , index: }, if any.
     */
    IgGridSelectionFeature.prototype.activeRow = function () { return; };
    ;
    IgGridSelectionFeature = __decorate([
        core_1.Directive({
            selector: 'selection',
            inputs: ["disabled", "create", "multipleSelection", "mouseDragSelect", "mode", "activation", "wrapAround", "skipChildren", "multipleCellSelectOnClick", "touchDragSelect", "persist", "allowMultipleRangeSelection"],
            outputs: ["rowSelectionChanging", "rowSelectionChanged", "cellSelectionChanging", "cellSelectionChanged", "activeCellChanging", "activeCellChanged", "activeRowChanging", "activeRowChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridSelectionFeature);
    return IgGridSelectionFeature;
}(feature_1.Feature));
exports.IgGridSelectionFeature = IgGridSelectionFeature;
//# sourceMappingURL=iggridselection.directive.js.map