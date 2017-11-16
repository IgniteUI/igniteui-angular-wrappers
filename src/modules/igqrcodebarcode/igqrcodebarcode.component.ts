import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-q-r-code-barcode",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","backingBrush","backingOutline","backingStrokeThickness","barBrush","fontBrush","font","data","errorMessageText","stretch","barsFillMode","widthToHeightRatio","xDimension","errorCorrectionLevel","sizeVersion","encodingMode","eciNumber","eciHeaderDisplayMode","fnc1Mode","applicationIndicator"],
	outputs: ["errorMessageDisplaying","dataChanged"]
})
export class IgQRCodeBarcodeComponent extends IgControlBase<IgQRCodeBarcode> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Returns information about how the barcode is rendered.
	 */
	public exportVisualData(): Object { return; } ;

	/**
 	 * Causes all pending changes of the barcode e.g. by changed property values to be rendered immediately.
	 */
	public flush(): void { return; } ;

	/**
 	 * Destroys widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Re-polls the css styles for the widget. Use this method when the css styles have been modified.
	 */
	public styleUpdated(): void { return; } ;
}