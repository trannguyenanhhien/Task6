import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() editClick = new EventEmitter();


  dataList = [];
  removeData(index: number) {
    this.dataList = this.dataList.filter((item, i) => i !== index);
  }

  editData(i: number) {
    this.editClick.emit();
  }

}
