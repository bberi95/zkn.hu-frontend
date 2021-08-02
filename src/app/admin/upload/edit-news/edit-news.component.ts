import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  editedSub="edit-news-all-news"

  subMenuItems = [
    {
      id: 'edit-news-all-news',
      label: 'Hírek',
      active: true,
    },
    {
      id: 'create-news',
      label: 'Új hír létrehozása',
      active: false,
    }
  ]

  constructor() {}

  toggle(item) {
    this.subMenuItems.forEach(function(items) {
      items.active = false;
    });
    this.editedSub = item.id;
    item.active = true;
  }

  ngOnInit(): void {
  }
  
}