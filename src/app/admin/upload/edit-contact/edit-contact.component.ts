import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  title = 'Kapcsolat térkép';
  zoom = 16;
  lat = 46.845790;
  lng = 16.845487;

  constructor() { }

  ngOnInit(): void {
  }
}

