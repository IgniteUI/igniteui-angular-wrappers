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
var igeditorbase_1 = require("./igeditorbase");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var IgDateEditorComponent = /** @class */ (function (_super) {
    __extends(IgDateEditorComponent, _super);
    function IgDateEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets/Sets editor value.
     *
     * 				Note! This option doesn't use the displayInputFormat to extract the date
     *
     * @param newValue     New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
     */
    /**
         * Gets/Sets editor value.
         *
         * 				Note! This option doesn't use the displayInputFormat to extract the date
         *
         * @param newValue     New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
         */
    IgDateEditorComponent.prototype.value = /**
         * Gets/Sets editor value.
         *
         * 				Note! This option doesn't use the displayInputFormat to extract the date
         *
         * @param newValue     New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
         */
    function (newValue) { return; };
    ;
    /**
     * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
     * 			In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
     */
    /**
         * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
         * 			In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
         */
    IgDateEditorComponent.prototype.getSelectedDate = /**
         * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
         * 			In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
         */
    function () { return; };
    ;
    /**
     * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
     * 			In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
     *
     * @param date
     */
    /**
         * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
         * 			In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
         *
         * @param date
         */
    IgDateEditorComponent.prototype.selectDate = /**
         * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
         * 			In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
         *
         * @param date
         */
    function (date) { return; };
    ;
    /**
     * Increases the date or time period, depending on the current cursor position.
     *
     * @param delta     The increase delta.
     */
    /**
         * Increases the date or time period, depending on the current cursor position.
         *
         * @param delta     The increase delta.
         */
    IgDateEditorComponent.prototype.spinUp = /**
         * Increases the date or time period, depending on the current cursor position.
         *
         * @param delta     The increase delta.
         */
    function (delta) { return; };
    ;
    /**
     * Decreases the date or time period, depending on the current cursor position.
     *
     * @param delta     The decrease delta.
     */
    /**
         * Decreases the date or time period, depending on the current cursor position.
         *
         * @param delta     The decrease delta.
         */
    IgDateEditorComponent.prototype.spinDown = /**
         * Decreases the date or time period, depending on the current cursor position.
         *
         * @param delta     The decrease delta.
         */
    function (delta) { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    /**
         * Returns a reference to the spin up UI element of the editor.
         */
    IgDateEditorComponent.prototype.spinUpButton = /**
         * Returns a reference to the spin up UI element of the editor.
         */
    function () { return; };
    ;
    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    /**
         * Returns a reference to the spin down UI element of the editor.
         */
    IgDateEditorComponent.prototype.spinDownButton = /**
         * Returns a reference to the spin down UI element of the editor.
         */
    function () { return; };
    ;
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    IgDateEditorComponent.prototype.isValid = /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    function () { return; };
    ;
    IgDateEditorComponent.prototype.dropDownButton = function () { return; };
    ;
    IgDateEditorComponent.prototype.dropDownContainer = function () { return; };
    ;
    IgDateEditorComponent.prototype.dropDownVisible = function () { return; };
    ;
    IgDateEditorComponent.prototype.findListItemIndex = function () { return; };
    ;
    IgDateEditorComponent.prototype.getSelectedListItem = function () { return; };
    ;
    IgDateEditorComponent.prototype.selectedListIndex = function () { return; };
    ;
    IgDateEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-date-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar", "minValue", "maxValue", "dateDisplayFormat", "dateInputFormat", "spinDelta", "limitSpinToCurrentField", "enableUTCDates", "centuryThreshold", "yearShift"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
                },] },
    ];
    /** @nocollapse */
    IgDateEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgDateEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgDateEditorComponent = IgDateEditorComponent;
//# sourceMappingURL=igdateeditor.component.js.map