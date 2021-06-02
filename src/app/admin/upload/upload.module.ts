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

import { UploadComponent } from './upload.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { EditSelectiveComponent } from './edit-selective/edit-selective.component';
import { EditIntroComponent } from './edit-intro/edit-intro.component';
import { EditUserformComponent } from './edit-userform/edit-userform.component';



@NgModule({
  declarations: [
    UploadComponent,
    DialogComponent,
    EditNewsComponent,
    EditSelectiveComponent,
    EditIntroComponent,
    EditUserformComponent
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
    MatProgressBarModule
  ],
  exports: [
    UploadComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
