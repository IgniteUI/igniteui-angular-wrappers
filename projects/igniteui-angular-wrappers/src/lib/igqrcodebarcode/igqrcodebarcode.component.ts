import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-q-r-code-barcode",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "backingBrush", "backingOutline", "backingStrokeThickness", "barBrush", "fontBrush", "font", "data", "errorMessageText", "stretch", "barsFillMode", "widthToHeightRatio", "xDimension", "errorCorrectionLevel", "sizeVersion", "encodingMode", "eciNumber", "eciHeaderDisplayMode", "fnc1Mode", "applicationIndicator"],
    outputs: ["errorMessageDisplaying", "dataChanged"]
})
export class IgQRCodeBarcodeComponent extends IgControlBase<IgQRCodeBarcode> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) { super(el, renderer, differs, kvalDiffers, cdr); } public option(): void { return; };

    /**
     * Returns information about how the barcode is rendered.
     */
    /* istanbul ignore next */
    public exportVisualData(): Object { return; };

    /**
     * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
     */
    /* istanbul ignore next */
    public flush(): void { return; };

    /**
     * Destroys widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; };

    /**
     * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
     */
    /* istanbul ignore next */
    public styleUpdated(): void { return; };
}