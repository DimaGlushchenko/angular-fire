import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavService } from './nav.service';

import { UserLoginComponent } from '../users/user-login/user-login.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';
import { UserFormComponent } from '../users/user-form/user-form.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from './../content/content.component';
import { MoviesListComponent } from '../../InfiniteScroll/movies-list/movies-list.component';
import { EmojisComponent } from "../emojis/emojis.component";
import { ReversePipe } from "../../messages/pipe/reverse.pipe";
import { ToastMessagesComponent } from "../../messages/toast-messages/toast-messages.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    UserFormComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MoviesListComponent,
    EmojisComponent,
    ReversePipe,
    ToastMessagesComponent,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UserProfileComponent,
    MoviesListComponent,
    EmojisComponent,
    ReversePipe,
    ToastMessagesComponent,
  ]
})
export class UiModule { }
