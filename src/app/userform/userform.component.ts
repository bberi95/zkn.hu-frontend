import { Component} from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
