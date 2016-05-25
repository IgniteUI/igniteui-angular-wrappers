import {Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core';
import {IgGridComponent} from "../src/igniteui.angular2.ts";

declare var jQuery: any;
@Component({
	selector: 'my-app',
	template: `
		<ig-grid [(options)]="gridOptions" [(widgetId)]='id' (cellClick)="cellClickHandler($event)" (rendering)='renderedEventHandler($event)' ></ig-grid>
		`,
	directives: [IgGridComponent]
})
export class AppComponent {
	private gridOptions: IgGrid;
	private cellClickHandler: any;
	private renderedEventHandler:any;
    private data: Array<any>;
    private id: string = "grid1";

	constructor() {
		this.data = [{
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(1)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 1,
            "ProductName": "Chai",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "10 boxes x 20 bags",
            "UnitPrice": "18.0000",
            "UnitsInStock": 39,
            "UnitsOnOrder": 0,
            "ReorderLevel": 10,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(1)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(1)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(1)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(2)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 2,
            "ProductName": "Chang",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "24 - 12 oz bottles",
            "UnitPrice": "19.0000",
            "UnitsInStock": 17,
            "UnitsOnOrder": 40,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(2)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(2)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(2)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(3)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 3,
            "ProductName": "Aniseed Syrup",
            "SupplierID": 1,
            "CategoryID": 2,
            "QuantityPerUnit": "12 - 550 ml bottles",
            "UnitPrice": "10.0000",
            "UnitsInStock": 13,
            "UnitsOnOrder": 70,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(3)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(3)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(3)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(4)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 4,
            "ProductName": "Chef Anton's Cajun Seasoning",
            "SupplierID": 2,
            "CategoryID": 2,
            "QuantityPerUnit": "48 - 6 oz jars",
            "UnitPrice": "22.0000",
            "UnitsInStock": 53,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(4)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(4)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(4)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(5)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 5,
            "ProductName": "Chef Anton's Gumbo Mix",
            "SupplierID": 2,
            "CategoryID": 2,
            "QuantityPerUnit": "36 boxes",
            "UnitPrice": "21.3500",
            "UnitsInStock": 0,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": true,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(5)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(5)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(5)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(6)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 6,
            "ProductName": "Grandma's Boysenberry Spread",
            "SupplierID": 3,
            "CategoryID": 2,
            "QuantityPerUnit": "12 - 8 oz jars",
            "UnitPrice": "25.0000",
            "UnitsInStock": 120,
            "UnitsOnOrder": 0,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(6)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(6)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(6)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(7)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 7,
            "ProductName": "Uncle Bob's Organic Dried Pears",
            "SupplierID": 3,
            "CategoryID": 7,
            "QuantityPerUnit": "12 - 1 lb pkgs.",
            "UnitPrice": "30.0000",
            "UnitsInStock": 15,
            "UnitsOnOrder": 0,
            "ReorderLevel": 10,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(7)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(7)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(7)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(8)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 8,
            "ProductName": "Northwoods Cranberry Sauce",
            "SupplierID": 3,
            "CategoryID": 2,
            "QuantityPerUnit": "12 - 12 oz jars",
            "UnitPrice": "40.0000",
            "UnitsInStock": 6,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(8)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(8)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(8)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(9)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 9,
            "ProductName": "Mishi Kobe Niku",
            "SupplierID": 4,
            "CategoryID": 6,
            "QuantityPerUnit": "18 - 500 g pkgs.",
            "UnitPrice": "97.0000",
            "UnitsInStock": 29,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": true,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(9)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(9)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(9)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(10)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 10,
            "ProductName": "Ikura",
            "SupplierID": 4,
            "CategoryID": 8,
            "QuantityPerUnit": "12 - 200 ml jars",
            "UnitPrice": "31.0000",
            "UnitsInStock": 31,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(10)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(10)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(10)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(11)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 11,
            "ProductName": "Queso Cabrales",
            "SupplierID": 5,
            "CategoryID": 4,
            "QuantityPerUnit": "1 kg pkg.",
            "UnitPrice": "21.0000",
            "UnitsInStock": 22,
            "UnitsOnOrder": 30,
            "ReorderLevel": 30,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(11)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(11)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(11)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(12)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 12,
            "ProductName": "Queso Manchego La Pastora",
            "SupplierID": 5,
            "CategoryID": 4,
            "QuantityPerUnit": "10 - 500 g pkgs.",
            "UnitPrice": "38.0000",
            "UnitsInStock": 86,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(12)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(12)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(12)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(13)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 13,
            "ProductName": "Konbu",
            "SupplierID": 6,
            "CategoryID": 8,
            "QuantityPerUnit": "2 kg box",
            "UnitPrice": "6.0000",
            "UnitsInStock": 24,
            "UnitsOnOrder": 0,
            "ReorderLevel": 5,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(13)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(13)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(13)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(14)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 14,
            "ProductName": "Tofu",
            "SupplierID": 6,
            "CategoryID": 7,
            "QuantityPerUnit": "40 - 100 g pkgs.",
            "UnitPrice": "23.2500",
            "UnitsInStock": 35,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(14)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(14)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(14)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(15)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 15,
            "ProductName": "Genen Shouyu",
            "SupplierID": 6,
            "CategoryID": 2,
            "QuantityPerUnit": "24 - 250 ml bottles",
            "UnitPrice": "15.5000",
            "UnitsInStock": 39,
            "UnitsOnOrder": 0,
            "ReorderLevel": 5,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(15)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(15)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(15)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(16)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 16,
            "ProductName": "Pavlova",
            "SupplierID": 7,
            "CategoryID": 3,
            "QuantityPerUnit": "32 - 500 g boxes",
            "UnitPrice": "17.4500",
            "UnitsInStock": 29,
            "UnitsOnOrder": 0,
            "ReorderLevel": 10,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(16)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(16)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(16)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(17)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 17,
            "ProductName": "Alice Mutton",
            "SupplierID": 7,
            "CategoryID": 6,
            "QuantityPerUnit": "20 - 1 kg tins",
            "UnitPrice": "39.0000",
            "UnitsInStock": 0,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": true,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(17)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(17)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(17)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(18)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 18,
            "ProductName": "Carnarvon Tigers",
            "SupplierID": 7,
            "CategoryID": 8,
            "QuantityPerUnit": "16 kg pkg.",
            "UnitPrice": "62.5000",
            "UnitsInStock": 42,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(18)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(18)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(18)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(19)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 19,
            "ProductName": "Teatime Chocolate Biscuits",
            "SupplierID": 8,
            "CategoryID": 3,
            "QuantityPerUnit": "10 boxes x 12 pieces",
            "UnitPrice": "9.2000",
            "UnitsInStock": 25,
            "UnitsOnOrder": 0,
            "ReorderLevel": 5,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(19)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(19)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(19)/Supplier"
                }
            }
        }, {
            "__metadata": {
                "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(20)",
                "type": "NorthwindModel.Product"
            },
            "ProductID": 20,
            "ProductName": "Sir Rodney's Marmalade",
            "SupplierID": 8,
            "CategoryID": 3,
            "QuantityPerUnit": "30 gift boxes",
            "UnitPrice": "81.0000",
            "UnitsInStock": 40,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(20)/Category"
                }
            },
            "Order_Details": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(20)/Order_Details"
                }
            },
            "Supplier": {
                "__deferred": {
                    "uri": "http://services.odata.org/Northwind/Northwind.svc/Products(20)/Supplier"
                }
            }
        }
        ];

			this.cellClickHandler= function(ui){
				console.log("grid cell click");
				
			};

			this.renderedEventHandler= function(ui){
				console.log("grid is rendered.");
				
			};

		this.gridOptions = {
            dataSource: this.data,
            width: "100%",
            primaryKey: "ProductID",
            autoCommit: true,
            autoGenerateColumns: false,
            columns: [
                   { "headerText": "Product ID", "key": "ProductID", "dataType": "number", "width": "10%" },
                   { "headerText": "Name", "key": "ProductName", "dataType": "string", "width": "40%" },
                   { "headerText": "Quantity per unit", "key": "QuantityPerUnit", "dataType": "string", "width": "25%" },
                   { "headerText": "Unit Price", "key": "UnitPrice", "dataType": "string", "width": "25%" }
            ],
            features: [{
                name: "Updating",
                columnSettings: [{
                    columnKey: "ProductID",
                    readOnly: true
                }]
            }, {
                name: "Paging",
                pageSize: 10
            }, {
                name: "Filtering"
            }, {
                name: "Sorting"
            }]
        };
	}
}
