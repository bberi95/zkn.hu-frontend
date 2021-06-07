import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-request-dialog',
    templateUrl: './request-dialog.component.html',
    styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

    name: string;
    userID: number;
    email: string;
    phone: string;
    district: string;
    street: string;
    houseNumber: string;
    lomTextArea: string;
    id: number;
    date: Date;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        public dialogRef: MatDialogRef<RequestDialogComponent>,
    ) { }

    closeDialog() {
        this.dialogRef.close()
    }

    ngOnInit(): void {
        this.name = this.data.name
        this.userID = this.data.userID
        this.email = this.data.email
        this.phone = this.data.phone
        this.district = this.data.district
        this.street = this.data.street
        this.houseNumber = this.data.houseNumber
        this.lomTextArea = this.data.lomTextArea
        this.id = this.data.id
        this.date = this.data.date

    }
}
