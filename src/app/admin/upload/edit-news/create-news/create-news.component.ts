import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { UploadService } from '../../upload.service';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  title: string
  text: string
  sign: string
  rank: string
  active: boolean = true;
  archive: boolean = false;

  newsUrl = '/api/upload'

  news = {
    title: '',
    text: '',
    sign: '',
    rank: '',
    picCount: 0,
    active: true,
    archive: false,
  }

  constructor(
    public dialog: MatDialog,
    public uploadService: UploadService,
    private NewsService: NewsService
  ) { }

  public uploadNewsDialog() {
    this.news.title = this.title
    let safetext = this.text
    this.news.text = `<p>${safetext}</p>`
    this.news.sign = this.sign
    this.news.rank = this.rank
    this.news.active = this.active
    this.news.archive = this.archive
    this.uploadService.getData(this.news, this.newsUrl)
    let dialogRef = this.dialog.open(DialogComponent, {
      id: 'upload-news',
      panelClass: 'overl',
      maxWidth: '100vw',
      width: '100vw',
      height: '100vh'
    })
  }

  ngOnInit(): void {
  }

}
