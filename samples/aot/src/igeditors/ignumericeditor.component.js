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
var igeditorbase_1 = require("./igeditorbase");
var forms_1 = require("@angular/forms");
var IgNumericEditorComponent = /** @class */ (function (_super) {
    __extends(IgNumericEditorComponent, _super);
    function IgNumericEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets/Sets editor value.
     *
     * @param newValue     New editor value.
     */
    /**
         * Gets/Sets editor value.
         *
         * @param newValue     New editor value.
         */
    IgNumericEditorComponent.prototype.value = /**
         * Gets/Sets editor value.
         *
         * @param newValue     New editor value.
         */
    function (newValue) { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param number     The text to search for.
     */
    /**
         * Finds index of list item by text that matches with the search parameters.
         *
         * @param number     The text to search for.
         */
    IgNumericEditorComponent.prototype.findListItemIndex = /**
         * Finds index of list item by text that matches with the search parameters.
         *
         * @param number     The text to search for.
         */
    function (number) { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectedText = function () { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectionStart = function () { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectionEnd = function () { return; };
    ;
    /**
     * Increments value in editor according to the parameter.
     *
     * @param delta     Increments value.
     */
    /**
         * Increments value in editor according to the parameter.
         *
         * @param delta     Increments value.
         */
    IgNumericEditorComponent.prototype.spinUp = /**
         * Increments value in editor according to the parameter.
         *
         * @param delta     Increments value.
         */
    function (delta) { return; };
    ;
    /**
     * Decrements value in editor according to the parameter.
     *
     * @param delta     Decrement value.
     */
    /**
         * Decrements value in editor according to the parameter.
         *
         * @param delta     Decrement value.
         */
    IgNumericEditorComponent.prototype.spinDown = /**
         * Decrements value in editor according to the parameter.
         *
         * @param delta     Decrement value.
         */
    function (delta) { return; };
    ;
    /**
     * Moves the hovered index to the item that appears above the current one in the list.
     */
    /**
         * Moves the hovered index to the item that appears above the current one in the list.
         */
    IgNumericEditorComponent.prototype.selectListIndexUp = /**
         * Moves the hovered index to the item that appears above the current one in the list.
         */
    function () { return; };
    ;
    /**
     * Moves the hovered index to the item that appears above the current one in the list.
     */
    /**
         * Moves the hovered index to the item that appears above the current one in the list.
         */
    IgNumericEditorComponent.prototype.selectListIndexDown = /**
         * Moves the hovered index to the item that appears above the current one in the list.
         */
    function () { return; };
    ;
    /**
     * Gets current regional.
     */
    /**
         * Gets current regional.
         */
    IgNumericEditorComponent.prototype.getRegionalOption = /**
         * Gets current regional.
         */
    function () { return; };
    ;
    IgNumericEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-numeric-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "negativeSign", "negativePattern", "decimalSeparator", "groupSeparator", "groups", "maxDecimals", "minDecimals", "dataMode", "minValue", "maxValue", "spinDelta", "scientificFormat"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
                },] },
    ];
    /** @nocollapse */
    IgNumericEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgNumericEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgNumericEditorComponent = IgNumericEditorComponent;
//# sourceMappingURL=ignumericeditor.component.js.map