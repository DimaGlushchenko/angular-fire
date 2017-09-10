import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";

import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./services/core.module";
import { ItemModule } from "./items/shared/item.module";
import { PaymentModule } from './payments/payment.module';
import { UiModule } from "./ui/shared/ui.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
export const firebaseConfig = environment.firebaseConfig;
import { environment } from "../environments/environment";

import { GeoService } from "./geo/geo.service";
import { ChartService } from "./services/chart.service";
import { GoogleMapComponent } from "./geo/google-map/google-map.component";
import { Logger } from 'angular2-logger/core';

import { ReducerComponent } from "./reducers/component/reducer.component";
import { EffectsModule } from "@ngrx/effects/effects";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from "./reducers/effects/user.effects";
import { userReducer } from "./reducers/reducers/user.reducer";
import { PostEffects } from "./reducers/effects/post.effects";
import { postReducer } from "./reducers/reducers/post.reducer";
import { TranslatorComponent } from './translator/translator.component';

const APP_ID = 'angular-universal-firebase';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ReducerComponent,
    TranslatorComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    UiModule,
    CoreModule,
    ItemModule,
    PaymentModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey }),
    StoreModule.forRoot({ post: postReducer, user: userReducer }),
    EffectsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  bootstrap: [AppComponent],
  providers: [Logger, GeoService, ChartService]
})
export class AppModule { }
