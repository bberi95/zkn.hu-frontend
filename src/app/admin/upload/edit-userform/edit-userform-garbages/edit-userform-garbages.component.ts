import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface Garbage {
  name: string,
  completed: boolean,
  active: boolean,
  class: string,
}

@Component({
  selector: 'app-edit-userform-garbages',
  templateUrl: './edit-userform-garbages.component.html',
  styleUrls: ['./edit-userform-garbages.component.css']
})

export class EditUserformGarbagesComponent implements OnInit {

  trashcan = faTrashAlt;

  garbage: Garbage = {
    name: '',
    completed: false,
    active: true,
    class: 'lom',
  }

  garbagesCont = [];

  saving = false
  saved: boolean
  message: string

  constructor(
    private garbageService: DataService,
  ) { }

  deleteGarbage(garbage: Garbage): void {
    //ide kell egy tényleges törlés
    this.garbageService.deleteGarbage(garbage).subscribe(res =>{
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

  sendGarbage(garbage: Garbage): void {
    garbage.completed = false
    garbage.active = true
    this.garbageService.addGarbage(garbage).subscribe(res => {
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

  activityChange(garb) {
    this.garbageService.updateGarbage(garb).subscribe(res => {
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

  ngOnInit(): void {

    this.garbagesCont = []
    this.garbageService.getGarbages().subscribe(garbages$ => {
      let garbages = JSON.parse(garbages$)
      this.garbagesCont = garbages
    }, (err) => {
      console.error(err)
    })
  }

  onSubmit() {
    this.sendGarbage(this.garbage)
    this.garbage.name=''
  }

}
