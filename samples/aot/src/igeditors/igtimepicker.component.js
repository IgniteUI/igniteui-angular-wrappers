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
var IgTimePickerComponent = /** @class */ (function (_super) {
    __extends(IgTimePickerComponent, _super);
    function IgTimePickerComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets the selected list item.
     */
    IgTimePickerComponent.prototype.getSelectedListItem = function () { return; };
    ;
    /**
     * Returns the visibility state of the calendar.
     */
    IgTimePickerComponent.prototype.dropDownVisible = function () { return; };
    ;
    /**
     * Returns a reference to the drop-down button UI element of the editor.
     */
    IgTimePickerComponent.prototype.dropDownButton = function () { return; };
    ;
    /**
     * Gets reference to jquery object which is used as container of drop-down list.
     */
    IgTimePickerComponent.prototype.dropDownContainer = function () { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param text The text to search for in the drop down list.
     * @param matchType The rule that is applied for searching the text.
     */
    IgTimePickerComponent.prototype.findListItemIndex = function (text, matchType) { return; };
    ;
    /**
     * Gets the index of the selected list item. Sets selected item by index.
     *
     * @param index The index of the item that needs to be selected.
     */
    IgTimePickerComponent.prototype.selectedListIndex = function (index) { return; };
    ;
    IgTimePickerComponent.prototype.value = function (newValue) { return; };
    ;
    IgTimePickerComponent.prototype.selectDate = function () { return; };
    ;
    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.igdateeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.igdateeditor#options:regional) option setter
     */
    IgTimePickerComponent.prototype.changeRegional = function () { return; };
    ;
    /**
     * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
     * In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
     */
    IgTimePickerComponent.prototype.getSelectedDate = function () { return; };
    ;
    /**
     * Increases the date or time period, depending on the current cursor position.
     *
     * @param delta The increase delta.
     */
    IgTimePickerComponent.prototype.spinUp = function (delta) { return; };
    ;
    /**
     * Decreases the date or time period, depending on the current cursor position.
     *
     * @param delta The decrease delta.
     */
    IgTimePickerComponent.prototype.spinDown = function (delta) { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    IgTimePickerComponent.prototype.spinUpButton = function () { return; };
    ;
    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    IgTimePickerComponent.prototype.spinDownButton = function () { return; };
    ;
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    IgTimePickerComponent.prototype.isValid = function () { return; };
    ;
    IgTimePickerComponent = __decorate([
        core_1.Component({
            selector: "ig-time-picker",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "disabled", "create", "locale", "language", "regional", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "suppressNotifications", "suppressKeyboard", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar", "minValue", "maxValue", "dateDisplayFormat", "dateInputFormat", "displayTimeOffset", "spinDelta", "limitSpinToCurrentField", "enableUTCDates", "centuryThreshold", "yearShift", "itemsDelta", "timeInputFormat", "timeDisplayFormat"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgTimePickerComponent);
    return IgTimePickerComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgTimePickerComponent = IgTimePickerComponent;
//# sourceMappingURL=igtimepicker.component.js.map