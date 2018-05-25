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
var IgGridFilteringFeature = /** @class */ (function (_super) {
    __extends(IgGridFilteringFeature, _super);
    function IgGridFilteringFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
     */
    /**
         * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
         */
    IgGridFilteringFeature.prototype.destroy = /**
         * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
         */
    function () { return; };
    ;
    /**
     * Returns the count of data records that match filtering conditions
     */
    /**
         * Returns the count of data records that match filtering conditions
         */
    IgGridFilteringFeature.prototype.getFilteringMatchesCount = /**
         * Returns the count of data records that match filtering conditions
         */
    function () { return; };
    ;
    /**
     * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
     *
     * @param event     Column key
     */
    /**
         * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
         *
         * @param event     Column key
         */
    IgGridFilteringFeature.prototype.toggleFilterRowByFeatureChooser = /**
         * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
         *
         * @param event     Column key
         */
    function (event) { return; };
    ;
    /**
     * Applies filtering programmatically and updates the UI by default.
     *
     * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
     * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
     * @param addedFromAdvanced
     */
    /**
         * Applies filtering programmatically and updates the UI by default.
         *
         * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
         * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
         * @param addedFromAdvanced
         */
    IgGridFilteringFeature.prototype.filter = /**
         * Applies filtering programmatically and updates the UI by default.
         *
         * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
         * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
         * @param addedFromAdvanced
         */
    function (expressions, updateUI, addedFromAdvanced) { return; };
    ;
    /**
     * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
     *
     * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
     */
    /**
         * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
         *
         * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
         */
    IgGridFilteringFeature.prototype.requiresFilteringExpression = /**
         * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
         *
         * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
         */
    function (filterCondition) { return; };
    ;
    IgGridFilteringFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'filtering',
                    inputs: ["disabled", "create", "caseSensitive", "filterSummaryAlwaysVisible", "renderFC", "filterSummaryTemplate", "filterDropDownAnimations", "filterDropDownAnimationDuration", "filterDropDownWidth", "filterDropDownHeight", "filterExprUrlKey", "filterDropDownItemIcons", "columnSettings", "type", "filterDelay", "mode", "advancedModeEditorsVisible", "advancedModeHeaderButtonLocation", "filterDialogWidth", "filterDialogHeight", "filterDialogFilterDropDownDefaultWidth", "filterDialogExprInputDefaultWidth", "filterDialogColumnDropDownDefaultWidth", "renderFilterButton", "filterButtonLocation", "nullTexts", "labels", "tooltipTemplate", "filterDialogAddConditionTemplate", "filterDialogAddConditionDropDownTemplate", "filterDialogFilterTemplate", "filterDialogFilterConditionTemplate", "filterDialogAddButtonWidth", "filterDialogOkCancelButtonWidth", "filterDialogMaxFilterCount", "filterDialogContainment", "showEmptyConditions", "showNullConditions", "featureChooserText", "featureChooserTextHide", "featureChooserTextAdvancedFilter", "dialogWidget", "persist", "inherit"],
                    outputs: ["dataFiltering", "dataFiltered", "dropDownOpening", "dropDownOpened", "dropDownClosing", "dropDownClosed", "filterDialogOpening", "filterDialogOpened", "filterDialogMoving", "filterDialogFilterAdding", "filterDialogFilterAdded", "filterDialogClosing", "filterDialogClosed", "filterDialogContentsRendering", "filterDialogContentsRendered", "filterDialogFiltering"]
                },] },
    ];
    /** @nocollapse */
    IgGridFilteringFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridFilteringFeature;
}(feature_1.Feature));
exports.IgGridFilteringFeature = IgGridFilteringFeature;
//# sourceMappingURL=iggridfiltering.directive.js.map