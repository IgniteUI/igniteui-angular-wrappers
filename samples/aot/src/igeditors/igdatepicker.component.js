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
var IgDatePickerComponent = /** @class */ (function (_super) {
    __extends(IgDatePickerComponent, _super);
    function IgDatePickerComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.igdatepicker#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.igdatepicker#options:regional) option setter
     */
    IgDatePickerComponent.prototype.changeRegional = function () { return; };
    ;
    /**
     * Returns a reference to the jQuery calendar used as a picker selector
     */
    IgDatePickerComponent.prototype.getCalendar = function () { return; };
    ;
    IgDatePickerComponent.prototype.dropDownContainer = function () { return; };
    ;
    IgDatePickerComponent.prototype.findListItemIndex = function () { return; };
    ;
    IgDatePickerComponent.prototype.getSelectedListItem = function () { return; };
    ;
    IgDatePickerComponent.prototype.selectedListIndex = function () { return; };
    ;
    /**
     * Shows the drop down list.
     */
    IgDatePickerComponent.prototype.showDropDown = function () { return; };
    ;
    /**
     * Hides the drop down list.
     */
    IgDatePickerComponent.prototype.hideDropDown = function () { return; };
    ;
    /**
     * Returns a reference to the calendar button UI element of the editor.
     */
    IgDatePickerComponent.prototype.dropDownButton = function () { return; };
    ;
    /**
     * Returns the visibility state of the calendar.
     */
    IgDatePickerComponent.prototype.dropDownVisible = function () { return; };
    ;
    /**
     * Destroys the widget
     */
    IgDatePickerComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Gets/Sets editor value.
     *
     * Note! This option doesn't use the dateInputFormat to extract the date
     *
     * @param newValue New editor value. Date object can be set as value. String value can be passed and the editor will use the javascript Date object constructor to create date object and will use it for the comparison. MVC date format can be used too. For example Date(/"thicks"/).
     */
    IgDatePickerComponent.prototype.value = function (newValue) { return; };
    ;
    /**
     * Gets selected date as a date object. This method can be used when dataMode is set as either displayModeText or editModeText.
     * In such cases the value() method will not return date object and getSelectedDate() can be used to replace that functionality.
     */
    IgDatePickerComponent.prototype.getSelectedDate = function () { return; };
    ;
    /**
     * Sets selected date. This method can be used when dataMode is set as either displayModeText or editModeText.
     * In such cases the value() cannot accept a date object as a new value and getSelectedDate() can be used to replace that functionality.
     *
     * @param date
     */
    IgDatePickerComponent.prototype.selectDate = function (date) { return; };
    ;
    /**
     * Increases the date or time period, depending on the current cursor position.
     *
     * @param delta The increase delta.
     */
    IgDatePickerComponent.prototype.spinUp = function (delta) { return; };
    ;
    /**
     * Decreases the date or time period, depending on the current cursor position.
     *
     * @param delta The decrease delta.
     */
    IgDatePickerComponent.prototype.spinDown = function (delta) { return; };
    ;
    /**
     * Returns a reference to the spin up UI element of the editor.
     */
    IgDatePickerComponent.prototype.spinUpButton = function () { return; };
    ;
    /**
     * Returns a reference to the spin down UI element of the editor.
     */
    IgDatePickerComponent.prototype.spinDownButton = function () { return; };
    ;
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    IgDatePickerComponent.prototype.isValid = function () { return; };
    ;
    IgDatePickerComponent = __decorate([
        core_1.Component({
            selector: "ig-date-picker",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar", "minValue", "maxValue", "dateDisplayFormat", "dateInputFormat", "spinDelta", "limitSpinToCurrentField", "enableUTCDates", "centuryThreshold", "yearShift", "datepickerOptions"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged", "itemSelected"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgDatePickerComponent);
    return IgDatePickerComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgDatePickerComponent = IgDatePickerComponent;
//# sourceMappingURL=igdatepicker.component.js.map