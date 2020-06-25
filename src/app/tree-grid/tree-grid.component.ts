import { Component } from '@angular/core';
import { Tasks } from '../shared/tasks';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent {

  public tgridOptions: IgTreeGrid;
  public id: string;
  public data: any;
  public newProduct: any;

  constructor() {
    this.data = Tasks.getData();

    this.id = 'tgrid1';

    this.tgridOptions = {
      autoCommit: true,
      dataSource: this.data,
      width: '100%',
      height: '400px',
      autoGenerateColumns: false,
      autoGenerateColumnLayouts: false,
      primaryKey: 'id',
      childDataKey: 'products',
      renderExpansionIndicatorColumn: true,
      columns: [
        { key: 'id', headerText: 'ID', width: '100px', dataType: 'number' },
        { key: 'tasks', headerText: 'Task', width: '250px', dataType: 'string' },
        { key: 'start', headerText: 'Start', width: '100px', dataType: 'date' },
        { key: 'finish', headerText: 'Finish', width: '100px', dataType: 'date' },
        { key: 'duration', headerText: 'Duration', width: '100px', dataType: 'date' },
        { key: 'progress', headerText: 'Progress', width: '100px', dataType: 'date' }
      ]
    };
  }

}
