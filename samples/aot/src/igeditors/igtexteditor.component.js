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
var IgTextEditorComponent = /** @class */ (function (_super) {
    __extends(IgTextEditorComponent, _super);
    function IgTextEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
     * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or [locale](ui.igtexteditor#options:locale) option setter
     */
    IgTextEditorComponent.prototype.changeLocale = function () { return; };
    ;
    /**
     * Gets the visible text in the editor.
     */
    IgTextEditorComponent.prototype.displayValue = function () { return; };
    ;
    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    IgTextEditorComponent.prototype.dropDownContainer = function () { return; };
    ;
    /**
     * Shows the drop down list.
     */
    IgTextEditorComponent.prototype.showDropDown = function () { return; };
    ;
    /**
     * Hides the drop down list.
     */
    IgTextEditorComponent.prototype.hideDropDown = function () { return; };
    ;
    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    IgTextEditorComponent.prototype.dropDownButton = function () { return; };
    ;
    /**
     * Returns if the drop-down list is visible.
     */
    IgTextEditorComponent.prototype.dropDownVisible = function () { return; };
    ;
    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    IgTextEditorComponent.prototype.clearButton = function () { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param text The text to search for in the drop down list.
     * @param matchType The rule that is applied for searching the text.
     */
    IgTextEditorComponent.prototype.findListItemIndex = function (text, matchType) { return; };
    ;
    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    IgTextEditorComponent.prototype.selectedListIndex = function (index) { return; };
    ;
    /**
     * Gets the selected list item.
     */
    IgTextEditorComponent.prototype.getSelectedListItem = function () { return; };
    ;
    /**
     * Gets the selected text from the editor in edit mode. This can be done inside key event handlers, like keydown or keyup. This method can be used only when the editor is focused. If you invoke this method in display mode, when the editor input is blurred, the returned value will be an empty string.
     */
    IgTextEditorComponent.prototype.getSelectedText = function () { return; };
    ;
    /**
     * Gets the start index of the selected text in the editor.
     */
    IgTextEditorComponent.prototype.getSelectionStart = function () { return; };
    ;
    /**
     * Gets the end index of the selected text in the editor.
     */
    IgTextEditorComponent.prototype.getSelectionEnd = function () { return; };
    ;
    /**
     * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
     * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param string The string to be inserted.
     */
    IgTextEditorComponent.prototype.insert = function (string) { return; };
    ;
    /**
     * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start Start of the selection.
     * @param end End of the selection.
     */
    IgTextEditorComponent.prototype.select = function (start, end) { return; };
    ;
    /**
     * Selects the previous item from the drop-down list.
     */
    IgTextEditorComponent.prototype.spinUp = function () { return; };
    ;
    /**
     * Selects the next item from the drop-down list.
     */
    IgTextEditorComponent.prototype.spinDown = function () { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    IgTextEditorComponent.prototype.spinUpButton = function () { return; };
    ;
    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    IgTextEditorComponent.prototype.spinDownButton = function () { return; };
    ;
    /**
     * Gets/Sets name attribute applied to the editor element.
     *
     * @param newValue The new input name.
     */
    IgTextEditorComponent.prototype.inputName = function (newValue) { return; };
    ;
    IgTextEditorComponent.prototype.value = function (newValue) { return; };
    ;
    /**
     * Gets the input element of the editor.
     */
    IgTextEditorComponent.prototype.field = function () { return; };
    ;
    /**
     * Gets a reference to the jQuery element that wraps the editor.
     */
    IgTextEditorComponent.prototype.editorContainer = function () { return; };
    ;
    /**
     * Gets whether the editor has focus.
     */
    IgTextEditorComponent.prototype.hasFocus = function () { return; };
    ;
    /**
     * Sets focus to the editor after the specified delay.
     *
     * @param delay The delay before focusing the editor.
     */
    IgTextEditorComponent.prototype.setFocus = function (delay) { return; };
    ;
    /**
     * Hides the editor.
     */
    IgTextEditorComponent.prototype.hide = function () { return; };
    ;
    /**
     * Shows the editor.
     */
    IgTextEditorComponent.prototype.show = function () { return; };
    ;
    /**
     * Gets a reference to [igValidator](ui.igvalidator) used by the editor.
     */
    IgTextEditorComponent.prototype.validator = function () { return; };
    ;
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    IgTextEditorComponent.prototype.isValid = function () { return; };
    ;
    /**
     * Triggers validation for the editor. If validatorOptions are set will also call validate on the [igValidator](ui.igvalidator).
     */
    IgTextEditorComponent.prototype.validate = function () { return; };
    ;
    /**
     * Destroys the widget
     */
    IgTextEditorComponent.prototype.destroy = function () { return; };
    ;
    IgTextEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-text-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgTextEditorComponent);
    return IgTextEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgTextEditorComponent = IgTextEditorComponent;
//# sourceMappingURL=igtexteditor.component.js.map