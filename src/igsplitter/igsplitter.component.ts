import { ElementRef, Renderer, IterableDiffers, Component } from "@angular/core";
import { IgContentControlBase } from "../igcontrolbase/igcontentcontrolbase";

@Component({
	selector: "ig-splitter",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","orientation","panels","dragDelta","resizeOtherSplitters"],
	outputs: ["collapsed","expanded","resizeStarted","resizing","resizeEnded","layoutRefreshing","layoutRefreshed"]
})
export class IgSplitterComponent extends IgContentControlBase<IgSplitter> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Returns the element that represents this widget.
	 */
	public widget(): Object { return; } ;


	/**
 	 * Expand the specified panel by index.
	 *
	 * @param index Specifies the index of the panel to expand.
	 */
	public expandAt(index: Object): void { return; } ;


	/**
 	 * Collapse the specified panel.
	 *
	 * @param index Specifies the index of the panel to collapse.
	 */
	public collapseAt(index: Object): void { return; } ;


	/**
 	 * Retrieves the jQuery element of the first panel.
	 */
	public firstPanel(): Object { return; } ;


	/**
 	 * Retrieves the jQuery element of the second panel.
	 */
	public secondPanel(): Object { return; } ;


	/**
 	 * Refresh splitter layout, use this method to re-render the splitter if some changes to the layout are applied.
	 */
	public refreshLayout(): void { return; } ;


	/**
 	 * You can set new size of the first panel after the splitter is rendered.
	 *
	 * @param size Specifies the new size of the first panel.
	 */
	public setFirstPanelSize(size: Object): void { return; } ;


	/**
 	 * You can set new size of the second panel after the splitter is rendered.
	 *
	 * @param size Specifies the new size of the second panel.
	 */
	public setSecondPanelSize(size: Object): void { return; } ;

	/**
 	 * Destroys the igSplitter widget
	 */
	public destroy(): void { return; } ;
}