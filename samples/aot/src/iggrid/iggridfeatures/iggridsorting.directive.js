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
    /**
         * Sorts the data in a grid column  and updates the UI.
         *
         * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared.
         * @param direction     Specifies sorting direction (ascending or descending)
         * @param header
         */
    IgGridSortingFeature.prototype.sortColumn = /**
         * Sorts the data in a grid column  and updates the UI.
         *
         * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column which we want to sort. If the mode is multiple, previous sorting states are not cleared.
         * @param direction     Specifies sorting direction (ascending or descending)
         * @param header
         */
    function (index, direction, header) { return; };
    ;
    /**
     * Sorts the data in grid columns and updates the UI.\
     */
    /**
         * Sorts the data in grid columns and updates the UI.\
         */
    IgGridSortingFeature.prototype.sortMultiple = /**
         * Sorts the data in grid columns and updates the UI.\
         */
    function () { return; };
    ;
    /**
     * Removes current sorting(for all sorted columns) and updates the UI.
     */
    /**
         * Removes current sorting(for all sorted columns) and updates the UI.
         */
    IgGridSortingFeature.prototype.clearSorting = /**
         * Removes current sorting(for all sorted columns) and updates the UI.
         */
    function () { return; };
    ;
    /**
     * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
     *
     * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
     * @param header     - if specified client events should be fired
     */
    /**
         * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
         *
         * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
         * @param header     - if specified client events should be fired
         */
    IgGridSortingFeature.prototype.unsortColumn = /**
         * Removes sorting for the grid column with the specified columnKey/columnIndex and updates the UI.
         *
         * @param index     Column key (string) or index (number) - for multi-row grid only column key can be used. Specifies the column for which we want to remove sorting. If the mode is multiple, previous sorting states are not cleared.
         * @param header     - if specified client events should be fired
         */
    function (index, header) { return; };
    ;
    /**
     * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
     */
    /**
         * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
         */
    IgGridSortingFeature.prototype.destroy = /**
         * Destroys the sorting feature. Unbinds events, removes added sorting elements, etc.
         */
    function () { return; };
    ;
    /**
     * Opens the multiple sorting dialog.
     */
    /**
         * Opens the multiple sorting dialog.
         */
    IgGridSortingFeature.prototype.openMultipleSortingDialog = /**
         * Opens the multiple sorting dialog.
         */
    function () { return; };
    ;
    /**
     * Closes the multiple sorting dialog.
     */
    /**
         * Closes the multiple sorting dialog.
         */
    IgGridSortingFeature.prototype.closeMultipleSortingDialog = /**
         * Closes the multiple sorting dialog.
         */
    function () { return; };
    ;
    /**
     * Renders content of multiple sorting dialog - sorted and unsorted columns.
     *
     * @param isToCallEvents
     */
    /**
         * Renders content of multiple sorting dialog - sorted and unsorted columns.
         *
         * @param isToCallEvents
         */
    IgGridSortingFeature.prototype.renderMultipleSortingDialogContent = /**
         * Renders content of multiple sorting dialog - sorted and unsorted columns.
         *
         * @param isToCallEvents
         */
    function (isToCallEvents) { return; };
    ;
    /**
     * Remove clear button for multiple sorting dialog
     */
    /**
         * Remove clear button for multiple sorting dialog
         */
    IgGridSortingFeature.prototype.removeDialogClearButton = /**
         * Remove clear button for multiple sorting dialog
         */
    function () { return; };
    ;
    IgGridSortingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'sorting',
                    inputs: ["disabled", "create", "type", "caseSensitive", "applySortedColumnCss", "sortUrlKey", "sortUrlKeyAscValue", "sortUrlKeyDescValue", "mode", "customSortFunction", "firstSortDirection", "sortedColumnTooltip", "modalDialogSortOnClick", "modalDialogSortByButtonText", "modalDialogResetButtonLabel", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUnsort", "modalDialogWidth", "modalDialogHeight", "modalDialogAnimationDuration", "featureChooserText", "unsortedColumnTooltip", "columnSettings", "modalDialogCaptionText", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "featureChooserSortAsc", "featureChooserSortDesc", "persist", "sortingDialogContainment", "dialogWidget", "inherit"],
                    outputs: ["columnSorting", "columnSorted", "modalDialogOpening", "modalDialogOpened", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogSortingChanged", "modalDialogButtonUnsortClick", "modalDialogSortClick", "modalDialogButtonApplyClick", "modalDialogButtonResetClick"]
                },] },
    ];
    /** @nocollapse */
    IgGridSortingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridSortingFeature;
}(feature_1.Feature));
exports.IgGridSortingFeature = IgGridSortingFeature;
//# sourceMappingURL=iggridsorting.directive.js.map