import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITableColumn } from '../../../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: ITableColumn[];

  dataSource: MatTableDataSource<any[]>;

  // todo: добавить возможность добавлять Pipe к колонке

  get columnsNames() {
    return this.columns.map(column => column.name);
  }

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
