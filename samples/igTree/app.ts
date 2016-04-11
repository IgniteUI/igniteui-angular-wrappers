import { Component, Inject, ElementRef, EventEmitter, HostListener} from 'angular2/core';
import { IgTreeComponent} from "../../src/igniteui.angular2.ts";
import {bootstrap }    from 'angular2/platform/browser'
import {ProductCategories} from "./../data/product-categories.ts";
declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `
        <div class="col-md-3">
            <ig-tree widgetId="tree1" [(options)]="options">             
            </ig-tree>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-sm-4">Add a new root-level node</div>
                <div class="col-md-3"><input type="button" class="btn btn-default btn-info" (click)="addNodeRootLevel()" value="Add" /></div>
            </div>
            <div class="row push-down-xs">
                <div class="col-sm-4">Add a new root-level node (by name)</div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input class="form-control" placeholder="new product name" type="text" [(ngModel)]="newProductCategory.Name">
                                <span class="input-group-addon text-muted">{{newProductCategory.ProductCategoryID}}</span>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <input class="btn btn-default btn-info btn" type="button" value="Add" (click)="addProductCategory($index)" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row push-down-xs">
                <div class="col-sm-4">Remove the selected node from the tree</div>
                <div class="col-md-3"><input type="button" class="btn btn-default btn-info" (click)="removeSelectedNode()" value="Delete" /></div>
            </div>
            
             <table id="treesampletable" class="table table-striped push-down-xs">
                <tbody>
                    <tr *ngFor="#pc of data; #i = index">
                        <td>{{pc.ProductCategoryID}}</td>
                        <td class="col-sm-3"><input class="form-control" type="text" [(ngModel)]="pc.Name"></td>
                        <td><input class="btn btn-default btn-info btn-sm" type="button" value="Delete" (click)="deleteProductCategory(i)" /></td>
                        <td>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input class="form-control" 
                                               type="text" 
                                               placeholder="product name"
                                               [(ngModel)]="newProductSubcategory.Name">
                                        <span class="input-group-addon text-muted" >{{pc.ProductSubcategories.length}}</span>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <input class="btn btn-default btn-info btn-sm" 
                                           type="button" 
                                           value="Add" 
                                           (click)="addProductSubcategory(i)" />
                                </div>
                            </div>
                            <hr />
                            <div *ngFor="#ps of pc.ProductSubcategories, #j = index">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input class="form-control" type="text" [(ngModel)]="ps.Name">
                                    </div>
                                    <div class="col-sm-1">
                                        <input 
                                               class="btn btn-default btn-info btn-sm"
                                               type="button"
                                               value="Delete"
                                               (click)="deleteProductSubcategory(i, j)" />
                                    </div>
                                </div>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>

          
            </div>
    `,
	directives: [IgTreeComponent]
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
bootstrap(AppComponent);