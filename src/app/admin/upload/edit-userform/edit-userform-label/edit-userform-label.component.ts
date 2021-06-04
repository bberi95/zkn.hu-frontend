import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-edit-userform-label',
  templateUrl: './edit-userform-label.component.html',
  styleUrls: ['./edit-userform-label.component.css']
})
export class EditUserformLabelComponent implements OnInit {

  id: number
  title: string
  text: string
  date: Date
  sign: string
  rank: string

  saving = false
  saved: boolean
  message: string

  constructor(
    private introService: DataService,
    public uploadService: UploadService
  ) { }

  public updateIntro() {
    let updated = {
      id: 1,
      date: new Date(),
      title: this.title,
      text: this.text,
      sign: this.sign,
      rank: this.rank
    }
    this.uploadService.updateIntro(updated).subscribe(res => {
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

  ngOnInit(): void {
    this.introService.getIntro().subscribe(intro$ =>{
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

}
