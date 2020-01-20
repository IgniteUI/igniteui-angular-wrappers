import { Component, ElementRef, IterableDiffers, KeyValueDiffers, ChangeDetectorRef, Renderer2 } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
    selector: "ig-zoombar",
    template: "<ng-content></ng-content>",
    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "target", "clone", "width", "height", "zoomAction", "zoomWindowMoveDistance", "defaultZoomWindow", "zoomWindowMinWidth", "hoverStyleAnimationDuration", "windowPanDuration", "tabIndex"],
    outputs: ["zoomChanging", "zoomChanged", "providerCreated", "windowDragStarting", "windowDragStarted", "windowDragging", "windowDragEnding", "windowDragEnded", "windowResizing", "windowResized"]
})
export class IgZoombarComponent extends IgControlBase<IgZoombar> {
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
    }

    /**
     * Destroys the Zoombar widget
     */
    /* istanbul ignore next */
    public destroy(): void { return; };

    /**
     * Returns the main zoombar element
     */
    /* istanbul ignore next */
    public widget(): void { return; };

    /**
     * Returns the ID of the element the zoombar is initialized on
     */
    /* istanbul ignore next */
    public id(): string { return; };

    /**
     * Returns the DIV that is the topmost container of the zoombar widget
     */
    /* istanbul ignore next */
    public container(): Element { return; };

    /**
     * Returns the element the clone widget is initialized on
     */
    /* istanbul ignore next */
    public clone(): Element { return; };

    /**
     * Gets or sets the current zoom window
     *
     * @param left     The left parameter of the new zoom window in percentages
     * @param width     The width parameter of the new zoom window in percentages
     */
    /* istanbul ignore next */
    public zoom(left?: number, width?: number): Object { return; };
}