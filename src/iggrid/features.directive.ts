import { Directive, AfterContentInit, ContentChild, ElementRef } from "@angular/core";
import { IgGridSortingFeature } from "./iggridfeatures/iggridsorting.directive";
import { IgGridFilteringFeature } from "./iggridfeatures/iggridfiltering.directive";
import { IgGridPagingFeature } from "./iggridfeatures/iggridpaging.directive";
import { IgGridUpdatingFeature } from "./iggridfeatures/iggridupdating.directive";
import { IgGridGroupByFeature } from "./iggridfeatures/iggridgroupby.directive";
import { IgGridColumnMovingFeature } from "./iggridfeatures/iggridcolumnmoving";
import { IgGridHidingFeature } from "./iggridfeatures/iggridhiding.directive";
import { IgGridCellMergingFeature } from "./iggridfeatures/iggridcellmerging.directive";
import { IgGridResponsiveFeature } from "./iggridfeatures/iggridresponsive.directive";
import { IgGridResizingFeature } from "./iggridfeatures/iggridresizing.directive";
import { IgGridSelectionFeature } from "./iggridfeatures/iggridselection.directive";
import { IgGridRowSelectorsFeature } from "./iggridfeatures/iggridrowselectors.directive";
import { IgGridSummariesFeature } from "./iggridfeatures/iggridsummaries.directive";
import { IgGridColumnFixingFeature } from "./iggridfeatures/iggridcolumnfixing.directive";
import { IgGridTooltipsFeature } from "./iggridfeatures/iggridtooltips.directive";
import { IgGridAppendRowsOnDemandFeature } from "./iggridfeatures/iggridappendrowsondemand.directive";
import { IgGridMultiColumnHeadersFeature } from "./iggridfeatures/iggridmulticolumnheaders.directive";

@Directive({
	selector: 'features'
})
export class Features implements AfterContentInit {
	public allFeatures:Array<any> = new Array<any>()

	@ContentChild(IgGridSortingFeature) sorting: IgGridSortingFeature;
	@ContentChild(IgGridFilteringFeature) filtering: IgGridFilteringFeature;
	@ContentChild(IgGridPagingFeature) paging: IgGridPagingFeature;
	@ContentChild(IgGridUpdatingFeature) updating: IgGridUpdatingFeature;
	@ContentChild(IgGridGroupByFeature) groupBy: IgGridGroupByFeature;
	@ContentChild(IgGridColumnMovingFeature) moving: IgGridColumnMovingFeature;
	@ContentChild(IgGridHidingFeature) hiding: IgGridHidingFeature;
	@ContentChild(IgGridCellMergingFeature) cellMerging: IgGridCellMergingFeature;
	@ContentChild(IgGridResponsiveFeature) responsive: IgGridResponsiveFeature;
	@ContentChild(IgGridResizingFeature) resizing: IgGridResizingFeature;
	@ContentChild(IgGridSelectionFeature) selection: IgGridSelectionFeature;
	@ContentChild(IgGridRowSelectorsFeature) rowSelectors: IgGridRowSelectorsFeature;
	@ContentChild(IgGridSummariesFeature) summaries: IgGridSummariesFeature;
	@ContentChild(IgGridColumnFixingFeature) columnFixing: IgGridColumnFixingFeature;
	@ContentChild(IgGridTooltipsFeature) tooltips: IgGridTooltipsFeature;
	@ContentChild(IgGridAppendRowsOnDemandFeature) appendRowsOnDemand: IgGridAppendRowsOnDemandFeature;
	@ContentChild(IgGridMultiColumnHeadersFeature) multiColumnHeaders: IgGridMultiColumnHeadersFeature;

	addFeature(name, parent){
		var nodeName = name.replace(/([A-Z])/g, function (g) { return '-' + g[0].toLowerCase() });
		var el = document.createElement(nodeName);
		el = parent.appendChild(el);
		var child = new ElementRef(el);	
		
		switch(nodeName) {
			case "filtering": this.filtering = new IgGridFilteringFeature(child);break;
			case "sorting":	this.sorting = new IgGridSortingFeature(child); break;
			case "paging": this.paging = new IgGridPagingFeature(child); break;
			case "updating": this.updating = new IgGridUpdatingFeature(child); break;
			case "group-by": this.groupBy = new IgGridGroupByFeature(child); break;
			case "moving": this.moving = new IgGridColumnMovingFeature(child); break;
			case "hiding": this.hiding = new IgGridHidingFeature(child); break;
			case "responsive": this.responsive = new IgGridResponsiveFeature(child); break;
			case "cell-merging": this.cellMerging = new IgGridCellMergingFeature(child); break;
			case "resizing": this.resizing = new IgGridResizingFeature(child); break;
			case "selection": this.selection = new IgGridSelectionFeature(child); break;
			case "row-selectors": this.rowSelectors = new IgGridRowSelectorsFeature(child); break;
			case "summaries": this.summaries = new IgGridSummariesFeature(child); break;
			case "column-fixing": this.columnFixing = new IgGridColumnFixingFeature(child); break;
			case "tooltips": this.tooltips = new IgGridTooltipsFeature(child); break;
			case "append-rows-on-demand": this.appendRowsOnDemand = new IgGridAppendRowsOnDemandFeature(child); break;
			case "multi-column-headers": this.multiColumnHeaders = new IgGridMultiColumnHeadersFeature(child); break;
		}
		this[name].ngOnInit();
		this.allFeatures.push(this[name]);

	}
  	ngAfterContentInit() {
		  		this.filtering ? this.allFeatures.push(this.filtering): null;
			   	this.sorting ? this.allFeatures.push(this.sorting): null;
				this.paging ? this.allFeatures.push(this.paging): null;
				this.updating ? this.allFeatures.push(this.updating): null;
				this.groupBy ? this.allFeatures.push(this.groupBy): null;
				this.moving ? this.allFeatures.push(this.moving): null;
				this.hiding ? this.allFeatures.push(this.hiding): null;
				this.responsive ? this.allFeatures.push(this.responsive): null;
				this.cellMerging ? this.allFeatures.push(this.cellMerging): null;
				this.resizing ? this.allFeatures.push(this.resizing): null;
				this.selection ? this.allFeatures.push(this.selection): null;
				this.rowSelectors ? this.allFeatures.push(this.rowSelectors): null;
				this.summaries ? this.allFeatures.push(this.summaries): null;
				this.columnFixing ? this.allFeatures.push(this.columnFixing): null;
				this.tooltips ? this.allFeatures.push(this.tooltips): null;
				this.appendRowsOnDemand ? this.allFeatures.push(this.appendRowsOnDemand): null;
				this.multiColumnHeaders ? this.allFeatures.push(this.multiColumnHeaders): null;
  }
}