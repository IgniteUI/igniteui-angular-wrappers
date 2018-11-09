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
var IgGridFilteringFeature = /** @class */ (function (_super) {
    __extends(IgGridFilteringFeature, _super);
    function IgGridFilteringFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the filtering widget - remove fitler row, unbinds events, returns the grid to its previous state.
     */
    IgGridFilteringFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the count of data records that match filtering conditions
     */
    IgGridFilteringFeature.prototype.getFilteringMatchesCount = function () { return; };
    ;
    /**
     * Toggle filter row when mode is simple or [advancedModeEditorsVisible](ui.iggridfiltering#options:advancedModeEditorsVisible) is true. Otherwise show/hide advanced dialog.
     *
     * @param event     Column key
     */
    IgGridFilteringFeature.prototype.toggleFilterRowByFeatureChooser = function (event) { return; };
    ;
    /**
     * Applies filtering programmatically and updates the UI by default.
     *
     * @param expressions     An array of filtering expressions, each one having the format {fieldName: , expr: , cond: , logic: } where  fieldName is the key of the column, expr is the actual expression string with which we would like to filter, logic is 'AND' or 'OR', and cond is one of the following strings: "equals", "doesNotEqual", "contains", "doesNotContain", "greaterThan", "lessThan", "greaterThanOrEqualTo", "lessThanOrEqualTo", "true", "false", "null", "notNull", "empty", "notEmpty", "startsWith", "endsWith", "today", "yesterday", "on", "notOn", "thisMonth", "lastMonth", "nextMonth", "before", "after", "thisYear", "lastYear", "nextYear". The difference between the empty and null filtering conditions is that empty includes null, NaN, and undefined, as well as the empty string.
     * @param updateUI     specifies whether the filter row should be also updated once the grid is filtered
     * @param addedFromAdvanced
     */
    IgGridFilteringFeature.prototype.filter = function (expressions, updateUI, addedFromAdvanced) { return; };
    ;
    /**
     * Check whether filterCondition requires or not filtering expression - e.g. if filterCondition is "lastMonth", "thisMonth", "null", "notNull", "true", "false", etc. then filtering expression is NOT required
     *
     * @param filterCondition    filtering condition - e.g. "true", "false",  "yesterday", "empty", "null", etc.
     */
    IgGridFilteringFeature.prototype.requiresFilteringExpression = function (filterCondition) { return; };
    ;
    IgGridFilteringFeature = __decorate([
        core_1.Directive({
            selector: 'filtering',
            inputs: ["disabled", "create", "caseSensitive", "filterSummaryAlwaysVisible", "renderFC", "filterSummaryTemplate", "filterDropDownAnimations", "filterDropDownAnimationDuration", "filterDropDownWidth", "filterDropDownHeight", "filterExprUrlKey", "filterDropDownItemIcons", "columnSettings", "type", "filterDelay", "mode", "advancedModeEditorsVisible", "advancedModeHeaderButtonLocation", "filterDialogWidth", "filterDialogHeight", "filterDialogFilterDropDownDefaultWidth", "filterDialogExprInputDefaultWidth", "filterDialogColumnDropDownDefaultWidth", "renderFilterButton", "filterButtonLocation", "nullTexts", "labels", "tooltipTemplate", "filterDialogAddConditionTemplate", "filterDialogAddConditionDropDownTemplate", "filterDialogFilterTemplate", "filterDialogFilterConditionTemplate", "filterDialogAddButtonWidth", "filterDialogOkCancelButtonWidth", "filterDialogMaxFilterCount", "filterDialogContainment", "showEmptyConditions", "showNullConditions", "featureChooserText", "featureChooserTextHide", "featureChooserTextAdvancedFilter", "dialogWidget", "persist", "inherit"],
            outputs: ["dataFiltering", "dataFiltered", "dropDownOpening", "dropDownOpened", "dropDownClosing", "dropDownClosed", "filterDialogOpening", "filterDialogOpened", "filterDialogMoving", "filterDialogFilterAdding", "filterDialogFilterAdded", "filterDialogClosing", "filterDialogClosed", "filterDialogContentsRendering", "filterDialogContentsRendered", "filterDialogFiltering"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridFilteringFeature);
    return IgGridFilteringFeature;
}(feature_1.Feature));
exports.IgGridFilteringFeature = IgGridFilteringFeature;
//# sourceMappingURL=iggridfiltering.directive.js.map