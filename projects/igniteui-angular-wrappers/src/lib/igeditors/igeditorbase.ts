import { IgControlBase } from '../igcontrolbase/igcontrolbase';
import { ControlValueAccessor, NgModel } from '@angular/forms';
import { ElementRef, IterableDiffers, Optional, KeyValueDiffers, ChangeDetectorRef, Renderer2, Directive } from '@angular/core';

@Directive()
export class IgEditorBase<Model> extends IgControlBase<Model> implements ControlValueAccessor {
    protected _model: any;

    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef, @Optional() public model: NgModel) {
        super(el, renderer, differs, kvalDiffers, cdr);
        if (model) {
            model.valueAccessor = this;
            this._model = model;
        }
    }

    ngOnInit() {
        const that = this;
        super.ngOnInit();
        if (this._model) {
            jQuery(this._el).on(this._widgetName.toLowerCase() + 'valuechanged', function(evt, ui) {
                that.onChange(ui.newValue);
            });
            if (this._widgetName === 'igTextEditor') {
                jQuery(this._el).on(this._widgetName.toLowerCase() + 'textchanged', function(evt, ui) {
                    that.onChange(ui.text);
                });
            }
            jQuery(this._el).on(this._widgetName.toLowerCase() + 'blur', function(evt, ui) {
                that.onTouched();
            });
            // manually call writeValue, because the LifeCycle has been changed and writeValue is executed before ngOnInit
            this.writeValue(this._model.value);
        }
    }

    writeValue(value: any) {
        if (!!jQuery(this._el).data(this._widgetName) && value !== null) {
            jQuery(this._el)[this._widgetName]('value', value);
        }
    }

    onChange = (_: any) => {
    }
    onTouched = () => {
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }
}
