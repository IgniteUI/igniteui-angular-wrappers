import { ElementRef, Directive } from "@angular/core";
import { Feature } from "../feature";
import { Column } from "../column.directive";


@Directive({
	selector: 'multi-column-headers',
	inputs: ["inherit"],
	outputs: ["groupCollapsing","groupCollapsed","groupExpanding","groupExpanded"]
})
export class IgGridMultiColumnHeadersFeature extends Feature<IgGridMultiColumnHeaders> {	
	constructor(el: ElementRef) {
		super(el);
	}

    /**
      * Destroys the widget
     */
    public destroy(): void { return; } ;

    /**
      * Collapses an expanded group. If the group is collapsed, the method does nothing.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public collapseGroup(groupKey: string, callback?: Function): void { return; } ;
    /**
	  * Expands a collapsed group. If the group is expanded, the method does nothing.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public expandGroup(groupKey: string, callback?: Function): void { return; } ;
    /**
      * Returns multicolumn headers array. if there aren"t multicolumn headers returns undefined.
     */
	public getMultiColumnHeaders(): Array<Column> { return; } ;
    /**
      * Toggles a collapsible group.
	  * Note: This method is asynchronous which means that it returns immediately and any subsequent code will execute in parallel. This may lead to runtime errors. To avoid them put the subsequent code in the callback parameter provided by the method.
     */
	public toggleGroup(groupKey: string, callback?: Function): void { return; } ;
}