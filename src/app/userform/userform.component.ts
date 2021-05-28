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

  @Input() set selectedDistrict(district: string){
    this.streetService.getStreets(district).subscribe(streets$ => {
      let streets = JSON.parse(streets$)
      this.streetsCont = streets
      console.log(this.streetsCont)

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
      console.log(this.districtsCont)
    }, (err) => {
      console.error(err)
    })

    this.garbagesCont = []
    this.garbageService.getGarbages().subscribe(garbages$ => {
      let garbages = JSON.parse(garbages$)
      this.garbagesCont = garbages
      console.log(this.garbagesCont)
    }, (err) => {
      console.error(err)
    })

  }
}