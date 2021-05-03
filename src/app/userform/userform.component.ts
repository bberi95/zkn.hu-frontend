import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserformService} from '../userform.service';
import { districts, streetsAndrashida, streetsBelvaros, streetsKertvaros, streetsPaterdomb } from '../userform'

export interface User {
  name: string;
  userID: number;
  disctrict: string;
  street: string;
  address: string;
  email: string;
}

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent {
  districts = districts;
  streetsAndrashida = streetsAndrashida;
  streetsBelvaros= streetsBelvaros;
  streetsKertvaros = streetsKertvaros;
  streetsPaterdomb = streetsPaterdomb;
  selectedDistrict: string;
  users: User[];

  transportForm = this.formBuilder.group({
    name: "",
    userID: "",
    district: "",
    street:"",
    address: "",
    email: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private userformService: UserformService,
  ) { }

  onSubmit(name: string): void {
    // name = name.trim();
    this.userformService.addUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      })
    console.log("ok", this.transportForm.value);
    this.transportForm.reset();
  }

  ngOnInit(): void {
    this.transportForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userID: new FormControl(''),
      district: new FormControl(''),
      street: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      katt: new FormControl(''),
      test: new FormControl(''),
      asd: new FormControl(''),
    });
  }

  get name() { return this.transportForm.get('name'); }

}