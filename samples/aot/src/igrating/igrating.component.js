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
var IgRatingComponent = /** @class */ (function (_super) {
    __extends(IgRatingComponent, _super);
    function IgRatingComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Gets reference to [igValidator](ui.igvalidator) used by igRating.
     *
     * @param destroy     Request to destroy validator.
     */
    IgRatingComponent.prototype.validator = function (destroy) { return; };
    ;
    /**
     * Triggers validation.
     */
    IgRatingComponent.prototype.validate = function () { return; };
    ;
    /**
     * Gets/Sets (selected) value.
     *
     * @param val     New value which is rendered with selected css.
     * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
     */
    IgRatingComponent.prototype.value = function (val) { return; };
    ;
    /**
     * Gets/Sets hover value.
     *
     * @param val     New value which will be rendered with hover css when rating gets mouse.
     * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
     */
    IgRatingComponent.prototype.valueHover = function (val) { return; };
    ;
    /**
     * Checks if igRating has focus.
     */
    IgRatingComponent.prototype.hasFocus = function () { return; };
    ;
    /**
     * Sets focus to igRating. That has effect only when options.focusable is enabled.
     */
    IgRatingComponent.prototype.focus = function () { return; };
    ;
    /**
     * Destroys igRating widget.
     */
    IgRatingComponent.prototype.destroy = function () { return; };
    ;
    IgRatingComponent = __decorate([
        core_1.Component({
            selector: "ig-rating",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "vertical", "value", "valueHover", "voteCount", "voteWidth", "voteHeight", "swapDirection", "valueAsPercent", "focusable", "precision", "precisionZeroVote", "roundedDecimalPlaces", "theme", "validatorOptions", "cssVotes"],
            outputs: ["hoverChange", "valueChange"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgRatingComponent);
    return IgRatingComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRatingComponent = IgRatingComponent;
//# sourceMappingURL=igrating.component.js.map