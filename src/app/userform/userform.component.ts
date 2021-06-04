import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Request, UserformService } from '../userform.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {

  selectedStreet : string;
  retrievalTime = 'placeholder text until database input';
  //adatbázisban kell a districtnek dátum hozzáadás
  districtsCont = []
  streetsCont = []
  garbagesCont = []
  sendable = false;
  formVisible = false;
  request: Request = {
    name: '',
    deleted: false,
    userID: null,
    email: '',
    phone: '',
    district: '',
    street: '',
    houseNumber: '',
    garbagesCont: {},
    lomTextArea: '',
  }
  // requests: Request[] = [];
  // editRequest: Request | undefined;

  setFormVisibility() {
    if (this.formVisible) {
      this.formVisible = false
    } else {
      this.formVisible = true
    }
  }

  @Input() set selectedDistrict(district: string) {
    this.streetService.getStreets(district).subscribe(streets$ => {
      let streets = JSON.parse(streets$)
      this.streetsCont = streets
      this.request.district = district
    }, (err) => {
      console.error(err)
    })
  }

  sendRequest(request: Request): void {
    this.userformService.addRequest(request).subscribe(requests$ => {
      console.log(requests$)
    });
  }

  constructor(
    private streetService: DataService,
    private garbageService: DataService,
    private userformService: UserformService
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
    this.garbagesCont.forEach(function (lom) {
      if (lom.completed) {
        selectedLomCont.push(lom.name)
      }
    });
    if (selectedLomCont.length === 0) {
      console.log('lomCont is empty!')
      return
    }
    this.request.street = this.selectedStreet
    this.request.garbagesCont = selectedLomCont
    console.log(selectedLomCont)
    console.log(this.request)
    this.sendRequest(this.request)
  }
}