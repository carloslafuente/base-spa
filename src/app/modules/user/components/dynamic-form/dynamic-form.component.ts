import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicField } from '../../models/basic-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input('form-data')
  formData: BasicField[];
  formGroupData: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let group = {};
    this.formData.forEach((inputTemplate) => {
      group[inputTemplate.label] = new FormControl('');
    });
    this.formGroupData = new FormGroup(group);
  }

  send() {
    console.log(this.formGroupData.value);
  }
}
