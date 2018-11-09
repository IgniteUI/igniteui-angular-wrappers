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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
     * @param newValue New editor value.
     */
    IgNumericEditorComponent.prototype.value = function (newValue) { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param number The text to search for.
     */
    IgNumericEditorComponent.prototype.findListItemIndex = function (number) { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectedText = function () { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectionStart = function () { return; };
    ;
    IgNumericEditorComponent.prototype.getSelectionEnd = function () { return; };
    ;
    /**
     * Increments value in editor according to the parameter or selects the previous item from the drop-down list if [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Increments value.
     */
    IgNumericEditorComponent.prototype.spinUp = function (delta) { return; };
    ;
    /**
     * Decrements value in editor according to the parameter selects the next item from the drop-down list if [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Decrement value.
     */
    IgNumericEditorComponent.prototype.spinDown = function (delta) { return; };
    ;
    /**
     * This method is deprecated in favor of [spinUp](ui.%%WidgetNameLowered%%#options:spinUp).
     */
    IgNumericEditorComponent.prototype.selectListIndexUp = function () { return; };
    ;
    /**
     * This method is deprecated in favor of [spinDown](ui.%%WidgetNameLowered%%#options:spinDown).
     */
    IgNumericEditorComponent.prototype.selectListIndexDown = function () { return; };
    ;
    /**
     * Gets current regional.
     */
    IgNumericEditorComponent.prototype.getRegionalOption = function () { return; };
    ;
    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.ignumericeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.ignumericeditor#options:regional) option setter
     */
    IgNumericEditorComponent.prototype.changeRegional = function () { return; };
    ;
    /**
     * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
     * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or [locale](ui.igtexteditor#options:locale) option setter
     */
    IgNumericEditorComponent.prototype.changeLocale = function () { return; };
    ;
    /**
     * Gets the visible text in the editor.
     */
    IgNumericEditorComponent.prototype.displayValue = function () { return; };
    ;
    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    IgNumericEditorComponent.prototype.dropDownContainer = function () { return; };
    ;
    /**
     * Shows the drop down list.
     */
    IgNumericEditorComponent.prototype.showDropDown = function () { return; };
    ;
    /**
     * Hides the drop down list.
     */
    IgNumericEditorComponent.prototype.hideDropDown = function () { return; };
    ;
    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    IgNumericEditorComponent.prototype.dropDownButton = function () { return; };
    ;
    /**
     * Returns if the drop-down list is visible.
     */
    IgNumericEditorComponent.prototype.dropDownVisible = function () { return; };
    ;
    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    IgNumericEditorComponent.prototype.clearButton = function () { return; };
    ;
    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    IgNumericEditorComponent.prototype.selectedListIndex = function (index) { return; };
    ;
    /**
     * Gets the selected list item.
     */
    IgNumericEditorComponent.prototype.getSelectedListItem = function () { return; };
    ;
    /**
     * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
     * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param string The string to be inserted.
     */
    IgNumericEditorComponent.prototype.insert = function (string) { return; };
    ;
    /**
     * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start Start of the selection.
     * @param end End of the selection.
     */
    IgNumericEditorComponent.prototype.select = function (start, end) { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    IgNumericEditorComponent.prototype.spinUpButton = function () { return; };
    ;
    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    IgNumericEditorComponent.prototype.spinDownButton = function () { return; };
    ;
    IgNumericEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-numeric-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "negativeSign", "negativePattern", "decimalSeparator", "groupSeparator", "groups", "maxDecimals", "minDecimals", "dataMode", "minValue", "maxValue", "spinDelta", "scientificFormat"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgNumericEditorComponent);
    return IgNumericEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgNumericEditorComponent = IgNumericEditorComponent;
//# sourceMappingURL=ignumericeditor.component.js.map