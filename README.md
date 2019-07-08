# Ignite UI wrappers for Angular

[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-wrappers.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-wrappers)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-angular-wrappers/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-angular-wrappers?branch=master)  
[![npm version](https://badge.fury.io/js/igniteui-angular-wrappers.svg)](https://badge.fury.io/js/igniteui-angular-wrappers)

Use the components found in `projects\igniteui-angular-wrappers\src\public-api.ts` to use [Ignite UI](http://igniteui.com) controls in [Angular](https://angular.io/) applications. [Work with the running samples here](http://igniteui.github.io/igniteui-angular-wrappers).

**IMPORTANT** The repository has been renamed from `igniteui-angular2` to `igniteui-angular-wrappers`. Read more on our new [naming convention](https://www.infragistics.com/community/blogs/b/infragistics/posts/ignite-ui-github-repo-name-changes). 

# Requirements

- [jQuery](http://www.jquery.com) v1.9.1 and later
- [jQuery UI](http://www.jqueryui.com) v1.9.0 and later
- [Angular](https://angular.io/) v2.0 beta and later
- [Ignite UI](http://www.igniteui.com) 15.2 and later

# Running the samples
To run the samples, you need [Node.js](http://nodejs.org/) installed on your machine.
Afterwards, from your terminal run the following commands:

1. `git clone https://github.com/IgniteUI/igniteui-angular-wrappers`
2. `cd igniteui-angular-wrappers` 
3. `npm install`
4. `npm start`

`igniteui-angular-wrappers` depends on the `ignite-ui-full` licensed package. Follow [this guide](https://www.igniteui.com/help/using-ignite-ui-npm-packages) on setting up access to the Ignite UI private npm feed and add the dependency to the `package.json`.

```
"dependencies": {
	"@infragistics/ignite-ui-full": "latest"
}
```

# Getting Started

## Ignite UI CLI
To get started with the Ignite UI CLI and the Ignite UI Angular wrappers:

```
npm i -g igniteui-cli
ig new <project name> --framework=angular --type=ig-ts
cd <project name>
ig add combo <component name>
ig start
```

## Initializing controls
In an Angular application, Ignite UI controls support markup initialization which is done by using custom tags.

### Custom tags
Each control implements a custom tag component where the tag name is formed by splitting each capital letter in the control name with the `-` symbol.

**Note**: It is recommended to use closing tags (`</ig-combo>`) over the self-closing tags (`<ig-combo/>`), because the latter are known to make issues on some browsers (depending on the used document mode).

#### Examples:

|  Control Name   |          Tag          |
|-----------------|-----------------------|
| igCombo         | `<ig-combo>`          |
| igGrid          | `<ig-grid>`           |
| igDataChart     | `<ig-data-chart>`     |
| igDialog        | `<ig-dialog>`         |
| igDateEditor    | `<ig-date-editor>`    |
| igEditor        | `<ig-editor>`         |
| igMaskEditor    | `<ig-mask-editor>`    |
| igNumericEditor | `<ig-numeric-editor>` |
| igPercentEditor | `<ig-percent-editor>` |
| igTextEditor    | `<ig-text-editor>`    |
| igDatePicker    | `<ig-date-picker>`    |
| igTree          | `<ig-tree>`           |
| igMap           | `<ig-map>`            |
| igUpload        | `<ig-upload>`         |
| igVideoPlayer   | `<ig-video-player>`   |

### Configuring Control Options

There are two mandatory attributes that need to be set to an Ignite UI control custom tag:
  `options` - points to a property on the application component class containing the control's configuration.
  `widgetId` - the control requires an id to be assigned to it.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id' 
            [dataSource]='data'
            ></ig-grid>`
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                width: "100%",
                height: "400px",
                autoGenerateColumns: true
            };
        }
    }

In this example `options` attribute points to `gridOptions` property on the application compoment class and `widgetId` points to the `id` property.

### Configuring Top Level Control Options

All top level options are allowed to be set as attributes of an Ignite UI control custom tag. In this case `options` attribute is not mandatory,
but it is allowed. And if both - `options` and top-level attributes are combined, top-level attributes will override `options`,
when there are overlapping properties. Also changing top-level attribute will apply the change to the widget, only if the option is settable.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid
            [widgetId]='id'
            [width]='w'
            [autoCommit]='true'
            [dataSource]='data'
            [height]='h'
            [autoGenerateColumns]='true'
            >
        </ig-grid>`
    })
    export class AppComponent {
        private id: string;
        private data: any;
        private w: string;
        private h: string;
        private pKey: string;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.w = '100%';
            this.h = '400px';
            this.pKey = 'ProductID';
        }
    }

### Other custom tags

There are two custom tags `<column>` and `<features>` that are used in igGrid/igTreeGrid/igHierarchicalGrid to configure the `columns` and `features` options accordingly.

#### Example:

		<ig-grid [widgetId]='id'>
			<column [key]="'ProductID'" [headerText]="'Product ID'" [width]="'165px'" [dataType]="'number'"></column>
			<column [key]="'ProductName'" [headerText]="'Product Name'" [width]="'250px'" [dataType]="'string'"></column>
			<column [key]="'QuantityPerUnit'" [headerText]="'Quantity per unit'" [width]="'250px'" [dataType]="'string'"></column>
			<column [key]="'UnitPrice'" [headerText]="'Unit Price'" [width]="'100px'" [dataType]="'number'"></column>
			<features>
				<paging [pageSize]="currPageSize"></paging>
				<filtering></filtering>
                <selection></selection>
                <group-by></group-by>
			</features>
		</ig-grid>

Each of the grids features is also represented by a custom tag.

#### Examples:

|  Feature Name      |          Tag              |
|--------------------|---------------------------|
| ColumnMoving       | `<column-moving>`         |
| Filtering          | `<filtering>`             |
| GroupBy            | `<group-by>`              |
| Hiding             | `<hiding>`                |
| CellMerging        | `<cell-merging>`          |
| AppendRowsOnDemand | `<append-rows-on-demand>` |
| MultiColumnHeaders | `<multi-column-headers>`  |
| Paging             | `<paging>`                |
| Responsive         | `<responsive>`            |
| Resizing           | `<resizing>`              |
| RowSelectors       | `<row-selectors>`         |
| Selection          | `<selection>`             |
| Sorting            | `<sorting>`               |
| Summaries          | `<summaries>`             |
| ColumnFixing       | `<column-fixing>`         |
| Tooltips           | `<tooltips>`              |
| Updating           | `<updating>`              |


### Apply new set of Control Options

In order to change the more options at once (or recreate the component with another set of options), the new configuration can be applied to the `options` property.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id' 
            [dataSource]="data" 
            ></ig-grid>`
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                width: "100%",
                height: "400px",
                autoGenerateColumns: true
            };
        }

        recreateGrid() {
            this.gridOptions = {
                dataSource: Northwind.getAnotherData(),
                width: "700px",
                autoGenerateColumns: true,
                features: [
                    { name: "Paging" }
                ]
            };
        }
    }

In this example `options` attribute points to `gridOptions` and changing in reference will destroy the grid, combine the old options with new ones and create the grid with the combined options.
Also note that the new grid will have height of 400px, even though it's not defined into the new options, because of the combination with new options.
If disabling an option is required set it to `null`, `undefined`, `[]` or `{}`.

### Handling events

Binding to control events is achieved by assigning attributes where the name of the attribute is the name of the control's event name surrounded by parenthesis and the value is the name of the event handler.

#### Examples:

|            Event            |                     Markup                      |
|-----------------------------|-------------------------------------------------|
|igGrid.events.dataBind       | `<ig-grid (dataBind)="dataBindHandler">`        |
|igCombo.events.textChanged   | `<ig-combo (textChanged)="textChangedHandler">` |
|igDateEditor.events.keypress | `<ig-date-editor (keypress)="keypressHandler">` |


    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [(widgetId)]='id' 
            [dataSource]="data" 
            (dataBind)="dataBindHandler($event)"></ig-grid>`
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;
        private dataBindHandler: any;
        
        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                width: "100%",
                height: "400px",
                autoGenerateColumns: true
            };
        }
        
        dataBindHandler(event, ui) {
            // event handler code    
        }
    }

Binding to igGrid* feature events is done in the control's configuration code.

#### Example:

    @Component({
        selector: 'my-app',
        template: `<ig-grid 
            [(options)]="gridOptions" 
            [dataSource]="data" 
            [(widgetId)]='id'></ig-grid>`
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        private id: string;
        private data: any;

        constructor() {
            this.data = Northwind.getData();
            this.id ='grid1';
            this.gridOptions = {
                width: "100%",
                height: "400px",
                autoGenerateColumns: true,
                features: [
                    {
                        name: "Filtering",
                        dataFiltered: function (evt, ui) {
                            // event handler code
                        }
                        
                    }
                ]
            };
        }
    }

In this example igGridFiltering `dataFiltered` event is handled in the application component class.

## Calling Component methods

Component methods can be called by accessing the component from the view. For example:

    @Component({
        selector: 'my-app',
        template: '<ig-grid #grid1
            [(options)]="gridOptions">
            <features>
                <paging [pageSize]="'2'"></paging>
            </features>
        </ig-grid>'
    })
    export class AppComponent {
        private gridOptions: IgGrid;
        @ViewChild("grid1") myGrid: IgGridComponent;
        private id: string;
        constructor() { ... }
         
        ngAfterViewInit() {
            //call grid method
            var cell = this.myGrid.cellById(1, "Name");
            //call grid paging method
            this.myGrid.featuresList.paging.pageIndex(2);
        }
    }

## Two-way Data Binding
The following controls currently support two-way data binding:

1. igGrid
2. igTreeGrid
3. igHierarchicalGrid
4. igCombo
5. igEditors
6. igTree

For the two-way data binding to work you need to assign the data source as a property in the template.
Example:

    <ig-combo [widgetId]="'combo2'"
            [(options)]="options" 
            [dataSource]='northwind'
            [(ngModel)]="combo.value1">
    </ig-combo>

**Note:** Two-way data binding won't work if you use `options.dataSource` in the .ts file as a configuration.

To manually trigger change detection use the `markForCheck` API.

## Use igDataSource inside Angular app

Thanks to the @types/ignite-ui, it is possible to create an instance of the all of the Ignite UI data sources.

    let source = new Infragistics.DataSource(settings);

This data source instance is granted with intellisense about igDataSource methods.

    source.dataBind();

Review the following [demo](http://igniteui.github.io/igniteui-angular-wrappers/samples/igDataSource/igDataSource.html) for more information.

## Running tests

The command for running the tests is:

    npm test

After that, if all tests successfully passed a code coverage for the `public-api.ts` file will be generated under the `./coverage/igniteui-angular-wrappers` folder.

To see the code coverage you can open one of the html files under `./coverage/igniteui-angular-wrappers/src`.

---------------------------------------

## What is Ignite UI?
[![Ignite UI Logo](http://infragistics-blogs.github.io/github-assets/logos/igniteui.png)](http://www.igniteui.com)

[Ignite UI](http://igniteui.com/) is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.  Too many to list here - check out [the site](http://igniteui.com/) for more info and to [download](https://igniteui.com/download) a trial.

Ignite UI is not just another library created in someone's free time. It is commercial-ready, extremely well-tested, tuned for top performance, designed for good UX, and backed by [Infragistics](http://www.infragistics.com/), an experience-focused company with a track record of over 24 years of experience in providing enterprise-ready, high-performance user interface tools for web, windows and mobile environments.

[![Infragistics Logo](http://infragistics-blogs.github.io/github-assets/logos/infragistics.png)](http://infragistics.com)
