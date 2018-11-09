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
    IgCheckboxEditorComponent.prototype.isValid = function () { return; };
    ;
    /**
     * Gets/Sets Current checked state/Value of the igCheckboxEditor that will be submitted by the HTML form.
     * 1. If the [value](ui.igcheckboxeditor#options:value) option IS NOT defined, then 'value' method will match the checked state of the editor.
     * This option is used when the checkbox is intended to operate as a Boolean editor. In that case the return type is bool.
     * 2. If the [value](ui.igcheckboxeditor#options:value) option IS defined, then 'value' method will return the value that will be submitted when the editor is checked and the form is submitted.
     * To get checked state regardless of the 'value' option, use $(".selector").igCheckboxEditor("option", "checked");
     *
     * @param newValue
     */
    IgCheckboxEditorComponent.prototype.value = function (newValue) { return; };
    ;
    /**
     * Toggles the state of the checkbox.
     */
    IgCheckboxEditorComponent.prototype.toggle = function () { return; };
    ;
    /**
     * Gets/Sets name attribute applied to the editor element.
     *
     * @param newValue The new input name.
     */
    IgCheckboxEditorComponent.prototype.inputName = function (newValue) { return; };
    ;
    /**
     * Gets the input element of the editor.
     */
    IgCheckboxEditorComponent.prototype.field = function () { return; };
    ;
    /**
     * Gets a reference to the jQuery element that wraps the editor.
     */
    IgCheckboxEditorComponent.prototype.editorContainer = function () { return; };
    ;
    /**
     * Gets whether the editor has focus.
     */
    IgCheckboxEditorComponent.prototype.hasFocus = function () { return; };
    ;
    /**
     * Sets focus to the editor after the specified delay.
     *
     * @param delay The delay before focusing the editor.
     */
    IgCheckboxEditorComponent.prototype.setFocus = function (delay) { return; };
    ;
    /**
     * Hides the editor.
     */
    IgCheckboxEditorComponent.prototype.hide = function () { return; };
    ;
    /**
     * Shows the editor.
     */
    IgCheckboxEditorComponent.prototype.show = function () { return; };
    ;
    /**
     * Gets a reference to [igValidator](ui.igvalidator) used by the editor.
     */
    IgCheckboxEditorComponent.prototype.validator = function () { return; };
    ;
    /**
     * Triggers validation for the editor. If validatorOptions are set will also call validate on the [igValidator](ui.igvalidator).
     */
    IgCheckboxEditorComponent.prototype.validate = function () { return; };
    ;
    /**
     * Destroys the widget
     */
    IgCheckboxEditorComponent.prototype.destroy = function () { return; };
    ;
    IgCheckboxEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-checkbox-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "checked", "size", "iconClass"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgCheckboxEditorComponent);
    return IgCheckboxEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgCheckboxEditorComponent = IgCheckboxEditorComponent;
//# sourceMappingURL=igcheckboxeditor.component.js.map