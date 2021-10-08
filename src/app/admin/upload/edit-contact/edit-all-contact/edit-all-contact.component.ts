import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';

export interface Contact {
  name: string,
  address: string,
  phone: string,
  mobile: string,
  email: string,
  openHours: Array<any>,
  latitude: number,
  longitude: number,
  active: boolean,
}

@Component({
  selector: 'app-edit-all-contact',
  templateUrl: './edit-all-contact.component.html',
  styleUrls: ['./edit-all-contact.component.css']
})
export class EditAllContactComponent implements OnInit {

  contactsCont = []
  trashcan = faTrashAlt;
  rowsPerPage: number = 10
  rowsPerPageCont = [5, 10, 15, 20, 25]
  p = 1;

  saving = false
  saved: boolean
  message: string

  constructor(
    private contactService: DataService,
    public dialog: MatDialog,
  ) { }

  openDialog(item) {
    const data = item
    let options: any
    let comp: any
    options = {
      id: 'newsDialog',
      panelClass: 'overl',
      maxWidth: '1100px',
      width: '100vw',
      height: '100vh',
      data: {
        name: data.name,
        address: data.address,
        phone: data.phone,
        mobile: data.mobile,
        email: data.email,
        openHours: data.openHours,
        latitude: data.latitude,
        longitude: data.longitude,
        active: data.active,
      }
    }
    comp = EditContactDialogComponent
    const dialogRef = this.dialog.open(comp as any, options)
    dialogRef.afterClosed().subscribe(something =>
      this.ngOnInit()
    )
  }

  changeContact(contact) {
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

  deleteContact(contact): void {
    this.contactService.deleteContact(contact).subscribe(res => {
      this.saving = true
      if (res.saved) {
        this.saved = true
        this.message = 'Sikeres törlés'
      } else {
        this.saved = false
        this.message = 'A törlés sikertelen'
      }
      console.log(this.message)
    })
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.contactsCont = []
    this.contactService.getContact().subscribe(contact$ => {
      let contact = JSON.parse(contact$)
      for (let i = 0; i < contact.length; i++) {
        this.contactsCont.push(contact[i])
      }
    }, (err) => {
      console.error(err)
    })
  }

}
