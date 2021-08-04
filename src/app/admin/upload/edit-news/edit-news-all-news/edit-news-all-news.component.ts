import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditNewsDialogComponent } from '../edit-news-dialog/edit-news-dialog.component';

@Component({
  selector: 'app-edit-news-all-news',
  templateUrl: './edit-news-all-news.component.html',
  styleUrls: ['./edit-news-all-news.component.css']
})
export class EditNewsAllNewsComponent implements OnInit {

  newsCont = []
  trashcan = faTrashAlt;
  rowsPerPage: number = 10
  rowsPerPageCont = [5, 10, 15, 20, 25]
  p=1;

  saving = false
  saved: boolean
  message: string

  allComplete: boolean = false;
  header = {
    completed: false,
  }

  constructor(
    private newsService: DataService,
    public dialog: MatDialog,
  ) { }

  openDialog(item) {
    const data = item
    let options: any
    let comp: any
    options = {
      id: 'newsDialog',
      panelClass: 'overl',
      maxWidth: '1400px',
      width: '100vw',
      height: '100vh',
      data: {
        id: data.id,
        title: data.title,
        date: data.date,
        text: data.text,
        sign: data.sign,
        rank: data.rank,
        picCount: data.picCount,
        active: data.active,
      }
    }
    comp = EditNewsDialogComponent
    // this.dialog.afterAllClosed.subscribe(something => {
    //   this.newsCont = []
    //   this.ngOnInit()
    // })
    const dialogRef = this.dialog.open(comp as any, options)
    dialogRef.afterClosed().subscribe(something =>
      this.ngOnInit()
    )
  }

  updateAllComplete() {
    let counter = 0
    //ha az utolsó lapon vagyok ahol lehet kevesebb sor mint amennyi odafér
    if (this.p == (Math.floor(this.newsCont.length / this.rowsPerPage) + 1)) {
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (((this.p - 1) * this.rowsPerPage) + (this.newsCont.length % this.rowsPerPage)); i++) {
        if (this.newsCont[i].completed) {
          counter++
        }
      }
      if (counter == (this.newsCont.length % this.rowsPerPage)) {
        this.header.completed = true
        this.setAll
      } else {
        this.header.completed = false
      }
      // ha bármelyik másik oldalon vagyok, ahol annyi sor van ahány befér
    } else {
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (this.p * this.rowsPerPage); i++) {
        if (this.newsCont[i].completed) {
          counter++
        }
      }
      if (counter == this.rowsPerPage) {
        this.header.completed = true
        this.setAll
      } else {
        this.header.completed = false
      }
    }

  }

  setAll() {
    if (this.header.completed) {
      this.allComplete = true;
      for (var i = 0 + ((this.p - 1) * this.rowsPerPage); i < (this.p * this.rowsPerPage); i++) {
        if ((i + 1) <= this.newsCont.length) {
          this.newsCont[i].completed = true
        }
      }
    } else {
      this.allComplete = false;
      this.newsCont.forEach(t => t.completed = false);
    }

  }

  selectReset() {
    this.header.completed = false
    this.setAll()
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

  deleteNews(news): void {
    //ide kell egy tényleges törlés
    this.newsService.deleteNews(news).subscribe(res =>{
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

  public deleteMultiple() {
    this.newsCont.forEach(t => {
      if (t.completed) {
        this.newsService.deleteNews(t).subscribe(res =>{
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
    })
    this.ngOnInit()
  }

  ngOnInit(): void {
    console.log("oninit")
    this.newsCont = []
    this.newsService.getNews().subscribe(news$ => {
      let news = JSON.parse(news$)
      console.log(news.length)
      for (var i = 0; i < news.length; i++) {
        news.completed = false; //ez a táblázat elején a jelölőnégyzet alapértelmezett állapota
        this.newsCont.push(news[i])
      }
    }, (err) => {
      console.error(err)
    })
    console.log(this.newsCont)
  }

}