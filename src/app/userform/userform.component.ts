import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserformService} from '../userform.service';
import { User, District, Street } from '../userform'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent {
  users: User[];

  districts: District[] = [
    {value: 'belvaros', viewValue: 'Belváros'},
    {value: 'kertvaros', viewValue: 'Kertváros'},
    {value: 'paterdomb', viewValue: 'Páterdomb'},
    {value: 'andrashida', viewValue: 'Andráshida'}
  ];

  streets: Street[] = [
    {value: 'ady utca', viewValue: 'Ady utca'},
    {value: 'arany janos utca', viewValue: 'Arany János utca'},
    {value: 'batsanyi janos utca', viewValue: 'Batsányi János utca'},
    {value: 'beke-ligeti utca', viewValue: 'Béke-ligeti utca'}
  ];

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