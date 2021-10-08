import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService} from 'src/app/data.service';
import { Contact } from '../edit-all-contact/edit-all-contact.component';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent implements OnInit {

  contact: Contact = {
    name: '',
    address: '',
    phone: '',
    mobile: '',
    email: '',
    openHours: [],
    latitude: 0,
    longitude: 0,
    active: null,
  }

  saving = false
  saved: boolean
  message: string

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<EditContactDialogComponent>,
    private contactService: DataService,
  ) { }

  public saveContact() {
    let updated = {
      name: this.contact.name,
      address: this.contact.address,
      phone: this.contact.phone,
      mobile: this.contact.mobile,
      email: this.contact.email,
      openHours: this.contact.openHours,
      latitude: this.contact.latitude,
      longitude: this.contact.longitude,
      active: this.contact.active
    }
    console.log(this.contact.name)
    this.contactService.updateContact(updated).subscribe(res => {
      this.saving = true
      if (res.saved) {
        this.saved = true
        this.message = 'Sikeres mentés'
      } else {
        this.saved = false
        this.message = 'A mentés sikertelen'
      }
      console.log(this.message)
    })
  }

  activityChange(contact) {
    this.contactService.updateContact(contact).subscribe(res => {
      this.saving = true
      if (res.saved) {
        this.saved = true
        this.message = 'Sikeres mentés'
      } else {
        this.saved = false
        this.message = 'A mentés sikertelen'
      }
      console.log(this.message)
    })
  }

  saveAndQuit() {
    this.saveContact()
    this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.contact.name = this.data.name
    this.contact.address = this.data.address
    this.contact.phone = this.data.phone
    this.contact.mobile = this.data.mobile
    this.contact.email = this.data.email
    this.contact.openHours = this.data.openHours
    this.contact.latitude = this.data.latitude
    this.contact.longitude = this.data.longitude
    this.contact.active = this.data.active
  }

}
