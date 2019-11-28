import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {


  dataForm = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    zip: "",
    namecard: "",
    exp: "",
    cvv: ""
  };

  constructor() { }

  ngOnInit() { }

  @ViewChild(TableComponent, { static: false })
  dataTable: TableComponent;

  onSubmit(data: any, form: NgForm) {
    this.dataTable.dataList.push(data.value);
    data.reset();
  }

}
