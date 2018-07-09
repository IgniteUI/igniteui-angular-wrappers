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
    /**
         * Destroys the responsive widget.
         */
    IgGridResponsiveFeature.prototype.destroy = /**
         * Destroys the responsive widget.
         */
    function () { return; };
    ;
    /**
     * Returns the currently active responsive mode.
     */
    /**
         * Returns the currently active responsive mode.
         */
    IgGridResponsiveFeature.prototype.getCurrentResponsiveMode = /**
         * Returns the currently active responsive mode.
         */
    function () { return; };
    ;
    IgGridResponsiveFeature.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'responsive',
                    inputs: ["disabled", "create", "columnSettings", "reactOnContainerWidthChanges", "forceResponsiveGridWidth", "responsiveSensitivity", "responsiveModes", "enableVerticalRendering", "windowWidthToRenderVertically", "propertiesColumnWidth", "valuesColumnWidth", "allowedColumnWidthPerType", "singleColumnTemplate", "inherit"],
                    outputs: ["responsiveColumnHiding", "responsiveColumnHidden", "responsiveColumnShowing", "responsiveColumnShown", "responsiveModeChanged"]
                },] },
    ];
    /** @nocollapse */
    IgGridResponsiveFeature.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return IgGridResponsiveFeature;
}(feature_1.Feature));
exports.IgGridResponsiveFeature = IgGridResponsiveFeature;
//# sourceMappingURL=iggridresponsive.directive.js.map