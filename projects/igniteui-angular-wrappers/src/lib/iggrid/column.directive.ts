import { ElementRef, Directive } from '@angular/core';

declare var jQuery: any;

@Directive({
    selector: 'column',
    inputs: ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass'],
    standalone: false
})
export class Column {
  public _settings: any = {};
  private _el: any;

  constructor(el: ElementRef) {
    this._el = el;
    const self = this;
    let i;
    const settings = ['headerText', 'key', 'formatter', 'format', 'dataType', 'width', 'hidden', 'template', 'unbound', 'group', 'rowspan', 'formula', 'unboundValues', 'unboundValuesUpdateMode', 'headerCssClass', 'columnCssClass'];
    for (i = 0; i < settings.length; i++) {
      Object.defineProperty(self, settings[i], {
        set: self.createColumnsSetter(settings[i]),
        get: self.createColumnsGetter(settings[i]),
        enumerable: true,
        configurable: true
      });
    }
  }

  createColumnsSetter(name) {
    return function(value) {
      const grid = jQuery(this._el.nativeElement.parentElement).find('table[role=\'grid\']');
      const columns = grid.igGrid('option', 'columns');
      this._settings[name] = value;

      if (jQuery.ui.igGrid &&
        jQuery.ui.igGrid.prototype.options &&
        jQuery.ui.igGrid.prototype.options.hasOwnProperty('columns') &&
        grid.data('igGrid')) {
        // reapply all column settings when a column setting is changed
        grid.igGrid('option', 'columns', columns);
      }
    };
  }

  createColumnsGetter(name) {
    return () => {
      return this._settings[name];
    };
  }
}
