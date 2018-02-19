import { IgControlBase } from "./igcontrolbase";
import { ElementRef, Renderer, KeyValueDiffers } from "@angular/core";


export class IgContentControlBase<Model> extends IgControlBase<Model> {
	private childNodes: Array<any>;

	constructor(el: ElementRef, renderer: Renderer, differs: KeyValueDiffers) {
		super(el, renderer, differs);
		this.childNodes = el.nativeElement.childNodes;
	}

	ngOnInit() {
		jQuery(this._el).append(this.childNodes);
		super.ngOnInit();
	}
}