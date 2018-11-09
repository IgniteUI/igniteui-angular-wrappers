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
var feature_1 = require("../feature");
var core_1 = require("@angular/core");
var IgGridTooltipsFeature = /** @class */ (function (_super) {
    __extends(IgGridTooltipsFeature, _super);
    function IgGridTooltipsFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the tooltip widget.
     */
    IgGridTooltipsFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the ID of the parent div element bounding the ruler and the tooltip container
     */
    IgGridTooltipsFeature.prototype.id = function () { return; };
    ;
    IgGridTooltipsFeature = __decorate([
        core_1.Directive({
            selector: 'tooltips',
            inputs: ["disabled", "create", "visibility", "style", "showDelay", "hideDelay", "columnSettings", "fadeTimespan", "cursorLeftOffset", "cursorTopOffset", "inherit"],
            outputs: ["tooltipShowing", "tooltipShown", "tooltipHiding", "tooltipHidden"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridTooltipsFeature);
    return IgGridTooltipsFeature;
}(feature_1.Feature));
exports.IgGridTooltipsFeature = IgGridTooltipsFeature;
//# sourceMappingURL=iggridtooltips.directive.js.map