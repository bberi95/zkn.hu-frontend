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
    let updated = this.contact
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
    this.contact = this.data
  }

}
