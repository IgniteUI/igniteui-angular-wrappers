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
var IgGridGroupByFeature = /** @class */ (function (_super) {
    __extends(IgGridGroupByFeature, _super);
    function IgGridGroupByFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Open groupby modal dialog
     */
    /**
         * Open groupby modal dialog
         */
    IgGridGroupByFeature.prototype.openGroupByDialog = /**
         * Open groupby modal dialog
         */
    function () { return; };
    ;
    /**
     * Close groupby modal dialog
     */
    /**
         * Close groupby modal dialog
         */
    IgGridGroupByFeature.prototype.closeGroupByDialog = /**
         * Close groupby modal dialog
         */
    function () { return; };
    ;
    /**
     * Render groupby modal dialog and its content
     */
    /**
         * Render groupby modal dialog and its content
         */
    IgGridGroupByFeature.prototype.renderGroupByModalDialog = /**
         * Render groupby modal dialog and its content
         */
    function () { return; };
    ;
    /**
     * Open layouts dropdown
     */
    /**
         * Open layouts dropdown
         */
    IgGridGroupByFeature.prototype.openDropDown = /**
         * Open layouts dropdown
         */
    function () { return; };
    ;
    /**
     * Close layouts dropdown
     */
    /**
         * Close layouts dropdown
         */
    IgGridGroupByFeature.prototype.closeDropDown = /**
         * Close layouts dropdown
         */
    function () { return; };
    ;
    /**
     * Check whether column with specified key and layout is grouped
     *
     * @param key    key of the column
     * @param layout    layout name
     */
    /**
         * Check whether column with specified key and layout is grouped
         *
         * @param key    key of the column
         * @param layout    layout name
         */
    IgGridGroupByFeature.prototype.checkColumnIsGrouped = /**
         * Check whether column with specified key and layout is grouped
         *
         * @param key    key of the column
         * @param layout    layout name
         */
    function (key, layout) { return; };
    ;
    /**
     * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
     *
     * @param data    data (sorted by colKey) that is used to get the records from.
     * @param colKey    key of the column for which grouping will be applied.
     * @param idval    value of the column by which grouping will be applied.
     */
    /**
         * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
         *
         * @param data    data (sorted by colKey) that is used to get the records from.
         * @param colKey    key of the column for which grouping will be applied.
         * @param idval    value of the column by which grouping will be applied.
         */
    IgGridGroupByFeature.prototype.getGroupedData = /**
         * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
         *
         * @param data    data (sorted by colKey) that is used to get the records from.
         * @param colKey    key of the column for which grouping will be applied.
         * @param idval    value of the column by which grouping will be applied.
         */
    function (data, colKey, idval) { return; };
    ;
    /**
     * Adds a column to the group by columns list, executes the group by operation and updates the view.
     */
    /**
         * Adds a column to the group by columns list, executes the group by operation and updates the view.
         */
    IgGridGroupByFeature.prototype.groupByColumns = /**
         * Adds a column to the group by columns list, executes the group by operation and updates the view.
         */
    function () { return; };
    ;
    /**
     * Groups by a column
     *
     * @param key    Column Key - group by the column with the specified key
     * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
     * @param sortingDirection    if not set it is taken from option defaultSortingDirection
     */
    /**
         * Groups by a column
         *
         * @param key    Column Key - group by the column with the specified key
         * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
         * @param sortingDirection    if not set it is taken from option defaultSortingDirection
         */
    IgGridGroupByFeature.prototype.groupByColumn = /**
         * Groups by a column
         *
         * @param key    Column Key - group by the column with the specified key
         * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
         * @param sortingDirection    if not set it is taken from option defaultSortingDirection
         */
    function (key, layout, sortingDirection) { return; };
    ;
    /**
     * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
     *
     * @param key    Column Key - ungroup by the column with the specified key
     * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
     */
    /**
         * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
         *
         * @param key    Column Key - ungroup by the column with the specified key
         * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
         */
    IgGridGroupByFeature.prototype.ungroupByColumn = /**
         * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
         *
         * @param key    Column Key - ungroup by the column with the specified key
         * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
         */
    function (key, layout) { return; };
    ;
    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    /**
         * Expand group row with specified id
         *
         * @param rowId    data-id attribute of the group row in the DOM
         */
    IgGridGroupByFeature.prototype.expand = /**
         * Expand group row with specified id
         *
         * @param rowId    data-id attribute of the group row in the DOM
         */
    function (rowId) { return; };
    ;
    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    /**
         * Expand group row with specified id
         *
         * @param rowId    data-id attribute of the group row in the DOM
         */
    IgGridGroupByFeature.prototype.collapse = /**
         * Expand group row with specified id
         *
         * @param rowId    data-id attribute of the group row in the DOM
         */
    function (rowId) { return; };
    ;
    /**
     * Clears the group by columns list and updates the view.
     */
    /**
         * Clears the group by columns list and updates the view.
         */
    IgGridGroupByFeature.prototype.ungroupAll = /**
         * Clears the group by columns list and updates the view.
         */
    function () { return; };
    ;
    /**
     * Destroys the group by feature object.
     */
    /**
         * Destroys the group by feature object.
         */
    IgGridGroupByFeature.prototype.destroy = /**
         * Destroys the group by feature object.
         */
    function () { return; };
    ;
    IgGridGroupByFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'group-by',
                    inputs: ["disabled", "create", "groupByAreaVisibility", "initialExpand", "emptyGroupByAreaContent", "emptyGroupByAreaContentSelectColumns", "expansionIndicatorVisibility", "groupByLabelWidth", "labelDragHelperOpacity", "indentation", "defaultSortingDirection", "groupedColumns", "resultResponseKey", "groupedRowTextTemplate", "type", "groupByUrlKey", "groupByUrlKeyAscValue", "groupByUrlKeyDescValue", "summarySettings", "columnSettings", "expandTooltip", "collapseTooltip", "removeButtonTooltip", "modalDialogGroupByOnClick", "modalDialogGroupByButtonText", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUngroup", "modalDialogCaptionText", "modalDialogDropDownLabel", "modalDialogRootLevelHierarchicalGrid", "modalDialogDropDownButtonCaption", "modalDialogClearAllButtonLabel", "emptyGroupByAreaContentSelectColumnsCaption", "modalDialogDropDownWidth", "modalDialogDropDownAreaWidth", "modalDialogAnimationDuration", "modalDialogWidth", "modalDialogHeight", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "useGridColumnFormatter", "persist", "groupByDialogContainment", "dialogWidget", "inherit"],
                    outputs: ["groupedColumnsChanging", "groupedColumnsChanged", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogOpening", "modalDialogOpened", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogButtonApplyClick", "modalDialogButtonResetClick", "modalDialogGroupingColumn", "modalDialogGroupColumn", "modalDialogUngroupingColumn", "modalDialogUngroupColumn", "modalDialogSortGroupedColumn"]
                },] },
    ];
    /** @nocollapse */
    IgGridGroupByFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridGroupByFeature;
}(feature_1.Feature));
exports.IgGridGroupByFeature = IgGridGroupByFeature;
//# sourceMappingURL=iggridgroupby.directive.js.map