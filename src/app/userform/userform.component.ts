import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Request, UserformService } from '../userform.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {

  title: string
  text: string
  date: Date
  sign: string
  rank: string

  selectedStreet : string;
  retrievalTime = 'placeholder text until database input';
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

  saving = false
  saved: boolean
  message: string

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
    this.userformService.addRequest(request).subscribe(res => {
      this.saving = true
      if (res.saved) {
        this.saved = true
        this.message = 'Sikeres mentés'
      } else {
        this.saved = false
        this.message = 'A mentés sikertelen'
      }
      console.log(this.message)
    });
  }

  constructor(
    private streetService: DataService,
    private garbageService: DataService,
    private userformService: UserformService,
    private introService: DataService
  ) { }

  ngOnInit(): void {
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

    this.introService.getIntro().subscribe(intro$ => {
      const intro = JSON.parse(intro$)
      this.title = intro[1].title
      this.text = intro[1].text
      this.date = intro[1].date
      this.sign = intro[1].sign
      this.rank = intro[1].rank
    }, (err) =>{
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
      return
    }
    this.request.street = this.selectedStreet
    this.request.garbagesCont = selectedLomCont
    this.sendRequest(this.request)
  }
}