import { Component, NgModule, ViewChild, ElementRef } from "@angular/core";
import { IgGridComponent } from "../../src/main";
import { FormsModule } from "@angular/forms";
import { Northwind } from "./../data/northwind";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

declare var jQuery: any;
@Component({
  selector: "my-app",
  templateUrl: "./igGrid-ExcelExporterTemplate.html"
})
export class AppComponent {
  private gridOptions: IgGrid;
  private id: string;
  private data: any;
  private newProduct: any;
  @ViewChild("grid1")
  grid: IgGridComponent;
  //private deleteRecord: any;

  @ViewChild("btn")
  exportBtn: ElementRef;

  constructor() {
    this.data = Northwind.getData();

    this.id = "grid1";
    this.gridOptions = {
      autoCommit: true,
      width: "100%",
      height: "400px",
      autoGenerateColumns: false,
      columns: [
        {
          key: "ProductID",
          headerText: "Product ID",
          width: "50px",
          dataType: "number"
        },
        {
          key: "ProductName",
          headerText: "Name",
          width: "350px",
          dataType: "string"
        },
        {
          key: "QuantityPerUnit",
          headerText: "Quantity per unit",
          width: "250px",
          dataType: "string"
        },
        {
          key: "UnitPrice",
          headerText: "Unit Price",
          width: "100px",
          dataType: "number",
          template: jQuery("#colTmpl").html()
        }
      ],
      primaryKey: "ProductID",
      features: [
        {
          name: "Updating",
          columnSettings: [{ columnKey: "ProductID", readOnly: true }]
        },
        {
          name: "Sorting"
        }
      ]
    };
  }

  public exportExcelGrid() {
    jQuery.ig.GridExcelExporter.exportGrid($("#grid1"), {
      fileName: "igGrid",
      gridStyling: $("#styling").igCheckboxEditor("value") ? "applied" : "none",
      gridFeatureOptions: {
        sorting: $("#sorting").igCheckboxEditor("value") ? "applied" : "none"
      }
    });
  }

  deleteRecord(val) {
    var ind = 0;
    this.data.filter(function(item, index) {
      if (item["ProductID"] === val) {
        ind = index;
      }
      return item["ProductID"] === val;
    });
    this.data.splice(ind, 1);
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, IgGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
