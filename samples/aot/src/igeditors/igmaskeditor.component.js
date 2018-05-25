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
var IgMaskEditorComponent = /** @class */ (function (_super) {
    __extends(IgMaskEditorComponent, _super);
    function IgMaskEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets/Sets mask editor value.
     *
     * @param newValue     New mask editor value.
     */
    /**
         * Gets/Sets mask editor value.
         *
         * @param newValue     New mask editor value.
         */
    IgMaskEditorComponent.prototype.value = /**
         * Gets/Sets mask editor value.
         *
         * @param newValue     New mask editor value.
         */
    function (newValue) { return; };
    ;
    IgMaskEditorComponent.prototype.dropDownContainer = function () { return; };
    ;
    IgMaskEditorComponent.prototype.showDropDown = function () { return; };
    ;
    IgMaskEditorComponent.prototype.hideDropDown = function () { return; };
    ;
    IgMaskEditorComponent.prototype.dropDownButton = function () { return; };
    ;
    IgMaskEditorComponent.prototype.spinUpButton = function () { return; };
    ;
    IgMaskEditorComponent.prototype.spinDownButton = function () { return; };
    ;
    IgMaskEditorComponent.prototype.dropDownVisible = function () { return; };
    ;
    IgMaskEditorComponent.prototype.findListItemIndex = function () { return; };
    ;
    IgMaskEditorComponent.prototype.selectedListIndex = function () { return; };
    ;
    IgMaskEditorComponent.prototype.getSelectedListItem = function () { return; };
    ;
    IgMaskEditorComponent.prototype.spinUp = function () { return; };
    ;
    IgMaskEditorComponent.prototype.spinDown = function () { return; };
    ;
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    IgMaskEditorComponent.prototype.isValid = /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    function () { return; };
    ;
    IgMaskEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-mask-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
                },] },
    ];
    /** @nocollapse */
    IgMaskEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgMaskEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgMaskEditorComponent = IgMaskEditorComponent;
//# sourceMappingURL=igmaskeditor.component.js.map