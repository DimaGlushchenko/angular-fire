import { ContentComponent } from './../content/content.component';
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavService } from './nav.service';

import { UserLoginComponent } from '../users/user-login/user-login.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';
import { UserFormComponent } from '../users/user-form/user-form.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UserFormComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UserProfileComponent,
  ]
})
export class UiModule { }
