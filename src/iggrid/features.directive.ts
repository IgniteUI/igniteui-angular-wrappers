import { Directive, AfterContentInit, ContentChild } from "@angular/core";
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