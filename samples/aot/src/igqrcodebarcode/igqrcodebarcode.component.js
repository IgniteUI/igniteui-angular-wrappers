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
    /**
         * Returns information about how the barcode is rendered.
         */
    IgQRCodeBarcodeComponent.prototype.exportVisualData = /**
         * Returns information about how the barcode is rendered.
         */
    function () { return; };
    ;
    /**
     * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
     */
    /**
         * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
         */
    IgQRCodeBarcodeComponent.prototype.flush = /**
         * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
         */
    function () { return; };
    ;
    /**
     * Destroys widget.
     */
    /**
         * Destroys widget.
         */
    IgQRCodeBarcodeComponent.prototype.destroy = /**
         * Destroys widget.
         */
    function () { return; };
    ;
    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    /**
         * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
         */
    IgQRCodeBarcodeComponent.prototype.styleUpdated = /**
         * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
         */
    function () { return; };
    ;
    IgQRCodeBarcodeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-q-r-code-barcode",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "backingBrush", "backingOutline", "backingStrokeThickness", "barBrush", "fontBrush", "font", "data", "errorMessageText", "stretch", "barsFillMode", "widthToHeightRatio", "xDimension", "errorCorrectionLevel", "sizeVersion", "encodingMode", "eciNumber", "eciHeaderDisplayMode", "fnc1Mode", "applicationIndicator"],
                    outputs: ["errorMessageDisplaying", "dataChanged"]
                },] },
    ];
    /** @nocollapse */
    IgQRCodeBarcodeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgQRCodeBarcodeComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgQRCodeBarcodeComponent = IgQRCodeBarcodeComponent;
//# sourceMappingURL=igqrcodebarcode.component.js.map