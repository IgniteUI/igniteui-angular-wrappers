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
var IgGridSummariesFeature = /** @class */ (function (_super) {
    __extends(IgGridSummariesFeature, _super);
    function IgGridSummariesFeature(el) {
        return _super.call(this, el) || this;
    }
    IgGridSummariesFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Returns whether summaries rows are hidden
     */
    /**
         * Returns whether summaries rows are hidden
         */
    IgGridSummariesFeature.prototype.isSummariesRowsHidden = /**
         * Returns whether summaries rows are hidden
         */
    function () { return; };
    ;
    /**
     * Calculate summaries
     */
    /**
         * Calculate summaries
         */
    IgGridSummariesFeature.prototype.calculateSummaries = /**
         * Calculate summaries
         */
    function () { return; };
    ;
    /**
     * Remove all summaries dropdown buttons.
     */
    /**
         * Remove all summaries dropdown buttons.
         */
    IgGridSummariesFeature.prototype.clearAllFooterIcons = /**
         * Remove all summaries dropdown buttons.
         */
    function () { return; };
    ;
    /**
     * Toggle drop down
     *
     * @param columnKey    toggle drop down for the column with the specified key
     * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
     */
    /**
         * Toggle drop down
         *
         * @param columnKey    toggle drop down for the column with the specified key
         * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
         */
    IgGridSummariesFeature.prototype.toggleDropDown = /**
         * Toggle drop down
         *
         * @param columnKey    toggle drop down for the column with the specified key
         * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
         */
    function (columnKey, event) { return; };
    ;
    /**
     * Show/Hide dialog
     *
     * @param $dialog     jQuery object representation of dropdown div element
     */
    /**
         * Show/Hide dialog
         *
         * @param $dialog     jQuery object representation of dropdown div element
         */
    IgGridSummariesFeature.prototype.showHideDialog = /**
         * Show/Hide dialog
         *
         * @param $dialog     jQuery object representation of dropdown div element
         */
    function ($dialog) { return; };
    ;
    /**
     * Toggle summaries rows
     *
     * @param isToShow    Specifies whether to show or not summaries
     * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
     */
    /**
         * Toggle summaries rows
         *
         * @param isToShow    Specifies whether to show or not summaries
         * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
         */
    IgGridSummariesFeature.prototype.toggleSummariesRows = /**
         * Toggle summaries rows
         *
         * @param isToShow    Specifies whether to show or not summaries
         * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
         */
    function (isToShow, isInternalCall) { return; };
    ;
    /**
     * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
     *
     * @param $checkbox     Specifies the jQuery object of the checkbox.
     */
    /**
         * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
         *
         * @param $checkbox     Specifies the jQuery object of the checkbox.
         */
    IgGridSummariesFeature.prototype.toggleCheckstate = /**
         * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
         *
         * @param $checkbox     Specifies the jQuery object of the checkbox.
         */
    function ($checkbox) { return; };
    ;
    /**
     * Select/Unselect specified checkbox
     *
     * @param $checkbox     Specifies the jQuery object for checkbox
     * @param isToSelect     Specify whether to select or not checkbox
     */
    /**
         * Select/Unselect specified checkbox
         *
         * @param $checkbox     Specifies the jQuery object for checkbox
         * @param isToSelect     Specify whether to select or not checkbox
         */
    IgGridSummariesFeature.prototype.selectCheckBox = /**
         * Select/Unselect specified checkbox
         *
         * @param $checkbox     Specifies the jQuery object for checkbox
         * @param isToSelect     Specify whether to select or not checkbox
         */
    function ($checkbox, isToSelect) { return; };
    ;
    /**
     * Summary calculate the whole data for the specified column key, columnMethods and dataType (used when datasource is remote and dataType is date)
     *
     * @param ck    ColumnKey
     * @param columnMethods    Array of column methods objects
     * @param data    Object which represents result
  represents dataType for the current column
     * @param dataType
     */
    /**
         * Summary calculate the whole data for the specified column key, columnMethods and dataType (used when datasource is remote and dataType is date)
         *
         * @param ck    ColumnKey
         * @param columnMethods    Array of column methods objects
         * @param data    Object which represents result
      represents dataType for the current column
         * @param dataType
         */
    IgGridSummariesFeature.prototype.calculateSummaryColumn = /**
         * Summary calculate the whole data for the specified column key, columnMethods and dataType (used when datasource is remote and dataType is date)
         *
         * @param ck    ColumnKey
         * @param columnMethods    Array of column methods objects
         * @param data    Object which represents result
      represents dataType for the current column
         * @param dataType
         */
    function (ck, columnMethods, data, dataType) { return; };
    ;
    /**
     * Return a JQUERY object which holds all summaries for all columns
     */
    /**
         * Return a JQUERY object which holds all summaries for all columns
         */
    IgGridSummariesFeature.prototype.summaryCollection = /**
         * Return a JQUERY object which holds all summaries for all columns
         */
    function () { return; };
    ;
    /**
     * Return a JQUERY object which holds all summaries for column with the specified column key
     *
     * @param columnKey
     */
    /**
         * Return a JQUERY object which holds all summaries for column with the specified column key
         *
         * @param columnKey
         */
    IgGridSummariesFeature.prototype.summariesFor = /**
         * Return a JQUERY object which holds all summaries for column with the specified column key
         *
         * @param columnKey
         */
    function (columnKey) { return; };
    ;
    IgGridSummariesFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'summaries',
                    inputs: ["disabled", "create", "type", "dialogButtonOKText", "dialogButtonCancelText", "calculateRenderMode", "featureChooserText", "featureChooserTextHide", "compactRenderingMode", "defaultDecimalDisplay", "showSummariesButton", "summariesResponseKey", "summaryExprUrlKey", "callee", "dropDownHeight", "dropDownWidth", "showDropDownButton", "summaryExecution", "dropDownDialogAnimationDuration", "emptyCellText", "summariesHeaderButtonTooltip", "resultTemplate", "isGridFormatter", "renderSummaryCellFunc", "columnSettings", "inherit"],
                    outputs: ["dropDownOpening", "dropDownOpened", "dropDownClosing", "dropDownClosed", "summariesCalculating", "summariesCalculated", "summariesMethodSelectionChanged", "summariesToggling", "summariesToggled", "dropDownOKClicked", "dropDownCancelClicked"]
                },] },
    ];
    /** @nocollapse */
    IgGridSummariesFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridSummariesFeature;
}(feature_1.Feature));
exports.IgGridSummariesFeature = IgGridSummariesFeature;
//# sourceMappingURL=iggridsummaries.directive.js.map