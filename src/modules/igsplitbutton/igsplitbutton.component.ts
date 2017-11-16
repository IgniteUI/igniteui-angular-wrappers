import { ElementRef, Renderer, IterableDiffers, Component } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-split-button",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","items","defaultItemName","swapDefaultEnabled"],
	outputs: ["click","expanded","expanding","collapsed","collapsing"]
})
export class IgSplitButtonComponent extends IgControlBase<IgSplitButton> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }


	/**
 	 * Switch to given igToolbar button.
	 *
	 * @param button . The button jQuery element.
	 */
	public switchToButton(button: Object): void { return; } ;


	/**
 	 * Toggle widget state between collapsed and expanded.
	 *
	 * @param e The igSplitButton to be expanded/collapsed.
	 */
	public toggle(e: Object): Object { return; } ;


	/**
 	 * Collapse the widget.
	 *
	 * @param e Indicates the browser event which triggered this action (not API).
	 */
	public collapse(e?: Object): Object { return; } ;


	/**
 	 * Expands the widget.
	 *
	 * @param e Indicates the browser event which triggered this action (not API).
	 */
	public expand(e?: Object): Object { return; } ;

	/**
 	 * Destroy the widget.
	 */
	public destroy(): void { return; } ;
	public widget(): void { return; } ;
}