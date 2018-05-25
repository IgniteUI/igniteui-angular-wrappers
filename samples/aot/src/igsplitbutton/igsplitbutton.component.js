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
var IgSplitButtonComponent = /** @class */ (function (_super) {
    __extends(IgSplitButtonComponent, _super);
    function IgSplitButtonComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    /**
     * Switch to given igToolbar button.
     *
     * @param button . The button jQuery element.
     */
    /**
         * Switch to given igToolbar button.
         *
         * @param button . The button jQuery element.
         */
    IgSplitButtonComponent.prototype.switchToButton = /**
         * Switch to given igToolbar button.
         *
         * @param button . The button jQuery element.
         */
    function (button) { return; };
    ;
    /**
     * Toggle widget state between collapsed and expanded.
     *
     * @param e The igSplitButton to be expanded/collapsed.
     */
    /**
         * Toggle widget state between collapsed and expanded.
         *
         * @param e The igSplitButton to be expanded/collapsed.
         */
    IgSplitButtonComponent.prototype.toggle = /**
         * Toggle widget state between collapsed and expanded.
         *
         * @param e The igSplitButton to be expanded/collapsed.
         */
    function (e) { return; };
    ;
    /**
     * Collapse the widget.
     *
     * @param e Indicates the browser event which triggered this action (not API).
     */
    /**
         * Collapse the widget.
         *
         * @param e Indicates the browser event which triggered this action (not API).
         */
    IgSplitButtonComponent.prototype.collapse = /**
         * Collapse the widget.
         *
         * @param e Indicates the browser event which triggered this action (not API).
         */
    function (e) { return; };
    ;
    /**
     * Expands the widget.
     *
     * @param e Indicates the browser event which triggered this action (not API).
     */
    /**
         * Expands the widget.
         *
         * @param e Indicates the browser event which triggered this action (not API).
         */
    IgSplitButtonComponent.prototype.expand = /**
         * Expands the widget.
         *
         * @param e Indicates the browser event which triggered this action (not API).
         */
    function (e) { return; };
    ;
    /**
     * Destroy the widget.
     */
    /**
         * Destroy the widget.
         */
    IgSplitButtonComponent.prototype.destroy = /**
         * Destroy the widget.
         */
    function () { return; };
    ;
    IgSplitButtonComponent.prototype.widget = function () { return; };
    ;
    IgSplitButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-split-button",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "items", "defaultItemName", "swapDefaultEnabled"],
                    outputs: ["click", "expanded", "expanding", "collapsed", "collapsing"]
                },] },
    ];
    /** @nocollapse */
    IgSplitButtonComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgSplitButtonComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgSplitButtonComponent = IgSplitButtonComponent;
//# sourceMappingURL=igsplitbutton.component.js.map