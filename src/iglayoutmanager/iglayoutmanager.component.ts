import { ElementRef, Renderer, IterableDiffers, Component } from "@angular/core";
import { IgContentControlBase } from "../igcontrolbase/igcontentcontrolbase";

@Component({
	selector: "ig-layout-manager",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","borderLayout","gridLayout","height","itemCount","items","layoutMode","width"],
	outputs: ["internalResized","internalResizing","itemRendered","itemRendering","rendered"]
})
export class IgLayoutManagerComponent extends IgContentControlBase<IgLayoutManager> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Triggers recalculation of the layout dimensions. Layouts may not need to be reflowed manually, if their sizes are in percentages (i.e. they are responsive by default)
	 *                     this can be particularly useful with a grid layout, when the container has percentage sizes, but items are calculated in pixels and positioned absolutely in the container.
	 *
	 * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
	 * @param animationDuration The animation duration to be used for this reflow only. Supported only for Grid Layout mode.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public reflow(forceReflow?: boolean, animationDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Destroy is part of the jQuery UI widget API and does the following:
	 *                     1. Remove custom CSS classes that were added.
	 *                     2. Remove any elements that were added at widget's initialization and after that, which didn't below to the original markup
	 *                     3. Unbind all events that were bound.
	 */
	public destroy(): void { return; } ;
}