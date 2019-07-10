import { IgControlBase } from "./igcontrolbase";
import { ElementRef, Renderer, KeyValueDiffers, IterableDiffers, ChangeDetectorRef } from "@angular/core";


export class IgContentControlBase<Model> extends IgControlBase<Model> {
	private childNodes: Array<any>;

	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
		super(el, renderer, differs, kvalDiffers, cdr);
		this.childNodes = el.nativeElement.childNodes;
	}

	ngOnInit() {
		jQuery(this._el).append(this.childNodes);
		super.ngOnInit();
	}
}