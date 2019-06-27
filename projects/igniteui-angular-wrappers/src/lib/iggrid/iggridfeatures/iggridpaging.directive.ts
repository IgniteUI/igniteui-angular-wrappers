import { Directive, ElementRef } from "@angular/core";
import { Feature } from "../feature";

@Directive({
	selector: 'paging',
	inputs: ["disabled","create","pageSize","recordCountKey","pageSizeUrlKey","pageIndexUrlKey","currentPageIndex","type","showPageSizeDropDown","pageSizeDropDownLabel","pageSizeDropDownTrailingLabel","pageSizeDropDownLocation","showPagerRecordsLabel","pagerRecordsLabelTemplate","nextPageLabelText","prevPageLabelText","firstPageLabelText","lastPageLabelText","showFirstLastPages","showPrevNextPages","currentPageDropDownLeadingLabel","currentPageDropDownTrailingLabel","currentPageDropDownTooltip","pageSizeDropDownTooltip","pagerRecordsLabelTooltip","prevPageTooltip","nextPageTooltip","firstPageTooltip","lastPageTooltip","pageTooltipFormat","pageSizeList","pageCountLimit","visiblePageCount","defaultDropDownWidth","delayOnPageChanged","persist","inherit"],
	outputs: ["pageIndexChanging","pageIndexChanged","pageSizeChanging","pageSizeChanged","pagerRendering","pagerRendered"]
})
export class IgGridPagingFeature extends Feature<IgGridPaging> {	
	constructor(el: ElementRef) {
		super(el);
	}

	/**
	 * Gets/Sets the current page index, delegates data binding and paging to [$.ig.DataSource](ig.datasource).
	 *
	 * @param index     The page index to go to.
	 */
	public pageIndex(index?: number): number { return; } ;

	/**
	 * Gets/Sets the page size. If no parameter is specified, just returns the current page size.
	 *
	 * @param size     The new page size.
	 */
	public pageSize(size?: number): number { return; } ;

	/**
	 * Destroys the igGridPaging feature by removing all elements in the pager area, unbinding events, and resetting data to discard data filtering on paging.
	 */
	public destroy(): void { return; } ;
}