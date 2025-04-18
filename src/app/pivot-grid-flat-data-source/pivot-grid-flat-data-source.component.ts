import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pivot-grid-flat-data-source',
    templateUrl: './pivot-grid-flat-data-source.component.html',
    styleUrls: ['./pivot-grid-flat-data-source.component.css'],
    standalone: false
})
export class PivotGridFlatDataSourceComponent {

  public optsGrid: IgPivotGrid;
  public optsSelector: IgPivotDataSelector;
  public selectorId: string;
  public gridId: string;
  public data: any;

  constructor() {
    this.data = new jQuery.ig.OlapFlatDataSource({
      dataSource: [
        { ProductCategory: 'Clothing', UnitPrice: 12.81, SellerName: 'Stanley Brooker', Country: 'Bulgaria', City: 'Plovdiv', Date: '01/01/2012', UnitsSold: 282 },
        // eslint-disable-next-line max-len
        { ProductCategory: 'Clothing', UnitPrice: 49.57, SellerName: 'Elisa Longbottom', Country: 'US', City: 'New York', Date: '01/05/2013', UnitsSold: 296 },
        { ProductCategory: 'Bikes', UnitPrice: 3.56, SellerName: 'Lydia Burson', Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '01/06/2011', UnitsSold: 68 },
        // eslint-disable-next-line max-len
        { ProductCategory: 'Accessories', UnitPrice: 85.58, SellerName: 'David Haley', Country: 'UK', City: 'London', Date: '04/07/2012', UnitsSold: 293 },
        // eslint-disable-next-line max-len
        { ProductCategory: 'Components', UnitPrice: 18.13, SellerName: 'John Smith', Country: 'Japan', City: 'Yokohama', Date: '12/08/2012', UnitsSold: 240 },
        { ProductCategory: 'Clothing', UnitPrice: 68.33, SellerName: 'Larry Lieb', Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '05/12/2011', UnitsSold: 456 },
        // eslint-disable-next-line max-len
        { ProductCategory: 'Components', UnitPrice: 16.05, SellerName: 'Walter Pang', Country: 'Bulgaria', City: 'Sofia', Date: '02/19/2013', UnitsSold: 492 }
      ],
      metadata: {
        cube: {
          name: 'Sales',
          caption: 'Sales',
          measuresDimension: {
            caption: 'Measures',
            measures: [ // for each measure, name and aggregator are required
              {
                caption: 'Units Sold', name: 'UnitsSold',
                // returns a function that will be used as sum aggregator on the 'UnitsSold property' of the data objects
                aggregator: jQuery.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')
              }]
          },
          dimensions: [ // for each dimension name and hierarchies are required
            {
              caption: 'Seller', name: 'Seller', hierarchies: [{
                caption: 'Seller', name: 'Seller', levels: [
                  {
                    name: 'AllSellers', caption: 'All Sellers',
                    memberProvider(item) { return 'All Sellers'; }
                  },
                  {
                    name: 'SellerName', caption: 'Seller',
                    memberProvider(item) { return item.SellerName; }
                  }]
              }]
            },
            {
              caption: 'Date', name: 'Date', /*displayFolder: "Folder1\\Folder2",*/ hierarchies: [
                jQuery.ig.OlapUtilities.prototype.getDateHierarchy(
                  'Date', // the source property name
                  ['year', 'quarter', 'month', 'date'], // the date parts for which levels will be generated (optional)
                  'Dates', // The name for the hierarchy (optional)
                  'Date', // The caption for the hierarchy (optional)
                  ['Year', 'Quarter', 'Month', 'Day'], // the captions for the levels (optional)
                  'All Periods') // the root level caption (optional)
              ]
            }
          ]
        }
      },
      // Preload hierarchies for the rows, columns, filters and measures
      rows: '[Date].[Dates]',
      columns: '[Seller].[Seller]',
      measures: '[Measures].[UnitsSold]'
    });

    this.selectorId = 'dataSelector';
    this.gridId = 'pivotGrid';

    this.optsGrid = {
      dataSource: this.data,
      height: '550px'
    };

    this.optsSelector = {
      dataSource: this.data,
      height: '550px',
      width: '25%'
    };
  }

}
