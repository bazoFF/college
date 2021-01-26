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
  @ViewChild(MatSort, {static: false}) matSort: MatSort;

  @Input() data: any[];
  @Input() columns: ITableColumn[];
  @Input() sort: boolean = true;

  get columnsNames() {
    return this.columns.map(column => column.name);
  }

  dataSource: MatTableDataSource<any[]>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);

    if (this.sort) {
      this.dataSource.sort = this.matSort;
    }
  }
}
