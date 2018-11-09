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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgValidatorComponent = /** @class */ (function (_super) {
    __extends(IgValidatorComponent, _super);
    function IgValidatorComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgValidatorComponent.prototype.ngOnInit = function () {
        var evtName;
        this._el = jQuery(document).find("#" + this.widgetId);
        jQuery(this._el)[this._widgetName](this.options);
        this._events = new Map();
        //events binding
        var that = this;
        for (var propt in jQuery.ui[this._widgetName].prototype.events) {
            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(this._el).on(evtName, function (evt, ui) {
                that[that._events[evt.type]].emit({ event: evt, ui: ui });
            });
        }
    };
    /**
     * Trigger validation and show errors for invalid fields.
     *
     * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
     */
    IgValidatorComponent.prototype.validate = function (field) { return; };
    ;
    /**
     * Trigger validation but do not display error messages.
     *
     * @param field    Optional field object, its selector or zero-based index to check. Only has effect with fields collection and skips other fields.
     */
    IgValidatorComponent.prototype.isValid = function (field) { return; };
    ;
    /**
     * Hide any possible message(s) (either messageTarget or igNotifier).
     * 			Note: When the validator has a fields colleciton, not passing a field will hide messages on all fields.
     *
     * @param field    Optional field object, its selector or zero-based index to hide message for.
     */
    IgValidatorComponent.prototype.hide = function (field) { return; };
    ;
    /**
     * Gets all current error messages for invalid field(s). Note that this method does not valdiate and states and messages are only updated on validation, so
     * 			this can be used on formValidated event or after validate/isValid method calls.
     *
     * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
     */
    IgValidatorComponent.prototype.getErrorMessages = function (field) { return; };
    ;
    /**
     * Check for currently displayed message(s). Takes an optional field.
     * 			Note: When the validator has a fields colleciton, not passing a field will return a cumulative true even if just one field has a visible message.
     *
     * @param field    Optional field object, selector or zero-based index for a single field to get error message for.
     */
    IgValidatorComponent.prototype.isMessageDisplayed = function (field) { return; };
    ;
    /**
     * Gets the notifier for the igValidator or for a single filed.
     *
     * @param field    Optional field object, its selector or zero-based index to get notifier for.
     */
    IgValidatorComponent.prototype.notifier = function (field) { return; };
    ;
    /**
     * Adds an new input to the fields collection and initializes it with the validator. Note: Additional fields are only accepted if the validator has been created with the collection.
     *
     * @param field    An object with the field selector and options.
     */
    IgValidatorComponent.prototype.addField = function (field) { return; };
    ;
    /**
     * Removes an input from the fields collection.
     *
     * @param field    The field object to remove, its zero-based index or selector.
     */
    IgValidatorComponent.prototype.removeField = function (field) { return; };
    ;
    /**
     * Updates a field in the validator collection. Used to reinitialize field in case a control has been created after the validator or to pass in new options.
     *
     * @param field    The field object to update, its zero-based index or selector.
     * @param fieldOptions    New options to apply to the field.
     */
    IgValidatorComponent.prototype.updateField = function (field, fieldOptions) { return; };
    ;
    /**
     * Destroys the validator widget.
     */
    IgValidatorComponent.prototype.destroy = function () { return; };
    ;
    IgValidatorComponent = __decorate([
        core_1.Component({
            selector: "ig-validator",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "onchange", "onblur", "onsubmit", "required", "number", "date", "email", "lengthRange", "valueRange", "creditCard", "pattern", "messageTarget", "errorMessage", "successMessage", "threshold", "equalTo", "custom", "fields", "notificationOptions", "requiredIndication", "optionalIndication"],
            outputs: ["validating", "validated", "success", "error", "errorShowing", "errorHiding", "errorShown", "errorHidden", "successShowing", "successHiding", "successShown", "successHidden", "formValidating", "formValidated", "formError", "formSuccess"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgValidatorComponent);
    return IgValidatorComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgValidatorComponent = IgValidatorComponent;
//# sourceMappingURL=igvalidator.component.js.map