import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 
  form: FormGroup;

  constructor( private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      message: ['', Validators.required],
    });
  }
 
  get f() {
    return this.form.controls;
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
     console.log(this.form.value);
    }
  }


}
