import { Feature } from "../feature";
import { ElementRef, Directive } from "@angular/core";

@Directive({
	selector: 'tooltips',
	inputs: ["disabled","create","visibility","style","showDelay","hideDelay","columnSettings","fadeTimespan","cursorLeftOffset","cursorTopOffset","inherit"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden"]
})
export class IgGridTooltipsFeature extends Feature<IgGridTooltips> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Destroys the tooltip widget.
	 */
	public destroy(): void { return; } ;

	/**
	 * Returns the ID of the parent div element bounding the ruler and the tooltip container
	 */
	public id(): string { return; } ;
}