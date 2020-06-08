import { IgControlBase } from "./igcontrolbase";
import { ElementRef, KeyValueDiffers, IterableDiffers, ChangeDetectorRef, Renderer2, Directive } from "@angular/core";


@Directive()
export class IgContentControlBase<Model> extends IgControlBase<Model> {
	private childNodes: Array<any>;

	constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
		super(el, renderer, differs, kvalDiffers, cdr);
		this.childNodes = el.nativeElement.childNodes;
	}

	ngOnInit() {
		jQuery(this._el).append(this.childNodes);
		super.ngOnInit();
	}
}