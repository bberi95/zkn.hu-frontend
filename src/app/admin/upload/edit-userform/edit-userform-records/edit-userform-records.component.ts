import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UploadService } from '../../upload.service';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Component({
  selector: 'app-edit-userform-records',
  templateUrl: './edit-userform-records.component.html',
  styleUrls: ['./edit-userform-records.component.css']
})

export class EditUserformRecordsComponent implements OnInit {

  trashcan = faTrashAlt;
  requestsCont = []

  constructor(
    private requestService: DataService,
    public uploadService: UploadService,
    public dialog: MatDialog,
  ) { }

  openDialog(item) {
    const data = item
    let options: any
    let comp: any
    options = {
      id: 'requestDialog',
      panelClass: 'overl',
      maxWidth: '1400px',
      width: '100vw',
      height: '100vh',
      data: {
        name: data.name,
        userID: data.userID,
        email: data.email,
        phone: data.phone
      }
    }
    comp = RequestDialogComponent
    const dialogRef = this.dialog.open(comp as any, options)
  }

  public updateRequest(item) {
    item.deleted = true;
    this.uploadService.updateRequest(item).subscribe(res => {
    })
    this.ngOnInit()
  }

  ngOnInit() {
    this.requestsCont = []
    this.requestService.getRequests().subscribe(requests$ => {
      let requests = JSON.parse(requests$)
      for (var i = 0; i < requests.length; i++) {
        this.requestsCont.push(requests[i])
      }
    }, (err) => {
      console.error(err)
    })
  }

}
