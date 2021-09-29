import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  name: string
  address: string
  phone: string
  mobile: string
  email: string
  openHours: Array<any>
  latitude: number
  longitude: number

  daysArr = [
    { day: 'Hétfő', time: '', },
    { day: 'Kedd', time: '', },
    { day: 'Szerda', time: '', },
    { day: 'Csütörtök', time: '', },
    { day: 'Péntek', time: '', },
    { day: 'Szombat', time: '', },
    { day: 'Vasárnap', time: '', }
  ];

  contact = {
    name: '',
    address: '',
    phone: '',
    mobile: '',
    email: '',
    openHours: [],
    latitude: 0,
    longitude: 0,
  }

  saving = false
  saved: boolean
  message: string

  constructor(
    public DataService: DataService
  ) { }

  public createContact() {
    this.contact.name = this.name
    this.contact.address = this.address
    this.contact.phone = this.phone
    this.contact.mobile = this.mobile
    this.contact.email = this.email
    this.contact.openHours = this.daysArr
    this.contact.latitude = this.latitude
    this.contact.longitude = this.longitude
    this.DataService.saveContact(this.contact).subscribe(res => {
      this.saving = true
      if (res.saved) {
        this.saved = true
        this.message = 'Sikeres mentés'
      } else {
        this.saved = false
        this.message = 'A mentés sikertelen'
      }
      console.log(this.message)
      this.ngOnInit() //itt hiába tolok oninitet nem tölt újra ez a fos
    })
  }

  ngOnInit(): void {
  }

}
