import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-district-dates',
  templateUrl: './edit-district-dates.component.html',
  styleUrls: ['./edit-district-dates.component.css']
})
export class EditDistrictDatesComponent implements OnInit {

  districtsCont = []
  testCont = []
  rowsPerPage = 15
  rowsPerPageCont = [5, 10, 15, 20, 25]

  area: string;
  lomDate: Date;

  saving = false
  saved: boolean
  message: string

  constructor(
    private streetService: DataService
  ) { }


  //ezzel toltam be a dátumokat az utcákhoz
  // public updateStreetDates() {
  //   let date = '2021-12-21'
  //   this.streetService.updateStreetDates(date).subscribe(res => {
  //     this.saving = true
  //     if (res.saved) {
  //       this.saved = true
  //       this.message = 'Sikeres mentés'
  //     } else {
  //       this.saved = false
  //       this.message = 'A mentés sikertelen'
  //     }
  //     console.log(this.message)
  //   })

  // }

  districtChange(dc) {
    this.streetService.updateStreetDates(dc).subscribe(res =>{
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
      this.testCont.push({
        area: districts[0].area,
        lomDate: districts[0].lomDate,
      })
      for (var x = 1; x < districts.length; x++) {
        let y = x - 1
        if (districts[x].area != districts[y].area) {
          this.testCont.push({
            area: districts[x].area,
            lomDate: districts[x].lomDate,
          })
        }
      }
    }, (err) => {
      console.error(err)
    })
  }

}
