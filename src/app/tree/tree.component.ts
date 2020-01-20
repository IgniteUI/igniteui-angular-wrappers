import { Component, OnInit, ViewChild } from '@angular/core';
import { IgTreeComponent } from 'projects/igniteui-angular-wrappers/src/public-api';
import { ProductCategories } from '../shared/product-categories';

declare var jQuery: any;

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent {

    public options: IgTree;
    public data: any;
    public newProductCategory: any;
    public newProductSubcategory: any;
    @ViewChild("tree", { static: true }) tree: IgTreeComponent;

    constructor() {
        this.data = ProductCategories.getData();
        this.newProductCategory = {
            "Name": "",
            "ProductCategoryID": this.data.length + 1,
            "ProductSubcategories": []
        };

        this.newProductSubcategory = {
            "Name": "",
            "ProductSubcategoryID": 0
        };
        this.options = {
            //dataSource: this.data,
            bindings: {
                childDataProperty: "ProductSubcategories",
                textKey: "Name",
                valueKey: "ProductCategoryID"
            }
        };
    }

    addNodeRootLevel() {
        this.data.push({ "Name": "New Node", "ProductCategoryID": this.data.length + 1, "ProductSubcategories": [] });
        this.newProductCategory.ProductCategoryID = this.data.length + 1;
    }
    addProductCategory() {
        this.data.push(JSON.parse(JSON.stringify(this.newProductCategory)));
        this.newProductCategory.ProductCategoryID = this.data.length + 1;

    }
    addProductSubcategory(index) {
        this.data[index].ProductSubcategories.push(JSON.parse(JSON.stringify(this.newProductSubcategory)));
        this.newProductSubcategory.ProductSubcategoryID = this.data[index].ProductSubcategories.length + 1;
        this.tree.markForCheck();

    }
    deleteProductCategory(index) {
        this.data.removeAt(index);
    }
    updateProductSubcategory() {
        this.tree.markForCheck();
    }

    deleteProductSubcategory(index, subIndex) {
        this.data[index].ProductSubcategories.removeAt(subIndex);
        this.tree.markForCheck();
    }

    removeSelectedNode() {
        var selected = jQuery('#tree1').igTree('selectedNode');
        if (selected.path !== null) {
            jQuery('#tree1').igTree('removeAt', selected.path);
        } else {
            alert('Select a node from the tree first');
        }
    }

}
