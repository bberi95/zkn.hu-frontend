import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-userform',
  templateUrl: './edit-userform.component.html',
  styleUrls: ['./edit-userform.component.css']
})
export class EditUserformComponent implements OnInit {

  editedSub ="edit-userform-label"

  subMenuItems =[
    {
      id: 'edit-userform-label',
      label: 'Tájékoztató szöveg szerkesztése',
      active: true,
    },
    {
      id: 'edit-userform-records',
      label: 'Beküldött lomtalanítási igények',
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
