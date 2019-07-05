import { Component, Renderer, IterableDiffers, ElementRef, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-radial-menu",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "items", "currentOpenMenuItemName", "centerButtonContentWidth", "centerButtonContentHeight", "centerButtonClosedFill", "centerButtonClosedStroke", "centerButtonFill", "centerButtonHotTrackFill", "centerButtonHotTrackStroke", "centerButtonStroke", "centerButtonStrokeThickness", "font", "isOpen", "menuBackground", "menuItemOpenCloseAnimationDuration", "menuItemOpenCloseAnimationEasingFunction", "menuOpenCloseAnimationDuration", "menuOpenCloseAnimationEasingFunction", "minWedgeCount", "outerRingFill", "outerRingThickness", "outerRingStroke", "outerRingStrokeThickness", "rotationInDegrees", "rotationAsPercentageOfWedge", "wedgePaddingInDegrees", "pixelScalingRatio"],
    outputs: ["formatLabel", "alignLabel", "valueChanged"]
})
export class IgRadialMenuComponent extends IgControlBase<IgRadialMenu> {
    constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }
    /* istanbul ignore next */
    public itemOption(itemKey: Object, key: Object, value: Object): void { return; };
    /* istanbul ignore next */
    public exportVisualData(): void { return; };
    /* istanbul ignore next */
    public flush(): void { return; };
    /* istanbul ignore next */
    public destroy(): void { return; };
    /* istanbul ignore next */
    public styleUpdated(): void { return; };
}