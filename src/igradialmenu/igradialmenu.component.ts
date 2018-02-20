import { Component, Renderer, IterableDiffers, ElementRef, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-radial-menu",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","items","currentOpenMenuItemName","centerButtonContentWidth","centerButtonContentHeight","centerButtonClosedFill","centerButtonClosedStroke","centerButtonFill","centerButtonHotTrackFill","centerButtonHotTrackStroke","centerButtonStroke","centerButtonStrokeThickness","font","isOpen","menuBackground","menuItemOpenCloseAnimationDuration","menuItemOpenCloseAnimationEasingFunction","menuOpenCloseAnimationDuration","menuOpenCloseAnimationEasingFunction","minWedgeCount","outerRingFill","outerRingThickness","outerRingStroke","outerRingStrokeThickness","rotationInDegrees","rotationAsPercentageOfWedge","wedgePaddingInDegrees","pixelScalingRatio"],
	outputs: ["formatLabel","alignLabel","valueChanged"]
})
export class IgRadialMenuComponent extends IgControlBase<IgRadialMenu> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
		super(el, renderer, differs, kvalDiffers, cdr);
	}	
	public itemOption(itemKey: Object, key: Object, value: Object): void { return; } ;
	public exportVisualData(): void { return; } ;
	public flush(): void { return; } ;
	public destroy(): void { return; } ;
	public styleUpdated(): void { return; } ;
}