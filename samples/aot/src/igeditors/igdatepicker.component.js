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
var IgDatePickerComponent = /** @class */ (function (_super) {
    __extends(IgDatePickerComponent, _super);
    function IgDatePickerComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Returns a reference to the jQuery calendar used as a picker selector
     */
    /**
         * Returns a reference to the jQuery calendar used as a picker selector
         */
    IgDatePickerComponent.prototype.getCalendar = /**
         * Returns a reference to the jQuery calendar used as a picker selector
         */
    function () { return; };
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
    /**
         * Shows the drop down list.
         */
    IgDatePickerComponent.prototype.showDropDown = /**
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
    IgDatePickerComponent.prototype.hideDropDown = /**
         * Hides the drop down list.
         */
    function () { return; };
    ;
    /**
     * Returns a reference to the calendar button UI element of the editor.
     */
    /**
         * Returns a reference to the calendar button UI element of the editor.
         */
    IgDatePickerComponent.prototype.dropDownButton = /**
         * Returns a reference to the calendar button UI element of the editor.
         */
    function () { return; };
    ;
    /**
     * Returns the visibility state of the calendar.
     */
    /**
         * Returns the visibility state of the calendar.
         */
    IgDatePickerComponent.prototype.dropDownVisible = /**
         * Returns the visibility state of the calendar.
         */
    function () { return; };
    ;
    /**
     * Destroys the widget
     */
    /**
         * Destroys the widget
         */
    IgDatePickerComponent.prototype.destroy = /**
         * Destroys the widget
         */
    function () { return; };
    ;
    IgDatePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-date-picker",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "inputMask", "dataMode", "unfilledCharsPrompt", "padChar", "emptyChar", "minValue", "maxValue", "dateDisplayFormat", "dateInputFormat", "spinDelta", "limitSpinToCurrentField", "enableUTCDates", "centuryThreshold", "yearShift", "datepickerOptions"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged", "itemSelected"]
                },] },
    ];
    /** @nocollapse */
    IgDatePickerComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgDatePickerComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgDatePickerComponent = IgDatePickerComponent;
//# sourceMappingURL=igdatepicker.component.js.map