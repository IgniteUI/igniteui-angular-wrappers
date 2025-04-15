import { Component, ElementRef, IterableDiffers, Optional, NgZone, KeyValueDiffers, ChangeDetectorRef, Renderer2, OnInit } from '@angular/core';
import { IgControlBase } from '../igcontrolbase/igcontrolbase';
import { ControlValueAccessor, NgModel } from '@angular/forms';

declare var jQuery: any;

@Component({
    selector: 'ig-html-editor',
    template: '<ng-content></ng-content>',
    inputs: ['widgetId', 'options', 'changeDetectionInterval', 'disabled', 'create', 'showFormattingToolbar', 'showTextToolbar', 'showInsertObjectToolbar', 'showCopyPasteToolbar', 'width', 'height', 'toolbarSettings', 'customToolbars', 'inputName', 'value'],
    outputs: ['rendered', 'rendering', 'actionExecuting', 'actionExecuted', 'toolbarCollapsing', 'toolbarCollapsed', 'toolbarExpanding', 'toolbarExpanded', 'cut', 'copy', 'paste', 'undo', 'redo', 'workspaceResized'],
    standalone: false
})
export class IgHtmlEditorComponent extends IgControlBase<IgHtmlEditor> implements ControlValueAccessor, OnInit {
    protected _model: any;
    protected _zone: any;
    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers,
                @Optional() public model: NgModel, private zone: NgZone, kvalDiffers: KeyValueDiffers, cdr: ChangeDetectorRef) {
        super(el, renderer, differs, kvalDiffers, cdr);
        if (model) {
            model.valueAccessor = this;
            this._zone = zone;
            this._model = model;
        }
    }
    ngOnInit() {
        super.ngOnInit();
        if (this._model) {
            const iframe = jQuery(this._el).find('iframe')[0].contentWindow.document;
            jQuery(iframe).find('body[contenteditable=true]').on('keyup', (evt, ui) => {
                this._model.viewToModelUpdate(jQuery(evt.target).html());
                this._zone.run(() => {
                    this._model.viewToModelUpdate(jQuery(evt.target).html());
                });
            });
        }

    }
    writeValue(value: any) {
        if (!!jQuery(this._el).data(this._widgetName) && value !== null &&
          value !== jQuery(this._el)[this._widgetName]('getContent', 'html')) {
            jQuery(this._el)[this._widgetName]('setContent', value, 'html');
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

    /**
     * Returns the element on which the widget was instantiated
     */
    /* istanbul ignore next */
    public widget(): void { return; }

    /**
     * Resizes the height of the workspace
     */
    /* istanbul ignore next */
    public resizeWorkspace(): void { return; }

    /**
     * Gets the content of the html editor.
     *
     * @param format Returns the content as html or plain text. Values can be "text" or "html".
     */
    /* istanbul ignore next */
    public getContent(format: string): string { return; }

    /**
     * Sets the content of the html editor.
     *
     * @param content The content which will be set.
     * @param format The content type: "text" or "html".
     */
    /* istanbul ignore next */
    public setContent(content: string, format: string): void { return; }

    /**
     * Destroys the widget.
     */
    /* istanbul ignore next */
    public destroy(): void { return; }

    /**
     * Executes htmleditor commands.
     *
     * @param actionName The command name.
     * @param args Additional parameter for the command.
     */
    /* istanbul ignore next */
    public executeAction(actionName: string, args?: object): void { return; }

    /**
     * Returns true/false if the editor contents were modified or not.
     */
    /* istanbul ignore next */
    public isDirty(): object { return; }

    /**
     * Returns the window object associated with the Html Editor's content editable area
     */
    /* istanbul ignore next */
    public contentWindow(): object { return; }

    /**
     * Returns the document object associated with the Html Editor's content editable area
     */
    /* istanbul ignore next */
    public contentDocument(): object { return; }

    /**
     * Returns the content editable associated with this Html Editor
     */
    /* istanbul ignore next */
    public contentEditable(): object { return; }

    /**
     * Returns Selection object that represent the current selection in the content editable
     */
    /* istanbul ignore next */
    public selection(): object { return; }

    /**
     * Returns Range object that represent the current range in the content editable
     */
    /* istanbul ignore next */
    public range(): object { return; }

    /**
     * Inserts the provided content at the position of the caret.
     *
     * @param element Accepts html string, DOM element or a jQuery object.
     */
    /* istanbul ignore next */
    public insertAtCaret(element: object): void { return; }
}
