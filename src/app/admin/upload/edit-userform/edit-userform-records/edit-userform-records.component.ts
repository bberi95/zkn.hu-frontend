import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { UploadService } from '../../upload.service';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-userform-records',
  templateUrl: './edit-userform-records.component.html',
  styleUrls: ['./edit-userform-records.component.css']
})

export class EditUserformRecordsComponent implements OnInit {

  trashcan = faTrashAlt;
  requestsCont = []
  allRequestCont = []
  districtsCont = []
  visible: boolean
  rowsPerPage = 5
  rowsPerPageCont = [5, 10, 15, 20, 25]
  p = 1;

  saving = false
  saved: boolean
  message: string

  allComplete: boolean = false;
  header = {
    completed: false,
  }

  constructor(
    private requestService: DataService,
    private streetService: DataService,
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
        phone: data.phone,
        district: data.district,
        street: data.street,
        houseNumber: data.houseNumber,
        lomTextArea: data.lomTextArea,
        garbagesCont: data.garbagesCont,
        id: data.id,
        date: data.date,
      }
    }
    comp = RequestDialogComponent
    const dialogRef = this.dialog.open(comp as any, options)
  }

  updateAllComplete() {
    let counter = 0
    //ha az utolsó lapon vagyok ahol lehet kevesebb sor mint amennyi odafér
    if (this.p == (Math.floor(this.requestsCont.length / this.rowsPerPage) + 1)) {
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (((this.p - 1) * this.rowsPerPage) + (this.requestsCont.length % this.rowsPerPage)); i++) {
        if (this.requestsCont[i].completed) {
          counter++
        }
      }
      if (counter == (this.requestsCont.length % this.rowsPerPage)) {
        this.header.completed = true
        this.setAll
      } else {
        this.header.completed = false
      }
      // ha bármelyik másik oldalon vagyok, ahol annyi sor van ahány befér
    } else {
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (this.p * this.rowsPerPage); i++) {
        if (this.requestsCont[i].completed) {
          counter++
        }
      }
      if (counter == this.rowsPerPage) {
        this.header.completed = true
        this.setAll
      } else {
        this.header.completed = false
      }
    }

  }

  setAll() {
    if (this.header.completed) {
      this.allComplete = true;
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (this.p * this.rowsPerPage); i++) {
        if ((i + 1) <= this.requestsCont.length) {
          this.requestsCont[i].completed = true
        }
      }
    } else {
      this.allComplete = false;
      this.requestsCont.forEach(t => t.completed = false);
    }

  }

  selectReset() {
    this.header.completed = false
    this.setAll()
  }

  public updateRequest(item) {
    item.deleted = true;
    this.uploadService.updateRequest(item).subscribe(res => {
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
    this.ngOnInit()
  }

  public updateMultiple() {
    this.requestsCont.forEach(t => {
      if (t.completed) {
        t.deleted = true;
        this.uploadService.updateRequest(t).subscribe(res => {
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
    })
    this.ngOnInit()
  }

  @Input() set selectedDistrict(district: string) {
    //szűrés városrészekre
    if (district == 'Minden városrész') {
      this.requestsCont = this.allRequestCont
    } else {
      this.requestsCont = []
      this.allRequestCont.forEach(t => {
        if (district === t.district) {
          this.requestsCont.push(t)
        }
      })
    }
    this.p = 1
    this.selectReset()
  }

  ngOnInit() {
    this.requestsCont = []
    this.requestService.getRequests().subscribe(requests$ => {
      let requests = JSON.parse(requests$)
      for (var i = 0; i < requests.length; i++) {
        requests.completed = false;
        this.requestsCont.push(requests[i])
      }
    }, (err) => {
      console.error(err)
    })
    this.allRequestCont = this.requestsCont

    this.districtsCont = []
    this.streetService.getAreasWithDates().subscribe(streets$ => {
      let districts = JSON.parse(streets$)
      this.districtsCont = districts
    }, (err) => {
      console.error(err)
    })
  }

}
