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
    houseNumber: "",
    email: "",
    phone:"",
  });

  acknowledgementForm = this.formBuilder.group({
    acknowledgement: "",
  })

  constructor(
    private formBuilder: FormBuilder,
    private userformService: UserformService,
  ) { }

  onSubmit(name: string): void {
    // name = name.trim();
    if (this.transportForm.valid){
      document.getElementById("sendBtn").setAttribute("enabled","enabled");
      this.userformService.addUser({ name } as User)
        .subscribe(user => {
          this.users.push(user);
      })
      console.log("ok", this.transportForm.value);
      this.transportForm.reset();
    } else {
      document.getElementById("sendBtn").setAttribute("disabled","disabled");
      document.getElementById("errorTxt").innerHTML="Egy vagy több mező kitöltése hiányos vagy hibás, kérem ellenőrizze a megadott adatokat!";
      // [disabled]="!transportForm.valid"
    }
    
  }

  ngOnInit(): void {
    this.transportForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userID: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      lomTextArea: new FormControl(''),
      GDPR: new FormControl('', Validators.required)
    });
    this.acknowledgementForm = new FormGroup({
      acknowledgement: new FormControl('', Validators.requiredTrue),
    })
  }

  get name() { return this.transportForm.get('name'); }
  get userID() { return this.transportForm.get('userID'); }
  get district() { return this.transportForm.get('district'); }
  get street() { return this.transportForm.get('street'); }
  get houseNumber() { return this.transportForm.get('houseNumber'); }
  get email() { return this.transportForm.get('email'); }
  get phone() { return this.transportForm.get('phone'); }
  get acknowledgement() {return this.acknowledgementForm.get('acknowledgement'); }

}