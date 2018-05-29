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
var IgCurrencyEditorComponent = /** @class */ (function (_super) {
    __extends(IgCurrencyEditorComponent, _super);
    function IgCurrencyEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
     *
     * @param symbol     New currency symbol.
     */
    /**
         * Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
         *
         * @param symbol     New currency symbol.
         */
    IgCurrencyEditorComponent.prototype.currencySymbol = /**
         * Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
         *
         * @param symbol     New currency symbol.
         */
    function (symbol) { return; };
    ;
    IgCurrencyEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-currency-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "negativeSign", "negativePattern", "decimalSeparator", "groupSeparator", "groups", "maxDecimals", "minDecimals", "dataMode", "minValue", "maxValue", "spinDelta", "scientificFormat", "positivePattern", "currencySymbol"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
                },] },
    ];
    /** @nocollapse */
    IgCurrencyEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgCurrencyEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgCurrencyEditorComponent = IgCurrencyEditorComponent;
//# sourceMappingURL=igcurrencyeditor.component.js.map