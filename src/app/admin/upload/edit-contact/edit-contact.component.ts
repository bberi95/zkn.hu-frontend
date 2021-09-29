import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  editedSub="edit-all-contact"

  subMenuItems = [
    {
      id: 'edit-all-contact',
      label: 'Kapcsolatok',
      active: true,
    },
    {
      id: 'create-contact',
      label: 'Új kapcsolat rögzítése',
      active: false,
    }
  ]

  constructor() { }

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

