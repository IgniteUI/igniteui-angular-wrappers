import { ElementRef, EventEmitter, IterableDiffers, DoCheck, SimpleChanges, Input, ChangeDetectorRef, KeyValueDiffers, Renderer2, Directive } from '@angular/core';

declare var jQuery: any;

const NODES = {
    'ig-text-editor': 'div',
    'ig-numeric-editor': 'input',
    'ig-percent-editor': 'input',
    'ig-mask-editor': 'input',
    'ig-date-picker': 'input',
    'ig-time-picker': 'input',
    'ig-date-editor': 'input',
    'ig-currency-editor': 'input',
    'ig-checkbox-editor': 'input',
    'ig-html-editor': 'div',
    'ig-combo': 'input',
    'ig-grid': 'table',
    'ig-tree-grid': 'table',
    'ig-hierarchical-grid': 'table',
    'ig-pivot-data-selector': 'div',
    'ig-pivot-grid': 'table',
    'ig-data-chart': 'div',
    'ig-pie-chart': 'div',
    'ig-doughnut-chart': 'div',
    'ig-funnel-chart': 'div',
    'ig-radial-gauge': 'div',
    'ig-sparkline': 'div',
    'ig-zoombar': 'div',
    'ig-map': 'div',
    'ig-bullet-graph': 'div',
    'ig-linear-gauge': 'div',
    'ig-q-r-code-barcode': 'div',
    'ig-validator': 'div',
    'ig-upload': 'div',
    'ig-popover': 'div',
    'ig-rating': 'div',
    'ig-video-player': 'div',
    'ig-radial-menu': 'div',
    'ig-split-button': 'div',
    'ig-notifier': 'div',
    'ig-tree': 'div',
    'ig-dialog': 'div',
    'ig-splitter': 'div',
    'ig-layout-manager': 'div',
    'ig-tile-manager': 'div',
    'ig-spreadsheet': 'div',
    'ig-scheduler': 'div'
};

@Directive()
export class IgControlBase<Model> implements DoCheck {
    @Input()
    public options: any = {};

    protected _differs: any;
    protected _el: any;
    protected _widgetName: string;
    protected _differ: any;
    protected _optsDiffer: any;
    protected _kvalDiffers: any;
    protected _events: Map<string, string>;
    private _evtEmmiters: any = {};
    private _nativeElement: any;
    public widgetId: string;

    constructor(el: ElementRef, renderer: Renderer2, differs: IterableDiffers, public kvalDiffers: KeyValueDiffers, public cdr: ChangeDetectorRef) {
        this._differs = differs;
        this._nativeElement = el.nativeElement;
        this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase()); // ig-grid -> igGrid
        this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));

        for (const propt in jQuery.ui[this._widgetName].prototype.events) {
            this[propt] = new EventEmitter();
            // cahcing the event emmitters for cases when the event name is the same as a method name.
            this._evtEmmiters[propt] = this[propt];
        }
    }

    createSetter(name) {
        return function(value) {
            this.options[name] = value;
            if (this._config) {
                this._config[name] = value;
            }
            if (jQuery.ui[this._widgetName] &&
                jQuery.ui[this._widgetName].prototype.options &&
                jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(name) &&
                jQuery(this._el).data(this._widgetName)) {
                jQuery(this._el)[this._widgetName]('option', name, value);
            }
        };
    }

    ngOnInit() {
        let evtName;
        const that = this;
        this._events = new Map<string, string>();

        for (const opt in jQuery.ui[this._widgetName].prototype.options) {
            // copy root level options into this.options
            if (this[opt] && typeof this[opt] !== 'function') {
                this.options[opt] = this[opt];
            }
        }

        for (const opt in jQuery.ui[this._widgetName].prototype.options) {
            if (opt !== 'dataSource') {
                object.defineProperty(this, opt, {
                    set: this.createSetter(opt),
                    enumerable: true,
                    configurable: true
                });
            }
        }

        const propNames = jQuery.ui[this._widgetName].prototype;
        for (const name in propNames) {
            if (name.indexOf('_') !== 0 && typeof jQuery.ui[this._widgetName].prototype[name] === 'function'
                && name !== 'dataSource') {
                object.defineProperty(that, name, {
                    get: that.createMethodGetter(name)
                });
            }
        }
        // events binding
        for (const propt in jQuery.ui[this._widgetName].prototype.events) {
            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
            this._events[evtName] = propt;
            jQuery(this._el).on(evtName, function(evt, ui) {
                const emmiter = that._evtEmmiters[that._events[evt.type]];
                emmiter.emit({ event: evt, ui });
            });
        }

        jQuery(this._el).attr('id', this.widgetId);
        jQuery(this._el)[this._widgetName](this.options);
    }
    createMethodGetter(name) {
        return () => {
            const widget = jQuery(this._el).data(this._widgetName);
            return jQuery.proxy(widget[name], widget);
        };
    }

    ngDoCheck() {
        if (this._optsDiffer) {
            const changes = this._optsDiffer.diff(this.options);
            if (changes) {
                changes.forEachChangedItem((change: any) => {
                    this[change.key] = change.currentValue;
                });
            }
        }
    }
    public ngOnChanges(changes: SimpleChanges): void {
        const opts = 'options';
        if (opts in changes) {
            const value = changes[opts].currentValue;
            // options have been changed. Destroy and re-create widget.
            if (jQuery(this._el).data(this._widgetName)) {
                jQuery(this._el)[this._widgetName]('destroy');
                jQuery(this._el)[this._widgetName](this.options);
            }
            try {
                this._optsDiffer = this.kvalDiffers.find({}).create();
            } catch (e) {
                throw new Error('Only binding to object is supported for options property.');
            }
        }
    }
    public markForCheck() {
        this.cdr.markForCheck();
    }

    convertToCamelCase(str) {
        // convert hyphen to camelCase
        return str.replace(/-([a-z])/g, function(group) {
            return group[1].toUpperCase();
        });
    }

    ngOnDestroy() {
        // igZoombar should be attached to body when being destroyed
        if (this._widgetName !== 'igZoombar' || document.body.contains(this._el)) {
            jQuery(this._el)[this._widgetName]('destroy');
            jQuery(this._el).remove();
            jQuery(this._nativeElement).remove();
        }
    }
}
