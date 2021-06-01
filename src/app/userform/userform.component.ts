import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Request } from '../userform.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {

  districtsCont = []
  streetsCont = []
  garbagesCont = []
  sendable = false;
  request: Request;
  formVisible = false;

  setFormVisibility(){
    if (this.formVisible){
      this.formVisible = false
    } else {
      this.formVisible = true
    }
  }

  @Input() set selectedDistrict(district: string) {
    this.streetService.getStreets(district).subscribe(streets$ => {
      let streets = JSON.parse(streets$)
      this.streetsCont = streets

    }, (err) => {
      console.error(err)
    })
  }

  constructor(
    private streetService: DataService,
    private garbageService: DataService
  ) { }

  ngOnInit() {
    this.districtsCont = []
    this.streetService.getAreas().subscribe(streets$ => {
      let districts = JSON.parse(streets$)
      this.districtsCont = districts
    }, (err) => {
      console.error(err)
    })

    this.garbagesCont = []
    this.garbageService.getGarbages().subscribe(garbages$ => {
      let garbages = JSON.parse(garbages$)
      this.garbagesCont = garbages
    }, (err) => {
      console.error(err)
    })

  }

  onSubmit() {
    let selectedLomCont = [];
    this.garbagesCont.forEach(function(lom){
      if (lom.completed) {
        selectedLomCont.push(lom.name)
      }
    });
    console.log(selectedLomCont)
  }
}