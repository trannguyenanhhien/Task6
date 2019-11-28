import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstName = "";
  hero = {name: ""};

  constructor() { }

  ngOnInit() {
  }

}
