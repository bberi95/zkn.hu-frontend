import { Component, OnInit } from '@angular/core';
import { DataService} from 'src/app/data.service';

export interface Contact {
  name: string,
  address: string,
  phone: string,
  mobile: string,
  email: string,
  openHours: Array<any>,
  latitude: number,
  longitude: number
}

@Component({
  selector: 'app-edit-all-contact',
  templateUrl: './edit-all-contact.component.html',
  styleUrls: ['./edit-all-contact.component.css']
})
export class EditAllContactComponent implements OnInit {

  contactsCont = []

  constructor(
    private contactService: DataService
  ) { }

  ngOnInit(): void {
    this.contactsCont = []
    this.contactService.getContact().subscribe(contact$ =>{
      let contact = JSON.parse(contact$)
      for (let i = 0; i< contact.length; i++) {
        this.contactsCont.push(contact[i])
      }
    }, (err) => {
      console.error(err)
    })
  }

}
