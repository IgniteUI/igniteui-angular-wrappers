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
var IgGridResizingFeature = /** @class */ (function (_super) {
    __extends(IgGridResizingFeature, _super);
    function IgGridResizingFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the resizing widget
     */
    IgGridResizingFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Resizes a column to a specified width in pixels, percents or auto if no width is specified.
     *
     * @param column    An identifier for the column. If a number is provided it will be used as a columnIndex else if a strings is provided it will be used as a columnKey.
     * @param width    Width of the column in pixels or percents. If no width or "*" is specified the column will be auto-sized to the width of the data in it (including header and footer cells).
     */
    IgGridResizingFeature.prototype.resize = function (column, width) { return; };
    ;
    IgGridResizingFeature = __decorate([
        core_1.Directive({
            selector: 'resizing',
            inputs: ["disabled", "create", "allowDoubleClickToResize", "deferredResizing", "columnSettings", "handleThreshold", "inherit"],
            outputs: ["columnResizing", "columnResizingRefused", "columnResized"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridResizingFeature);
    return IgGridResizingFeature;
}(feature_1.Feature));
exports.IgGridResizingFeature = IgGridResizingFeature;
//# sourceMappingURL=iggridresizing.directive.js.map