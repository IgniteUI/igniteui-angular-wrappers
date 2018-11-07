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
    IgGridSummariesFeature.prototype.isSummariesRowsHidden = function () { return; };
    ;
    /**
     * Calculate summaries
     */
    IgGridSummariesFeature.prototype.calculateSummaries = function () { return; };
    ;
    /**
     * Remove all summaries dropdown buttons.
     */
    IgGridSummariesFeature.prototype.clearAllFooterIcons = function () { return; };
    ;
    /**
     * Toggle drop down
     *
     * @param columnKey    toggle drop down for the column with the specified key
     * @param event    event object. Its data should contain current columnKey, isAnimating, buttonId
     */
    IgGridSummariesFeature.prototype.toggleDropDown = function (columnKey, event) { return; };
    ;
    /**
     * Show/Hide dialog
     *
     * @param $dialog     jQuery object representation of dropdown div element
     */
    IgGridSummariesFeature.prototype.showHideDialog = function ($dialog) { return; };
    ;
    /**
     * Toggle summaries rows
     *
     * @param isToShow    Specifies whether to show or not summaries
     * @param isInternalCall    Optional parameter.Specifies whether this function is called internally by the widget.
     */
    IgGridSummariesFeature.prototype.toggleSummariesRows = function (isToShow, isInternalCall) { return; };
    ;
    /**
     * Toggles the checkstate of a checkbox if checkboxMode is not set to off, otherwise does nothing.
     *
     * @param $checkbox     Specifies the jQuery object of the checkbox.
     */
    IgGridSummariesFeature.prototype.toggleCheckstate = function ($checkbox) { return; };
    ;
    /**
     * Select/Unselect specified checkbox
     *
     * @param $checkbox     Specifies the jQuery object for checkbox
     * @param isToSelect     Specify whether to select or not checkbox
     */
    IgGridSummariesFeature.prototype.selectCheckBox = function ($checkbox, isToSelect) { return; };
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
    IgGridSummariesFeature.prototype.calculateSummaryColumn = function (ck, columnMethods, data, dataType) { return; };
    ;
    /**
     * Return a JQUERY object which holds all summaries for all columns
     */
    IgGridSummariesFeature.prototype.summaryCollection = function () { return; };
    ;
    /**
     * Return a JQUERY object which holds all summaries for column with the specified column key
     *
     * @param columnKey
     */
    IgGridSummariesFeature.prototype.summariesFor = function (columnKey) { return; };
    ;
    IgGridSummariesFeature = __decorate([
        core_1.Directive({
            selector: 'summaries',
            inputs: ["disabled", "create", "type", "dialogButtonOKText", "dialogButtonCancelText", "calculateRenderMode", "featureChooserText", "featureChooserTextHide", "compactRenderingMode", "defaultDecimalDisplay", "showSummariesButton", "summariesResponseKey", "summaryExprUrlKey", "callee", "dropDownHeight", "dropDownWidth", "showDropDownButton", "summaryExecution", "dropDownDialogAnimationDuration", "emptyCellText", "summariesHeaderButtonTooltip", "resultTemplate", "isGridFormatter", "renderSummaryCellFunc", "columnSettings", "inherit"],
            outputs: ["dropDownOpening", "dropDownOpened", "dropDownClosing", "dropDownClosed", "summariesCalculating", "summariesCalculated", "summariesMethodSelectionChanged", "summariesToggling", "summariesToggled", "dropDownOKClicked", "dropDownCancelClicked"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridSummariesFeature);
    return IgGridSummariesFeature;
}(feature_1.Feature));
exports.IgGridSummariesFeature = IgGridSummariesFeature;
//# sourceMappingURL=iggridsummaries.directive.js.map