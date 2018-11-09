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
var IgQRCodeBarcodeComponent = /** @class */ (function (_super) {
    __extends(IgQRCodeBarcodeComponent, _super);
    function IgQRCodeBarcodeComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgQRCodeBarcodeComponent.prototype.option = function () { return; };
    ;
    /**
     * Returns information about how the barcode is rendered.
     */
    IgQRCodeBarcodeComponent.prototype.exportVisualData = function () { return; };
    ;
    /**
     * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
     */
    IgQRCodeBarcodeComponent.prototype.flush = function () { return; };
    ;
    /**
     * Destroys widget.
     */
    IgQRCodeBarcodeComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    IgQRCodeBarcodeComponent.prototype.styleUpdated = function () { return; };
    ;
    IgQRCodeBarcodeComponent = __decorate([
        core_1.Component({
            selector: "ig-q-r-code-barcode",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "backingBrush", "backingOutline", "backingStrokeThickness", "barBrush", "fontBrush", "font", "data", "errorMessageText", "stretch", "barsFillMode", "widthToHeightRatio", "xDimension", "errorCorrectionLevel", "sizeVersion", "encodingMode", "eciNumber", "eciHeaderDisplayMode", "fnc1Mode", "applicationIndicator"],
            outputs: ["errorMessageDisplaying", "dataChanged"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgQRCodeBarcodeComponent);
    return IgQRCodeBarcodeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgQRCodeBarcodeComponent = IgQRCodeBarcodeComponent;
//# sourceMappingURL=igqrcodebarcode.component.js.map