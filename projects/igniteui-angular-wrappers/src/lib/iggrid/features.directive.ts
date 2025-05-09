import { Directive, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { IgGridSortingFeature } from './iggridfeatures/iggridsorting.directive';
import { IgGridFilteringFeature } from './iggridfeatures/iggridfiltering.directive';
import { IgGridPagingFeature } from './iggridfeatures/iggridpaging.directive';
import { IgGridUpdatingFeature } from './iggridfeatures/iggridupdating.directive';
import { IgGridGroupByFeature } from './iggridfeatures/iggridgroupby.directive';
import { IgGridColumnMovingFeature } from './iggridfeatures/iggridcolumnmoving';
import { IgGridHidingFeature } from './iggridfeatures/iggridhiding.directive';
import { IgGridCellMergingFeature } from './iggridfeatures/iggridcellmerging.directive';
import { IgGridResponsiveFeature } from './iggridfeatures/iggridresponsive.directive';
import { IgGridResizingFeature } from './iggridfeatures/iggridresizing.directive';
import { IgGridSelectionFeature } from './iggridfeatures/iggridselection.directive';
import { IgGridRowSelectorsFeature } from './iggridfeatures/iggridrowselectors.directive';
import { IgGridSummariesFeature } from './iggridfeatures/iggridsummaries.directive';
import { IgGridColumnFixingFeature } from './iggridfeatures/iggridcolumnfixing.directive';
import { IgGridTooltipsFeature } from './iggridfeatures/iggridtooltips.directive';
import { IgGridAppendRowsOnDemandFeature } from './iggridfeatures/iggridappendrowsondemand.directive';
import { IgGridMultiColumnHeadersFeature } from './iggridfeatures/iggridmulticolumnheaders.directive';

@Directive({
    selector: 'features',
    standalone: false
})
export class Features implements AfterContentInit {
  public allFeatures: Array<any> = new Array<any>();

  @ContentChild(IgGridSortingFeature, { static: true }) sorting: IgGridSortingFeature;
  @ContentChild(IgGridFilteringFeature, { static: true }) filtering: IgGridFilteringFeature;
  @ContentChild(IgGridPagingFeature, { static: true }) paging: IgGridPagingFeature;
  @ContentChild(IgGridUpdatingFeature, { static: true }) updating: IgGridUpdatingFeature;
  @ContentChild(IgGridGroupByFeature, { static: true }) groupBy: IgGridGroupByFeature;
  @ContentChild(IgGridColumnMovingFeature, { static: true }) columnMoving: IgGridColumnMovingFeature;
  @ContentChild(IgGridHidingFeature, { static: true }) hiding: IgGridHidingFeature;
  @ContentChild(IgGridCellMergingFeature, { static: true }) cellMerging: IgGridCellMergingFeature;
  @ContentChild(IgGridResponsiveFeature, { static: true }) responsive: IgGridResponsiveFeature;
  @ContentChild(IgGridResizingFeature, { static: true }) resizing: IgGridResizingFeature;
  @ContentChild(IgGridSelectionFeature, { static: true }) selection: IgGridSelectionFeature;
  @ContentChild(IgGridRowSelectorsFeature, { static: true }) rowSelectors: IgGridRowSelectorsFeature;
  @ContentChild(IgGridSummariesFeature, { static: true }) summaries: IgGridSummariesFeature;
  @ContentChild(IgGridColumnFixingFeature, { static: true }) columnFixing: IgGridColumnFixingFeature;
  @ContentChild(IgGridTooltipsFeature, { static: true }) tooltips: IgGridTooltipsFeature;
  @ContentChild(IgGridAppendRowsOnDemandFeature, { static: true }) appendRowsOnDemand: IgGridAppendRowsOnDemandFeature;
  @ContentChild(IgGridMultiColumnHeadersFeature, { static: true }) multiColumnHeaders: IgGridMultiColumnHeadersFeature;

  addFeature(name, parent) {
    const nodeName = name.replace(/([A-Z])/g, (g) => '-' + g[0].toLowerCase());
    let el = document.createElement(nodeName);
    el = parent.appendChild(el);
    const child = new ElementRef(el);

    switch (nodeName) {
      case 'filtering': this.filtering = new IgGridFilteringFeature(child); break;
      case 'sorting': this.sorting = new IgGridSortingFeature(child); break;
      case 'paging': this.paging = new IgGridPagingFeature(child); break;
      case 'updating': this.updating = new IgGridUpdatingFeature(child); break;
      case 'group-by': this.groupBy = new IgGridGroupByFeature(child); break;
      case 'column-moving': this.columnMoving = new IgGridColumnMovingFeature(child); break;
      case 'hiding': this.hiding = new IgGridHidingFeature(child); break;
      case 'responsive': this.responsive = new IgGridResponsiveFeature(child); break;
      case 'cell-merging': this.cellMerging = new IgGridCellMergingFeature(child); break;
      case 'resizing': this.resizing = new IgGridResizingFeature(child); break;
      case 'selection': this.selection = new IgGridSelectionFeature(child); break;
      case 'row-selectors': this.rowSelectors = new IgGridRowSelectorsFeature(child); break;
      case 'summaries': this.summaries = new IgGridSummariesFeature(child); break;
      case 'column-fixing': this.columnFixing = new IgGridColumnFixingFeature(child); break;
      case 'tooltips': this.tooltips = new IgGridTooltipsFeature(child); break;
      case 'append-rows-on-demand': this.appendRowsOnDemand = new IgGridAppendRowsOnDemandFeature(child); break;
      case 'multi-column-headers': this.multiColumnHeaders = new IgGridMultiColumnHeadersFeature(child); break;
    }
    this[name].ngOnInit();
    this.allFeatures.push(this[name]);

  }
  ngAfterContentInit() {
    this.filtering ? this.allFeatures.push(this.filtering) : this.noop();
    this.sorting ? this.allFeatures.push(this.sorting) : this.noop();
    this.paging ? this.allFeatures.push(this.paging) : this.noop();
    this.updating ? this.allFeatures.push(this.updating) : this.noop();
    this.groupBy ? this.allFeatures.push(this.groupBy) : this.noop();
    this.columnMoving ? this.allFeatures.push(this.columnMoving) : this.noop();
    this.hiding ? this.allFeatures.push(this.hiding) : this.noop();
    this.responsive ? this.allFeatures.push(this.responsive) : this.noop();
    this.cellMerging ? this.allFeatures.push(this.cellMerging) : this.noop();
    this.resizing ? this.allFeatures.push(this.resizing) : this.noop();
    this.selection ? this.allFeatures.push(this.selection) : this.noop();
    this.rowSelectors ? this.allFeatures.push(this.rowSelectors) : this.noop();
    this.summaries ? this.allFeatures.push(this.summaries) : this.noop();
    this.columnFixing ? this.allFeatures.push(this.columnFixing) : this.noop();
    this.tooltips ? this.allFeatures.push(this.tooltips) : this.noop();
    this.appendRowsOnDemand ? this.allFeatures.push(this.appendRowsOnDemand) : this.noop();
    this.multiColumnHeaders ? this.allFeatures.push(this.multiColumnHeaders) : this.noop();
  }

  private noop() {}
}
