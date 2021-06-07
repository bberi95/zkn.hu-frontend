import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { UploadComponent } from './upload.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { EditSelectiveComponent } from './edit-selective/edit-selective.component';
import { EditIntroComponent } from './edit-intro/edit-intro.component';
import { EditUserformComponent } from './edit-userform/edit-userform.component';
import { EditUserformLabelComponent } from './edit-userform/edit-userform-label/edit-userform-label.component';
import { EditUserformRecordsComponent } from './edit-userform/edit-userform-records/edit-userform-records.component';
import { RequestDialogComponent } from './edit-userform/request-dialog/request-dialog.component';
import { EditDistrictDatesComponent } from './edit-userform/edit-district-dates/edit-district-dates.component';



@NgModule({
  declarations: [
    UploadComponent,
    DialogComponent,
    EditNewsComponent,
    EditSelectiveComponent,
    EditIntroComponent,
    EditUserformComponent,
    EditUserformLabelComponent,
    EditUserformRecordsComponent,
    RequestDialogComponent,
    EditDistrictDatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    UploadComponent,
  ],
  entryComponents: [
    DialogComponent,
    RequestDialogComponent
  ],
  providers: [
    UploadService,
  ]
})
export class UploadModule { }
