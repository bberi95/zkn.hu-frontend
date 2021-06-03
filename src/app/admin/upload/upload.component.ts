import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

    edited = 'menu-userform'

    menuitems = [
        {
            id: 'menu-intro',
            label: 'Bemutatkozás',
            active: false,     
        },
        {
            id: 'menu-news',
            label: 'Hírek',
            active: false,
        },
        {
            id: 'menu-industrial',
            label: 'Gazdálkodói gyűjtés',
            active: false,
        },
        {
            id: 'menu-domestic',
            label: 'Lakossági gyűjtés',
            active: false,
        },
        {
            id: 'menu-selective',
            label: 'Szelektív gyűjtés',
            active: false,
        },
        {
            id: 'menu-junkyard',
            label: 'Hulladékudvar',
            active: false,
        },
        {
            id: 'menu-education',
            label: 'Környezeti nevelés',
            active: false,
        },
        {
            id: 'menu-userform',
            label: 'Bejelentő felület',
            active: true,
        },
        {
            id: 'menu-media',
            label: 'Médiamegjelenés',
            active: false,
        },
        {
            id: 'menu-contact',
            label: 'Kapcsolat',
            active: false,
        },
        {
            id: 'menu-career',
            label: 'Karrier',
            active: false,
        },
        {
            id: 'menu-pub-data',
            label: 'Közédekű',
            active: false,
        },
        {
            id: 'menu-customers',
            label: 'Ügyfélszolgálat',
            active: false,
        },
        {
            id: 'menu-legislation',
            label: 'Jogszabályok',
            active: false,
        },
        {
            id: 'menu-authorities',
            label: 'Felügyeleti szervek',
            active: false,
        },
        {
            id: 'menu-permits',
            label: 'Engedélyek',
            active: false,
        }
    ]

    constructor(private renderer: Renderer2) { }

    toggle(item) {
        this.menuitems.forEach(function(items) {
            items.active = false;
        });
        this.edited = item.id;
        item.active = true;
    }

    ngOnInit() {
        
    }

}