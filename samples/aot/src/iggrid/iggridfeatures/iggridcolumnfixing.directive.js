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
var IgGridColumnFixingFeature = /** @class */ (function (_super) {
    __extends(IgGridColumnFixingFeature, _super);
    function IgGridColumnFixingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Unfixes a column by specified column identifier - column key or column index.
     *
     * @param colIdentifier    An identifier of the column to be unfixed - column index or column key.
     * @param target    Key of the column where the unfixed column should move to.
     * @param after    Specifies where the unfixed column should be rendered after or before the target column. This parameter is disregarded if there is no target column specified.
     */
    /**
         * Unfixes a column by specified column identifier - column key or column index.
         *
         * @param colIdentifier    An identifier of the column to be unfixed - column index or column key.
         * @param target    Key of the column where the unfixed column should move to.
         * @param after    Specifies where the unfixed column should be rendered after or before the target column. This parameter is disregarded if there is no target column specified.
         */
    IgGridColumnFixingFeature.prototype.unfixColumn = /**
         * Unfixes a column by specified column identifier - column key or column index.
         *
         * @param colIdentifier    An identifier of the column to be unfixed - column index or column key.
         * @param target    Key of the column where the unfixed column should move to.
         * @param after    Specifies where the unfixed column should be rendered after or before the target column. This parameter is disregarded if there is no target column specified.
         */
    function (colIdentifier, target, after) { return; };
    ;
    /**
     * Checks whether the heights of fixed and unfixed tables are equal - if not sync them. Similar check is made for heights of table rows.
     */
    /**
         * Checks whether the heights of fixed and unfixed tables are equal - if not sync them. Similar check is made for heights of table rows.
         */
    IgGridColumnFixingFeature.prototype.checkAndSyncHeights = /**
         * Checks whether the heights of fixed and unfixed tables are equal - if not sync them. Similar check is made for heights of table rows.
         */
    function () { return; };
    ;
    /**
     * If the 'check' argument is set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. Similar check is made for heights of table rows. If the clearRowsHeights argument is set to true, clears rows heights before syncing them.
     *
     * @param check    If set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. If this argument is set to false sync is performed regardless of the current heights.
     * @param clearRowsHeights    Clears row heigths for all visible rows.
     */
    /**
         * If the 'check' argument is set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. Similar check is made for heights of table rows. If the clearRowsHeights argument is set to true, clears rows heights before syncing them.
         *
         * @param check    If set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. If this argument is set to false sync is performed regardless of the current heights.
         * @param clearRowsHeights    Clears row heigths for all visible rows.
         */
    IgGridColumnFixingFeature.prototype.syncHeights = /**
         * If the 'check' argument is set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. Similar check is made for heights of table rows. If the clearRowsHeights argument is set to true, clears rows heights before syncing them.
         *
         * @param check    If set to true, checks whether the heights of fixed and unfixed tables are equal, if not sync them. If this argument is set to false sync is performed regardless of the current heights.
         * @param clearRowsHeights    Clears row heigths for all visible rows.
         */
    function (check, clearRowsHeights) { return; };
    ;
    /**
     * Returns whether the column with the specified key is a column group header, when the [multi-column headers](http://www.igniteui.com/help/iggrid-multicolumnheaders-landingpage) feature is used.
     *
     * @param colKey    The key of the column to perform the check for.
     */
    /**
         * Returns whether the column with the specified key is a column group header, when the [multi-column headers](http://www.igniteui.com/help/iggrid-multicolumnheaders-landingpage) feature is used.
         *
         * @param colKey    The key of the column to perform the check for.
         */
    IgGridColumnFixingFeature.prototype.isGroupHeader = /**
         * Returns whether the column with the specified key is a column group header, when the [multi-column headers](http://www.igniteui.com/help/iggrid-multicolumnheaders-landingpage) feature is used.
         *
         * @param colKey    The key of the column to perform the check for.
         */
    function (colKey) { return; };
    ;
    /**
     * Checks whether column fixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the unfixed area.
     *
     * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
     */
    /**
         * Checks whether column fixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the unfixed area.
         *
         * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
         */
    IgGridColumnFixingFeature.prototype.checkFixingAllowed = /**
         * Checks whether column fixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the unfixed area.
         *
         * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
         */
    function (columns) { return; };
    ;
    /**
     * Checks whether unfixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the fixed area.
     *
     * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
     */
    /**
         * Checks whether unfixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the fixed area.
         *
         * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
         */
    IgGridColumnFixingFeature.prototype.checkUnfixingAllowed = /**
         * Checks whether unfixing is allowed for the specified columns. It should not be allowed if there is only one visible column in the fixed area.
         *
         * @param columns    Array of columns and/or column identifiers - could be column indexes, column keys, column object or mixed.
         */
    function (columns) { return; };
    ;
    /**
     * Fixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
     */
    /**
         * Fixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
         */
    IgGridColumnFixingFeature.prototype.fixNonDataColumns = /**
         * Fixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
         */
    function () { return; };
    ;
    /**
     * This function is deprecated - use function fixNonDataColumns.
     */
    /**
         * This function is deprecated - use function fixNonDataColumns.
         */
    IgGridColumnFixingFeature.prototype.fixDataSkippedColumns = /**
         * This function is deprecated - use function fixNonDataColumns.
         */
    function () { return; };
    ;
    /**
     * Unfixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
     */
    /**
         * Unfixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
         */
    IgGridColumnFixingFeature.prototype.unfixNonDataColumns = /**
         * Unfixes non-data columns (such as the row numbering column of row selectors) if any and if [fixingDirection](ui.iggridcolumnfixing#options:fixingDirection) is left. Does nothing if the non-data columns are already fixed.
         */
    function () { return; };
    ;
    /**
     * This function is deprecated - use function unfixNonDataColumns.
     */
    /**
         * This function is deprecated - use function unfixNonDataColumns.
         */
    IgGridColumnFixingFeature.prototype.unfixDataSkippedColumns = /**
         * This function is deprecated - use function unfixNonDataColumns.
         */
    function () { return; };
    ;
    /**
     * Unfixes all fixed columns.
     */
    /**
         * Unfixes all fixed columns.
         */
    IgGridColumnFixingFeature.prototype.unfixAllColumns = /**
         * Unfixes all fixed columns.
         */
    function () { return; };
    ;
    /**
     * Syncs rows heights between two collections of rows.
     *
     * @param $trs    An array of rows of the first(fixed/unfixed) container.
     * @param $anotherRows    An array of rows of the second(fixed/unfixed) container.
     */
    /**
         * Syncs rows heights between two collections of rows.
         *
         * @param $trs    An array of rows of the first(fixed/unfixed) container.
         * @param $anotherRows    An array of rows of the second(fixed/unfixed) container.
         */
    IgGridColumnFixingFeature.prototype.syncRowsHeights = /**
         * Syncs rows heights between two collections of rows.
         *
         * @param $trs    An array of rows of the first(fixed/unfixed) container.
         * @param $anotherRows    An array of rows of the second(fixed/unfixed) container.
         */
    function ($trs, $anotherRows) { return; };
    ;
    /**
     * Calculates widths of the fixed columns.
     *
     * @param fCols    Array of grid columns. If not set then the total width of the fixed columns are returned.
     * @param excludeNonDataColumns    If set to true do not calculate the width of non-data fixed columns (like the row selector row numbering column).
     * @param includeHidden    If set to true calculates width of the hidden fixed columns (their initial width before hiding).
     */
    /**
         * Calculates widths of the fixed columns.
         *
         * @param fCols    Array of grid columns. If not set then the total width of the fixed columns are returned.
         * @param excludeNonDataColumns    If set to true do not calculate the width of non-data fixed columns (like the row selector row numbering column).
         * @param includeHidden    If set to true calculates width of the hidden fixed columns (their initial width before hiding).
         */
    IgGridColumnFixingFeature.prototype.getWidthOfFixedColumns = /**
         * Calculates widths of the fixed columns.
         *
         * @param fCols    Array of grid columns. If not set then the total width of the fixed columns are returned.
         * @param excludeNonDataColumns    If set to true do not calculate the width of non-data fixed columns (like the row selector row numbering column).
         * @param includeHidden    If set to true calculates width of the hidden fixed columns (their initial width before hiding).
         */
    function (fCols, excludeNonDataColumns, includeHidden) { return; };
    ;
    /**
     * Destroys the column fixing widget
     */
    /**
         * Destroys the column fixing widget
         */
    IgGridColumnFixingFeature.prototype.destroy = /**
         * Destroys the column fixing widget
         */
    function () { return; };
    ;
    IgGridColumnFixingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'column-fixing',
                    inputs: ["disabled", "create", "headerFixButtonText", "headerUnfixButtonText", "showFixButtons", "syncRowHeights", "scrollDelta", "fixingDirection", "columnSettings", "featureChooserTextFixedColumn", "featureChooserTextUnfixedColumn", "minimalVisibleAreaWidth", "fixNondataColumns", "populateDataRowsAttributes"],
                    outputs: ["columnFixing", "columnFixed", "columnUnfixing", "columnUnfixed", "columnFixingRefused", "columnUnfixingRefused"]
                },] },
    ];
    /** @nocollapse */
    IgGridColumnFixingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridColumnFixingFeature;
}(feature_1.Feature));
exports.IgGridColumnFixingFeature = IgGridColumnFixingFeature;
//# sourceMappingURL=iggridcolumnfixing.directive.js.map