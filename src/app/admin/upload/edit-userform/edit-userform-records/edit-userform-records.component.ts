import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-userform-records',
  templateUrl: './edit-userform-records.component.html',
  styleUrls: ['./edit-userform-records.component.css']
})

export class EditUserformRecordsComponent implements OnInit {
  wtf = faTrashAlt;
  requestsCont = []

  constructor(
    private requestService: DataService,
  ) { }

  show(item) {
    console.log(item.name)
  }
  delete(item) {
    console.log('törölni akarod: ' + item.id)
  }

  ngOnInit() {
    this.requestService.getRequests().subscribe(requests$ =>{
      let requests = JSON.parse(requests$)
      for (var i = 0; i < requests.length; i++) {
        this.requestsCont.push(requests[i])
      }
    }, (err) =>{
      console.error(err)
    })
  }

}
