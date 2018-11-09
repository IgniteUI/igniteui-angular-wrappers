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
     * @param newValue New mask editor value.
     */
    IgMaskEditorComponent.prototype.value = function (newValue) { return; };
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
    IgMaskEditorComponent.prototype.isValid = function () { return; };
    ;
    /**
     * Changes the all locales into the widget element to the language specified in [options.language](ui.igtexteditor#options:language)
     * Note that this method is for rare scenarios, see [language](ui.igtexteditor#options:language) or [locale](ui.igtexteditor#options:locale) option setter
     */
    IgMaskEditorComponent.prototype.changeLocale = function () { return; };
    ;
    /**
     * Gets the visible text in the editor.
     */
    IgMaskEditorComponent.prototype.displayValue = function () { return; };
    ;
    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    IgMaskEditorComponent.prototype.clearButton = function () { return; };
    ;
    /**
     * Gets the selected text from the editor in edit mode. This can be done inside key event handlers, like keydown or keyup. This method can be used only when the editor is focused. If you invoke this method in display mode, when the editor input is blurred, the returned value will be an empty string.
     */
    IgMaskEditorComponent.prototype.getSelectedText = function () { return; };
    ;
    /**
     * Gets the start index of the selected text in the editor.
     */
    IgMaskEditorComponent.prototype.getSelectionStart = function () { return; };
    ;
    /**
     * Gets the end index of the selected text in the editor.
     */
    IgMaskEditorComponent.prototype.getSelectionEnd = function () { return; };
    ;
    /**
     * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
     * Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param string The string to be inserted.
     */
    IgMaskEditorComponent.prototype.insert = function (string) { return; };
    ;
    /**
     * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start Start of the selection.
     * @param end End of the selection.
     */
    IgMaskEditorComponent.prototype.select = function (start, end) { return; };
    ;
    IgMaskEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-mask-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgMaskEditorComponent);
    return IgMaskEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgMaskEditorComponent = IgMaskEditorComponent;
//# sourceMappingURL=igmaskeditor.component.js.map