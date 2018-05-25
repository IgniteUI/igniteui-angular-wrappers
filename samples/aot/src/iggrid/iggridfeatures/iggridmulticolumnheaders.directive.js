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
var feature_1 = require("../feature");
var IgGridMultiColumnHeadersFeature = /** @class */ (function (_super) {
    __extends(IgGridMultiColumnHeadersFeature, _super);
    function IgGridMultiColumnHeadersFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
      * Destroys the widget
     */
    /**
          * Destroys the widget
         */
    IgGridMultiColumnHeadersFeature.prototype.destroy = /**
          * Destroys the widget
         */
    function () { return; };
    ;
    /**
      * Collapses an expanded group. If the group is collapsed, the method does nothing.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    /**
          * Collapses an expanded group. If the group is collapsed, the method does nothing.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    IgGridMultiColumnHeadersFeature.prototype.collapseGroup = /**
          * Collapses an expanded group. If the group is collapsed, the method does nothing.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    function (groupKey, callback) { return; };
    ;
    /**
      * Expands a collapsed group. If the group is expanded, the method does nothing.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    /**
          * Expands a collapsed group. If the group is expanded, the method does nothing.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    IgGridMultiColumnHeadersFeature.prototype.expandGroup = /**
          * Expands a collapsed group. If the group is expanded, the method does nothing.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    function (groupKey, callback) { return; };
    ;
    /**
      * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
     */
    /**
          * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
         */
    IgGridMultiColumnHeadersFeature.prototype.getMultiColumnHeaders = /**
          * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
         */
    function () { return; };
    ;
    /**
      * Toggles a collapsible group.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    /**
          * Toggles a collapsible group.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    IgGridMultiColumnHeadersFeature.prototype.toggleGroup = /**
          * Toggles a collapsible group.
          * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
         */
    function (groupKey, callback) { return; };
    ;
    IgGridMultiColumnHeadersFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'multi-column-headers',
                    inputs: ["inherit"],
                    outputs: ["groupCollapsing", "groupCollapsed", "groupExpanding", "groupExpanded"]
                },] },
    ];
    /** @nocollapse */
    IgGridMultiColumnHeadersFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridMultiColumnHeadersFeature;
}(feature_1.Feature));
exports.IgGridMultiColumnHeadersFeature = IgGridMultiColumnHeadersFeature;
//# sourceMappingURL=iggridmulticolumnheaders.directive.js.map