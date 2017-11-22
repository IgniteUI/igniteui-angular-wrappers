import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";

@Directive({
	selector: 'row-selectors',
	inputs: ["disabled","create","enableRowNumbering","enableCheckBoxes","rowNumberingSeed","rowSelectorColumnWidth","requireSelection","showCheckBoxesOnFocus","inherit","enableSelectAllForPaging","selectAllForPagingTemplate","deselectAllForPagingTemplate"],
	outputs: ["rowSelectorClicked","checkBoxStateChanging","checkBoxStateChanged"]
})
export class IgGridRowSelectorsFeature extends Feature<IgGridRowSelectors> {	
	constructor(el: ElementRef) {
		super(el);
	}
	public destroy(): void { return; } ;
}