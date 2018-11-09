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
var IgGridResponsiveFeature = /** @class */ (function (_super) {
    __extends(IgGridResponsiveFeature, _super);
    function IgGridResponsiveFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Destroys the responsive widget.
     */
    IgGridResponsiveFeature.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the currently active responsive mode.
     */
    IgGridResponsiveFeature.prototype.getCurrentResponsiveMode = function () { return; };
    ;
    IgGridResponsiveFeature = __decorate([
        core_1.Directive({
            selector: 'responsive',
            inputs: ["disabled", "create", "columnSettings", "reactOnContainerWidthChanges", "forceResponsiveGridWidth", "responsiveSensitivity", "responsiveModes", "enableVerticalRendering", "windowWidthToRenderVertically", "propertiesColumnWidth", "valuesColumnWidth", "allowedColumnWidthPerType", "singleColumnTemplate", "inherit"],
            outputs: ["responsiveColumnHiding", "responsiveColumnHidden", "responsiveColumnShowing", "responsiveColumnShown", "responsiveModeChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridResponsiveFeature);
    return IgGridResponsiveFeature;
}(feature_1.Feature));
exports.IgGridResponsiveFeature = IgGridResponsiveFeature;
//# sourceMappingURL=iggridresponsive.directive.js.map