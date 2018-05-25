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
var IgCheckboxEditorComponent = /** @class */ (function (_super) {
    __extends(IgCheckboxEditorComponent, _super);
    function IgCheckboxEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
     */
    /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    IgCheckboxEditorComponent.prototype.isValid = /**
         * Checks if the value in the editor is valid. Note: This function will not trigger automatic notifications.
         */
    function () { return; };
    ;
    /**
     * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
     * 				1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
     * 				This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
     * 				2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
     * 				To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
     *
     * @param newValue
     */
    /**
         * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
         * 				1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
         * 				This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
         * 				2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
         * 				To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
         *
         * @param newValue
         */
    IgCheckboxEditorComponent.prototype.value = /**
         * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
         * 				1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
         * 				This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
         * 				2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
         * 				To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
         *
         * @param newValue
         */
    function (newValue) { return; };
    ;
    /**
     * Toggles the state of the checkbox.
     */
    /**
         * Toggles the state of the checkbox.
         */
    IgCheckboxEditorComponent.prototype.toggle = /**
         * Toggles the state of the checkbox.
         */
    function () { return; };
    ;
    IgCheckboxEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-checkbox-editor",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "checked", "size", "iconClass"],
                    outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged"]
                },] },
    ];
    /** @nocollapse */
    IgCheckboxEditorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
        { type: forms_1.NgModel, decorators: [{ type: core_1.Optional },] },
    ]; };
    return IgCheckboxEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgCheckboxEditorComponent = IgCheckboxEditorComponent;
//# sourceMappingURL=igcheckboxeditor.component.js.map