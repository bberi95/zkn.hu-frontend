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
    let updated = this.news
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

  ngOnInit(): void {
    this.news = this.data
  }

}
