import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  transportForm = this.formBuilder.group({
    name: "",
    userID: "",
    address: "",
    email: ""
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    console.log("ok", this.transportForm.value);
    this.transportForm.reset();
  }

  ngOnInit(): void {
    this.transportForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userID: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
    });
  }

  get name() { return this.transportForm.get('name'); }

}
