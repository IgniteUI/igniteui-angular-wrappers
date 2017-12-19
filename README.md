# Ignite UI components for Angular

[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular2.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular2)
[![Coverage Status](https://coveralls.io/repos/github/IgniteUI/igniteui-angular2/badge.svg?branch=master)](https://coveralls.io/github/IgniteUI/igniteui-angular2?branch=master)  
[![NPM version](https://img.shields.io/npm/v/igniteui-angular2.svg?style=flat)](https://www.npmjs.com/package/igniteui-angular2)

Use the components found in `src\igniteui.angular2.ts` to use [Ignite UI](http://igniteui.com) controls in [Angular](https://angular.io/) applications. [Work with the running samples here](http://igniteui.github.io/igniteui-angular2).

# Requirements

- [jQuery](http://www.jquery.com) v1.9.1 and later
- [jQuery UI](http://www.jqueryui.com) v1.9.0 and later
- [Angular](https://angular.io/) v2.0 beta and later
- [Ignite UI](http://www.igniteui.com) 15.2 and later

# Running the samples
To run the samples, you need [Node.js](http://nodejs.org/) installed on your machine.
Afterwards, from your terminal run the following commands:

1. `git clone https://github.com/IgniteUI/igniteui-angular2`
2. `cd igniteui-angular2` 
3. `npm install`
4. `npm start`

`igniteui-angular2` depends on the `ignite-ui-full` licensed package. Follow [this guide](https://www.igniteui.com/help/using-ignite-ui-npm-packages) on setting up access to the Ignite UI private npm feed and add the dependency to the `package.json`.

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
                dataSource: this.data,
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
                dataSource: this.data,
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
                dataSource: this.data,
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
                dataSource: this.data,
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

## Using Ignite UI Angular Components inside AOT app
As a starting point, you can review the [Angular documentation on the subject](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), which provides a guide how to compile an app with AOT. Follow their instructions to AOT compile the quickstart app.

Once you have a running application compiled with AOT, the next step is to add the Ignite UI Components into this app. In this demo IgComboComponent is being added to the app, igCombo is an OSS widget and it is part of the ignite-ui npm package.
First we need to install the required packages:
- `npm install ignite-ui`
- `npm install igniteui-angular2`
- `npm install jquery-ui-bundle`

**Note**: You have to download the full Ignite UI product if you would like to use widgets which are not part of the OSS widgets. This is a [list](https://github.com/IgniteUI/ignite-ui#available-features-in-ignite-ui-open-source-version) of the controls available in the Open-source version

Then go to the app module and import the combo - `import 'ignite-ui/js/modules/infragistics.ui.combo.js';`. But before that add all the dependencies for it:

    import 'jquery';
    import 'jquery-ui-bundle/jquery-ui.min.js';
    import 'ignite-ui/js/modules/infragistics.util.js';
    import 'ignite-ui/js/modules/infragistics.templating.js';
    import 'ignite-ui/js/modules/infragistics.datasource.js';
    import 'ignite-ui/js/modules/infragistics.ui.combo.js';

In addition, at the end import the IgniteUIModule:

    import { IgniteUIModule } from 'igniteui-angular2';
    @NgModule({
    imports: [ BrowserModule, IgniteUIModule ],
    …
    })
    export class AppModule {}

In order to take advantage of the [Tree shaking](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html#!#tree-shaking) the Rollup has to be set up.
Open rollup-config.js, include igniteui-angular2 to `commonjs` plugin and add `namedExport` for jquery:

    commonjs({
        include: ['node_modules/rxjs/**',
            'node_modules/igniteui-angular2/**',
        ],
        namedExports: {
            'node_modules/jquery/dist/jquery.min.js': [ 'jquery' ]
        }
    }),

Additional plugin rollup-plugin-replace should be installed
`npm install rollup-plugin-replace` in order to fix the offline compilation of Ignite UI util module.
`this.Class` should be changed to `window.Class`, because the offline compilation is not having the same [context and this is changed to undefined](https://github.com/rollup/rollup/issues/942).

      replace({
        // this is undefined for the specified context, so replace it with window to access Class
        include: 'node_modules/ignite-ui/js/modules/infragistics.util.js',
        values: { 'this.Class': 'window.Class' }
      }),

Now we are ready to use the IgComboComponent
`<ig-combo [dataSource]="heroesCombo" [widgetId]="comboId" [textKey]="'name'" [valueKey]="'id'"></ig-combo>` in app.component.html 
And also define the used properties in AppComponent class:

    export class AppComponent {
    comboId = 'combo1';
    showHeading = true;
    heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
    heroesCombo = [{id: 0, name: 'Magneta'}, {id: 1, name:'Bombasto'}, {id: 2, name:'Magma'}, {id: 3, name:'Tornado'}];

    toggleHeading() {
        this.showHeading = !this.showHeading;
    }
    }

At the end, apply Ignite UI styling. To achieve this, postcss plugin should be installed
`npm install rollup-plugin-postcss` 

Open rollup-config.js file and import postcss:

    import postcss from 'rollup-plugin-postcss'
    …
      postcss({
        extensions: ['.css']
      }),


[Download](https://github.com/IgniteUI/igniteui-angular2/files/975676/quickstart-igniteui-angular2-aot.zip) the modified app which uses the specified product. To run it with AOT:
1. npm install
2. npm run build:aot
3. npm run serve



## Two-way Data Binding
The following controls currently support two-way data binding:

1. igGrid
2. igTreeGrid
3. igHierarchicalGrid
4. igCombo
5. igEditors
6. igTree

## Use igDataSource inside Angular app

Thanks to the @types/ignite-ui, it is possible to create an instace of the all of the Ignite UI data sources.

    let source = new Infragistics.DataSource(settings);

This data source instance is granted with intellisense about igDataSource methods.

    source.dataBind();

Review the following [demo](http://igniteui.github.io/igniteui-angular2/samples/igDataSource/igDataSource.html) for more information.

## Running tests

The command for running the tests is:

    npm test

After that, if all tests successfully passed a code coverage for the `igniteui.angular2.ts` filse will be generated under the `./coverage` folder.

To see the code coverage you can open one of the html files under `./coverage/html-report/src`.

**Note:** The code coverage is actually being generated on the `igniteui.angular2.js` file (comes from compilation of the source .ts file). That coverage is saved under the `coverage/karma-tmp` folder.
Since we need the code coverage of the `igniteui.angular2.js` file itself, we use the remap-istanbul module to remap the report from the .js file to the .ts file and save it under the `coverage/html-report` and `coverage/lcov.info`.

---------------------------------------

## What is Ignite UI?
[![Ignite UI Logo](http://infragistics-blogs.github.io/github-assets/logos/igniteui.png)](http://www.igniteui.com)

[Ignite UI](http://igniteui.com/) is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.  Too many to list here - check out [the site](http://igniteui.com/) for more info and to [download](https://igniteui.com/download) a trial.

Ignite UI is not just another library created in someone's free time. It is commercial-ready, extremely well-tested, tuned for top performance, designed for good UX, and backed by [Infragistics](http://www.infragistics.com/), an experience-focused company with a track record of over 24 years of experience in providing enterprise-ready, high-performance user interface tools for web, windows and mobile environments.

[![Infragistics Logo](http://infragistics-blogs.github.io/github-assets/logos/infragistics.png)](http://infragistics.com)
