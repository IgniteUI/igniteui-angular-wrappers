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
var feature_1 = require("../feature");
var IgGridMultiColumnHeadersFeature = /** @class */ (function (_super) {
    __extends(IgGridMultiColumnHeadersFeature, _super);
    function IgGridMultiColumnHeadersFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
      * Destroys the widget
     */
    IgGridMultiColumnHeadersFeature.prototype.destroy = function () { return; };
    ;
    /**
      * Collapses an expanded group. If the group is collapsed, the method does nothing.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    IgGridMultiColumnHeadersFeature.prototype.collapseGroup = function (groupKey, callback) { return; };
    ;
    /**
      * Expands a collapsed group. If the group is expanded, the method does nothing.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    IgGridMultiColumnHeadersFeature.prototype.expandGroup = function (groupKey, callback) { return; };
    ;
    /**
      * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
     */
    IgGridMultiColumnHeadersFeature.prototype.getMultiColumnHeaders = function () { return; };
    ;
    /**
      * Toggles a collapsible group.
      * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
    IgGridMultiColumnHeadersFeature.prototype.toggleGroup = function (groupKey, callback) { return; };
    ;
    IgGridMultiColumnHeadersFeature = __decorate([
        core_1.Directive({
            selector: 'multi-column-headers',
            inputs: ["inherit"],
            outputs: ["groupCollapsing", "groupCollapsed", "groupExpanding", "groupExpanded"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridMultiColumnHeadersFeature);
    return IgGridMultiColumnHeadersFeature;
}(feature_1.Feature));
exports.IgGridMultiColumnHeadersFeature = IgGridMultiColumnHeadersFeature;
//# sourceMappingURL=iggridmulticolumnheaders.directive.js.map