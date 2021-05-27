import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Request } from '../userform.service';
import { districts, streetsAndrashida, streetsBelvaros, streetsKertvaros, streetsPaterdomb} from '../userform'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {

  districtsCont = []

  districts = districts;
  streetsAndrashida = streetsAndrashida;
  streetsBelvaros = streetsBelvaros;
  streetsKertvaros = streetsKertvaros;
  streetsPaterdomb = streetsPaterdomb;
  selectedDistrict: string;
  sendable = false;
  request: Request;

  constructor(private districtService: DataService) { }

  ngOnInit(): void{
    this.districtService.getDistricts().subscribe(districts$ => {
      let districts = JSON.parse(districts$)
      for (var i = 0; i < districts.length; i++){
        this.districtsCont.push(districts[i])
      }
    }, (err) => {
      console.error(err)
    })
  }
}