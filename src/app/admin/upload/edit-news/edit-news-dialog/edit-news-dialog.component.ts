import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News, NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-edit-news-dialog',
  templateUrl: './edit-news-dialog.component.html',
  styleUrls: ['./edit-news-dialog.component.css']
})
export class EditNewsDialogComponent implements OnInit {

  news : News = {
    id: '',
    title: '',
    date: null,
    text: '',
    sign: '',
    rank: '',
    picCount: [],
    active: null,
    archive: null,
  }

  saving = false
  saved: boolean
  message: string

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<EditNewsDialogComponent>,
    private newsService: NewsService,
  ) { }

  public saveNews() {
    let updated = {
      id: this.news.id,
      title: this.news.title,
      date: this.news.date,
      text: this.news.text,
      sign: this.news.sign,
      rank: this.news.rank,
      picCount: this.news.picCount,
      active: this.news.active,
      archive: this.news.archive,
    }
    console.log(this.news.title, this.news.id)
    this.newsService.updateNews(updated).subscribe(res => {
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

  activityChange(news) {
    this.newsService.updateNewsActivity(news).subscribe(res => {
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

  saveAndQuit() {
    this.saveNews()
    this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close()
  }

  // showArray() {
  //   document.getElementById("pics").innerHTML = this.pics.join("; ")
  // }

  ngOnInit(): void {
    this.news.id = this.data.id
    this.news.title = this.data.title
    this.news.date = this.data.date
    this.news.text = this.data.text
    this.news.sign = this.data.sign
    this.news.rank = this.data.rank
    this.news.picCount = this.data.picCount
    this.news.active = this.data.active
    this.news.archive = this.data.archive
    // this.showArray();
  }

}
