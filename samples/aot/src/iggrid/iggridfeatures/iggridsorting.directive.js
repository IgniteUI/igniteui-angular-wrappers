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
var IgGridSortingFeature = /** @class */ (function (_super) {
    __extends(IgGridSortingFeature, _super);
    function IgGridSortingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Sorts the data in a grid column  and updates the UI.
     *
     * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared.
     * @param direction     Specifies sorting direction (ascending or descending)
     * @param header
     */
    IgGridSortingFeature.prototype.sortColumn = function (index, direction, header) { return; };
    ;
    /**
     * Sorts the data in grid columns and updates the UI.\
     */
    IgGridSortingFeature.prototype.sortMultiple = function () { return; };
    ;
    /**
     * Removes current sorting(for all sorted columns) and updates the UI.
     */
    IgGridSortingFeature.prototype.clearSorting = function () { return; };
    ;
    /**
     * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
     *
     * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
     * @param header     - if specified client events should be fired
     */
    IgGridSortingFeature.prototype.unsortColumn = function (index, header) { return; };
    ;
    /**
     * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
     */
    IgGridSortingFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Opens the multiple sorting dialog.
     */
    IgGridSortingFeature.prototype.openMultipleSortingDialog = function () { return; };
    ;
    /**
     * Closes the multiple sorting dialog.
     */
    IgGridSortingFeature.prototype.closeMultipleSortingDialog = function () { return; };
    ;
    /**
     * Renders content of multiple sorting dialog - sorted and unsorted columns.
     *
     * @param isToCallEvents
     */
    IgGridSortingFeature.prototype.renderMultipleSortingDialogContent = function (isToCallEvents) { return; };
    ;
    /**
     * Remove clear button for multiple sorting dialog
     */
    IgGridSortingFeature.prototype.removeDialogClearButton = function () { return; };
    ;
    IgGridSortingFeature = __decorate([
        core_1.Directive({
            selector: 'sorting',
            inputs: ["disabled", "create", "type", "caseSensitive", "applySortedColumnCss", "sortUrlKey", "sortUrlKeyAscValue", "sortUrlKeyDescValue", "mode", "customSortFunction", "firstSortDirection", "sortedColumnTooltip", "modalDialogSortOnClick", "modalDialogSortByButtonText", "modalDialogResetButtonLabel", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUnsort", "modalDialogWidth", "modalDialogHeight", "modalDialogAnimationDuration", "featureChooserText", "unsortedColumnTooltip", "columnSettings", "modalDialogCaptionText", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "featureChooserSortAsc", "featureChooserSortDesc", "persist", "sortingDialogContainment", "dialogWidget", "inherit"],
            outputs: ["columnSorting", "columnSorted", "modalDialogOpening", "modalDialogOpened", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogSortingChanged", "modalDialogButtonUnsortClick", "modalDialogSortClick", "modalDialogButtonApplyClick", "modalDialogButtonResetClick"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridSortingFeature);
    return IgGridSortingFeature;
}(feature_1.Feature));
exports.IgGridSortingFeature = IgGridSortingFeature;
//# sourceMappingURL=iggridsorting.directive.js.map