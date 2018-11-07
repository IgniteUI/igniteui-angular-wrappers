"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_1 = require("../../src/igniteui.angular2.ngfactory");
var forms_1 = require("@angular/forms");
var northwind_1 = require("./../../../data/northwind");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = /** @class */ (function () {
    //private deleteRecord: any;
    function AppComponent() {
        this.data = northwind_1.Northwind.getData();
        this.id = 'grid1';
        this.newProduct = this.createNewProduct();
        this.gridOptions = {
            autoCommit: true,
            dataSource: this.data,
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            columns: [
                { key: "ProductID", headerText: "Product ID", width: "50px", dataType: "number" },
                { key: "ProductName", headerText: "Name", width: "250px", dataType: "string" },
                { key: "QuantityPerUnit", headerText: "Quantity per unit", width: "250px", dataType: "string" },
                { key: "UnitPrice", headerText: "Unit Price", width: "100px", dataType: "number", template: jQuery("#colTmpl").html() }
            ],
            primaryKey: "ProductID",
            features: [
                {
                    name: "Updating",
                    columnSettings: [
                        { columnKey: "ProductID", readOnly: true }
                    ]
                },
                {
                    name: "Paging"
                },
                {
                    name: "Filtering"
                },
                {
                    name: "Sorting"
                }
            ]
        };
    }
    AppComponent.prototype.createNewProduct = function () {
        var newProduct = {};
        newProduct["ProductID"] = this.data.length + 1;
        newProduct["ProductName"] = null;
        newProduct["QuantityPerUnit"] = null;
        newProduct["UnitPrice"] = null;
        return newProduct;
    };
    AppComponent.prototype.addRecord = function () {
        this.data.push(this.newProduct);
        this.newProduct = this.createNewProduct();
    };
    ;
    AppComponent.prototype.deleteRecord = function (val) {
        var ind = 0;
        this.data.filter(function (item, index) {
            if (item["ProductID"] === val) {
                ind = index;
            }
            ;
            return item["ProductID"] === val;
        });
        this.data.splice(ind, 1);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./igGridTemplate-AoT.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, main_1.IgniteUIModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map