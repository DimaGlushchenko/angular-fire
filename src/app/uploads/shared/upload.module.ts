import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { UploadService } from './upload.service';
import { UploadFormComponent } from '../upload-form/upload-form.component';
import { UploadsListComponent } from '../uploads-list/uploads-list.component';
import { UploadDetailComponent } from '../upload-detail/upload-detail.component';

import { Routes, RouterModule } from '@angular/router';
import { FileDropDirective } from './file-drop.directive';

const routes: Routes = [
  { path: '', component: UploadsListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UploadFormComponent,
    UploadsListComponent,
    UploadDetailComponent,
    FileDropDirective
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
