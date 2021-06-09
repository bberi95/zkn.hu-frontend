import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-district-dates',
  templateUrl: './edit-district-dates.component.html',
  styleUrls: ['./edit-district-dates.component.css']
})
export class EditDistrictDatesComponent implements OnInit {

  districtsCont = []
  rowsPerPage = 10
  rowsPerPageCont = [5, 10, 15, 20, 25]

  area: string;
  lomDate: Date;

  saving = false
  saved: boolean
  message: string

  constructor(
    private streetService: DataService
  ) { }

  districtChange(dc) {
    this.streetService.updateStreetDates(dc).subscribe(res => {
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
    console.log(dc)
  }

  ngOnInit(): void {
    this.districtsCont = []
    this.streetService.getAreasWithDates().subscribe(streets$ => {
      let districts = JSON.parse(streets$)
      this.districtsCont = districts
    }, (err) => {
      console.error(err)
    })
  }

}
