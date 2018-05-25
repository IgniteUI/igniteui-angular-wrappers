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
var IgGridHidingFeature = /** @class */ (function (_super) {
    __extends(IgGridHidingFeature, _super);
    function IgGridHidingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the hiding widget
     */
    /**
         * Destroys the hiding widget
         */
    IgGridHidingFeature.prototype.destroy = /**
         * Destroys the hiding widget
         */
    function () { return; };
    ;
    /**
     * Shows the Column Chooser dialog. If it is visible the method does nothing.
     */
    /**
         * Shows the Column Chooser dialog. If it is visible the method does nothing.
         */
    IgGridHidingFeature.prototype.showColumnChooser = /**
         * Shows the Column Chooser dialog. If it is visible the method does nothing.
         */
    function () { return; };
    ;
    /**
     * Hides the Column Chooser dialog. If it is not visible the method does nothing.
     */
    /**
         * Hides the Column Chooser dialog. If it is not visible the method does nothing.
         */
    IgGridHidingFeature.prototype.hideColumnChooser = /**
         * Hides the Column Chooser dialog. If it is not visible the method does nothing.
         */
    function () { return; };
    ;
    /**
     * Shows a hidden column. If the column is not hidden the method does nothing.
     * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
     * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
     * @param callback    Specifies a custom function to be called when the column(s) is shown(optional)
     */
    /**
         * Shows a hidden column. If the column is not hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
         * @param callback    Specifies a custom function to be called when the column(s) is shown(optional)
         */
    IgGridHidingFeature.prototype.showColumn = /**
         * Shows a hidden column. If the column is not hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
         * @param callback    Specifies a custom function to be called when the column(s) is shown(optional)
         */
    function (column, isMultiColumnHeader, callback) { return; };
    ;
    /**
     * Hides a visible column. If the column is hidden the method does nothing.
     * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
     * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
     * @param callback    Specifies a custom function to be called when the column is hidden(optional)
     */
    /**
         * Hides a visible column. If the column is hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
         * @param callback    Specifies a custom function to be called when the column is hidden(optional)
         */
    IgGridHidingFeature.prototype.hideColumn = /**
         * Hides a visible column. If the column is hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param column    An identifier for the column. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param isMultiColumnHeader    If it is true then the column is of type multicolumnheader. An identifier for the column should be of type string.
         * @param callback    Specifies a custom function to be called when the column is hidden(optional)
         */
    function (column, isMultiColumnHeader, callback) { return; };
    ;
    /**
     * Hides visible columns specified by the array. If the column is hidden the method does nothing.
     * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
     * @param callback    Specifies a custom function to be called when all columns are hidden(optional)
     */
    /**
         * Hides visible columns specified by the array. If the column is hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param callback    Specifies a custom function to be called when all columns are hidden(optional)
         */
    IgGridHidingFeature.prototype.hideMultiColumns = /**
         * Hides visible columns specified by the array. If the column is hidden the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param callback    Specifies a custom function to be called when all columns are hidden(optional)
         */
    function (columns, callback) { return; };
    ;
    /**
     * Show visible columns specified by the array. If the column is shown the method does nothing.
     * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     *
     * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
     * @param callback    Specifies a custom function to be called when all columns are shown(optional)
     */
    /**
         * Show visible columns specified by the array. If the column is shown the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param callback    Specifies a custom function to be called when all columns are shown(optional)
         */
    IgGridHidingFeature.prototype.showMultiColumns = /**
         * Show visible columns specified by the array. If the column is shown the method does nothing.
         * 			Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         *
         * @param columns    An array of identifiers for the columns. If a number is provided it will be used as a column index else if a strings is provided it will be used as a column key.
         * @param callback    Specifies a custom function to be called when all columns are shown(optional)
         */
    function (columns, callback) { return; };
    ;
    /**
     * Gets whether the reset button in the column chooser dialog is to be rendered or not.
     */
    /**
         * Gets whether the reset button in the column chooser dialog is to be rendered or not.
         */
    IgGridHidingFeature.prototype.isToRenderButtonReset = /**
         * Gets whether the reset button in the column chooser dialog is to be rendered or not.
         */
    function () { return; };
    ;
    /**
     * Reset hidden/shown column to initial state of dialog(when it is opened)
     */
    /**
         * Reset hidden/shown column to initial state of dialog(when it is opened)
         */
    IgGridHidingFeature.prototype.resetHidingColumnChooser = /**
         * Reset hidden/shown column to initial state of dialog(when it is opened)
         */
    function () { return; };
    ;
    /**
     * Renders the Reset button in the Column Chooser dialog.
     */
    /**
         * Renders the Reset button in the Column Chooser dialog.
         */
    IgGridHidingFeature.prototype.renderColumnChooserResetButton = /**
         * Renders the Reset button in the Column Chooser dialog.
         */
    function () { return; };
    ;
    /**
     * Remove Reset button in column chooser modal dialog
     */
    /**
         * Remove Reset button in column chooser modal dialog
         */
    IgGridHidingFeature.prototype.removeColumnChooserResetButton = /**
         * Remove Reset button in column chooser modal dialog
         */
    function () { return; };
    ;
    IgGridHidingFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'hiding',
                    inputs: ["disabled", "create", "columnSettings", "hiddenColumnIndicatorHeaderWidth", "columnChooserContainment", "columnChooserWidth", "columnChooserHeight", "dropDownAnimationDuration", "columnChooserCaptionText", "columnChooserDisplayText", "hiddenColumnIndicatorTooltipText", "columnHideText", "columnChooserShowText", "columnChooserHideText", "columnChooserHideOnClick", "columnChooserResetButtonLabel", "columnChooserAnimationDuration", "columnChooserButtonApplyText", "columnChooserButtonCancelText", "dialogWidget", "inherit"],
                    outputs: ["columnHiding", "columnHidingRefused", "columnShowingRefused", "multiColumnHiding", "columnHidden", "columnShowing", "columnShown", "columnChooserOpening", "columnChooserOpened", "columnChooserMoving", "columnChooserClosing", "columnChooserClosed", "columnChooserContentsRendering", "columnChooserContentsRendered", "columnChooserButtonApplyClick", "columnChooserButtonResetClick"]
                },] },
    ];
    /** @nocollapse */
    IgGridHidingFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridHidingFeature;
}(feature_1.Feature));
exports.IgGridHidingFeature = IgGridHidingFeature;
//# sourceMappingURL=iggridhiding.directive.js.map