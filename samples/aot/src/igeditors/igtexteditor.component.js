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
var IgTextEditorComponent = /** @class */ (function (_super) {
    __extends(IgTextEditorComponent, _super);
    function IgTextEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets the visible text in the editor.
     */
    /**
         * Gets the visible text in the editor.
         */
    IgTextEditorComponent.prototype.displayValue = /**
         * Gets the visible text in the editor.
         */
    function () { return; };
    ;
    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    /**
         * Gets reference to jquery object which is used as container of drop-down list.
         */
    IgTextEditorComponent.prototype.dropDownContainer = /**
         * Gets reference to jquery object which is used as container of drop-down list.
         */
    function () { return; };
    ;
    /**
     * Shows the drop down list.
     */
    /**
         * Shows the drop down list.
         */
    IgTextEditorComponent.prototype.showDropDown = /**
         * Shows the drop down list.
         */
    function () { return; };
    ;
    /**
     * Hides the drop down list.
     */
    /**
         * Hides the drop down list.
         */
    IgTextEditorComponent.prototype.hideDropDown = /**
         * Hides the drop down list.
         */
    function () { return; };
    ;
    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    /**
         * Returns a reference to the drop-down button UI element of the editor.
         */
    IgTextEditorComponent.prototype.dropDownButton = /**
         * Returns a reference to the drop-down button UI element of the editor.
         */
    function () { return; };
    ;
    /**
     * Returns if the drop-down list is visible.
     */
    /**
         * Returns if the drop-down list is visible.
         */
    IgTextEditorComponent.prototype.dropDownVisible = /**
         * Returns if the drop-down list is visible.
         */
    function () { return; };
    ;
    /**
     * Returns a reference to the clear button UI element of the editor.
     */
    /**
         * Returns a reference to the clear button UI element of the editor.
         */
    IgTextEditorComponent.prototype.clearButton = /**
         * Returns a reference to the clear button UI element of the editor.
         */
    function () { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param text     The text to search for in the drop down list.
     * @param matchType     The rule that is applied for searching the text.
     */
    /**
         * Finds index of list item by text that matches with the search parameters.
         *
         * @param text     The text to search for in the drop down list.
         * @param matchType     The rule that is applied for searching the text.
         */
    IgTextEditorComponent.prototype.findListItemIndex = /**
         * Finds index of list item by text that matches with the search parameters.
         *
         * @param text     The text to search for in the drop down list.
         * @param matchType     The rule that is applied for searching the text.
         */
    function (text, matchType) { return; };
    ;
    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index     The index of the item that needs to be selected.
     */
    /**
         * Gets the index of the selected list item. Sets selected item by index.
         *
         * @param index     The index of the item that needs to be selected.
         */
    IgTextEditorComponent.prototype.selectedListIndex = /**
         * Gets the index of the selected list item. Sets selected item by index.
         *
         * @param index     The index of the item that needs to be selected.
         */
    function (index) { return; };
    ;
    /**
     * Gets the selected list item.
     */
    /**
         * Gets the selected list item.
         */
    IgTextEditorComponent.prototype.getSelectedListItem = /**
         * Gets the selected list item.
         */
    function () { return; };
    ;
    /**
     * Gets the selected text in the editor.
     */
    /**
         * Gets the selected text in the editor.
         */
    IgTextEditorComponent.prototype.getSelectedText = /**
         * Gets the selected text in the editor.
         */
    function () { return; };
    ;
    /**
     * Gets the start index of the selected text in the editor.
     */
    /**
         * Gets the start index of the selected text in the editor.
         */
    IgTextEditorComponent.prototype.getSelectionStart = /**
         * Gets the start index of the selected text in the editor.
         */
    function () { return; };
    ;
    /**
     * Gets the end index of the selected text in the editor.
     */
    /**
         * Gets the end index of the selected text in the editor.
         */
    IgTextEditorComponent.prototype.getSelectionEnd = /**
         * Gets the end index of the selected text in the editor.
         */
    function () { return; };
    ;
    /**
     * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
     * 				Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
     *
     * @param string     The string to be inserted.
     */
    /**
         * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
         * 				Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
         *
         * @param string     The string to be inserted.
         */
    IgTextEditorComponent.prototype.insert = /**
         * Inserts the text at the location of the caret or over the current selection. If the editor is focused the method will insert the text over the current selection. If the editor is not focused the method will set the text as value of the editor.
         * 				Note: The method raises [textChanged](ui.igtexteditor#events:textChanged) event.
         *
         * @param string     The string to be inserted.
         */
    function (string) { return; };
    ;
    /**
     * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
     *
     * @param start     Start of the selection.
     * @param end     End of the selection.
     */
    /**
         * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
         *
         * @param start     Start of the selection.
         * @param end     End of the selection.
         */
    IgTextEditorComponent.prototype.select = /**
         * Selects the text between start and end indices in the editor. If the parameters are equal, then the method sets location of caret. The method has effect only when the editor has focus.
         *
         * @param start     Start of the selection.
         * @param end     End of the selection.
         */
    function (start, end) { return; };
    ;
    /**
     * Hovers the previous item in the drop-down list if the list is opened.
     */
    /**
         * Hovers the previous item in the drop-down list if the list is opened.
         */
    IgTextEditorComponent.prototype.spinUp = /**
         * Hovers the previous item in the drop-down list if the list is opened.
         */
    function () { return; };
    ;
    /**
     * Hovers the next item in the drop-down list if the list is opened.
     */
    /**
         * Hovers the next item in the drop-down list if the list is opened.
         */
    IgTextEditorComponent.prototype.spinDown = /**
         * Hovers the next item in the drop-down list if the list is opened.
         */
    function () { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    /**
         * Returns a reference to the spin up UI element of the editor.
         */
    IgTextEditorComponent.prototype.spinUpButton = /**
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
    IgTextEditorComponent.prototype.spinDownButton = /**
         * Returns a reference to the spin down UI element of the editor.
         */
    function () { return; };
    ;
    IgTextEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-text-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
                },] },
    ];
    /** @nocollapse */
    IgTextEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgTextEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgTextEditorComponent = IgTextEditorComponent;
//# sourceMappingURL=igtexteditor.component.js.map