## IgniteUI Components Changelog 

### Features
- Allow calling component methods via the angular 2 wrapper ([#126](https://github.com/IgniteUI/igniteui-angular2/pull/126))
- Accessing grid features via the angular 2 wrapper ([#98](https://github.com/IgniteUI/igniteui-angular2/issues/98))
- Binding to grid feature events. ([#126](https://github.com/IgniteUI/igniteui-angular2/pull/126))

### BREAKING CHANGES
 - Each igGrid feature now has a separate Directive definition that needs to be imported and added to the module definition if the related feature is to be used in the grid.
	In previous versions all fetaures were imported as a single Directive definition. Example:
	
		import { Feature } from "../../src/igniteui.angular2";

	Now each feature has its own specific directive. For example for Paging feature:
	
		import { Features, IgGridPagingFeature } from "../../src/igniteui.angular2";

  
	Also the syntax for specifying the features has been changed.
 
	 OLD: 
	 
		<ig-grid ... >
			<feature [name]="'Paging'" ></feature>
			<feature [name]="'Sorting'" ></feature>
			...
		</ig-grid>
		
		
	 NEW:
	 
		<ig-grid ... >
			<features>
				<paging></paging>
				<sorting></sorting>
			</features>
		</ig-grid>
	
	