import { Component, NgModule } from '@angular/core';
import { IgTreeComponent } from "../../src/igniteui.angular2.js";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }	from '@angular/platform-browser-dynamic';
import { ProductCategories } from "./../data/product-categories.js";

declare var jQuery: any;
@Component({
	selector: 'my-app',
	templateUrl:"../igTree/igTreeTemplate.html"
})
export class AppComponent {
	protected options: IgTree;
	protected data: any;
	protected newProductCategory: any;
	protected newProductSubcategory: any;
	
	constructor() {
		this.data = ProductCategories.getData();
		this.newProductCategory= {  "Name": "",
			"ProductCategoryID": this.data.length+1, 
			"ProductSubcategories":[]   
	};
			
		this.newProductSubcategory={
			"Name": "",
			"ProductSubcategoryID": 0
		};
		this.options = {
			dataSource: this.data,
			bindings: {
				childDataProperty : "ProductSubcategories",
				textKey : "Name",
				valueKey : "ProductCategoryID"
			}
		};
	}
	
	addNodeRootLevel(){
		this.data.push({"Name": "New Node", "ProductCategoryID": this.data.length + 1, "ProductSubcategories":[] });
		this.newProductCategory.ProductCategoryID = this.data.length + 1;
	}
	addProductCategory(){
	this.data.push(JSON.parse(JSON.stringify(this.newProductCategory)));   
	this.newProductCategory.ProductCategoryID = this.data.length + 1;
		
	}
	addProductSubcategory (index){  
	this.data[index].ProductSubcategories.push(JSON.parse(JSON.stringify(this.newProductSubcategory)));	
	this.newProductSubcategory.ProductSubcategoryID = this.data[index].ProductSubcategories.length + 1;
		
	}
	deleteProductCategory(index){
		this.data.removeAt(index);
	}
	
	deleteProductSubcategory(index, subIndex){
		this.data[index].ProductSubcategories.removeAt(subIndex);
	}
	
	removeSelectedNode(){
		var selected = jQuery('#tree1').igTree('selectedNode');
			if (selected.path !== null) {
				jQuery('#tree1').igTree('removeAt', selected.path);
			} else {
				alert('Select a node from the tree first');
			}
	}
}

@NgModule({
	imports:	  [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, IgTreeComponent ],
	bootstrap:	[ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);