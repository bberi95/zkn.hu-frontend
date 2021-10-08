import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactsCont = []
  zoom = 16;

  // title = 'Ügyfélszolgálati iroda';
  // lat = 46.845790;
  // lng = 16.845487;

  constructor(
    private contactService: DataService
  ) { }

  ngOnInit(): void {
    this.contactsCont = []
    this.contactService.getContact().subscribe(contact$ =>{
      let contact = JSON.parse(contact$)
      for (let i = 0; i< contact.length; i++) {
        if (contact[i].active == true){
          this.contactsCont.push(contact[i])
        }
      }
    }, (err) => {
      console.error(err)
    })
  }

}
