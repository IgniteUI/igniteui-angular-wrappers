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
    /**
         * Gets reference to [igValidator](ui.igvalidator) used by igRating.
         *
         * @param destroy     Request to destroy validator.
         */
    IgRatingComponent.prototype.validator = /**
         * Gets reference to [igValidator](ui.igvalidator) used by igRating.
         *
         * @param destroy     Request to destroy validator.
         */
    function (destroy) { return; };
    ;
    /**
     * Triggers validation.
     */
    /**
         * Triggers validation.
         */
    IgRatingComponent.prototype.validate = /**
         * Triggers validation.
         */
    function () { return; };
    ;
    /**
     * Gets/Sets (selected) value.
     *
     * @param val     New value which is rendered with selected css.
     * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
     */
    /**
         * Gets/Sets (selected) value.
         *
         * @param val     New value which is rendered with selected css.
         * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
         */
    IgRatingComponent.prototype.value = /**
         * Gets/Sets (selected) value.
         *
         * @param val     New value which is rendered with selected css.
         * @return number|object     If parameter is not 'number', then exact value rendered with selected css is returned. Otherwise, reference to igRating is returned.
         */
    function (val) { return; };
    ;
    /**
     * Gets/Sets hover value.
     *
     * @param val     New value which will be rendered with hover css when rating gets mouse.
     * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
     */
    /**
         * Gets/Sets hover value.
         *
         * @param val     New value which will be rendered with hover css when rating gets mouse.
         * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
         */
    IgRatingComponent.prototype.valueHover = /**
         * Gets/Sets hover value.
         *
         * @param val     New value which will be rendered with hover css when rating gets mouse.
         * @return number|object     If parameter is not "number", then last value which was rendered with hover css is returned. Otherwise, reference to igRating is returned.
         */
    function (val) { return; };
    ;
    /**
     * Checks if igRating has focus.
     */
    /**
         * Checks if igRating has focus.
         */
    IgRatingComponent.prototype.hasFocus = /**
         * Checks if igRating has focus.
         */
    function () { return; };
    ;
    /**
     * Sets focus to igRating. That has effect only when options.focusable is enabled.
     */
    /**
         * Sets focus to igRating. That has effect only when options.focusable is enabled.
         */
    IgRatingComponent.prototype.focus = /**
         * Sets focus to igRating. That has effect only when options.focusable is enabled.
         */
    function () { return; };
    ;
    /**
     * Destroys igRating widget.
     */
    /**
         * Destroys igRating widget.
         */
    IgRatingComponent.prototype.destroy = /**
         * Destroys igRating widget.
         */
    function () { return; };
    ;
    IgRatingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-rating",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "vertical", "value", "valueHover", "voteCount", "voteWidth", "voteHeight", "swapDirection", "valueAsPercent", "focusable", "precision", "precisionZeroVote", "roundedDecimalPlaces", "theme", "validatorOptions", "cssVotes"],
                    outputs: ["hoverChange", "valueChange"]
                },] },
    ];
    /** @nocollapse */
    IgRatingComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgRatingComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgRatingComponent = IgRatingComponent;
//# sourceMappingURL=igrating.component.js.map