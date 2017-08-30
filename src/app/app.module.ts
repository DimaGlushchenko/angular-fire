import { ItemModule } from "./items/shared/item.module";
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
import { UiModule } from "./ui/shared/ui.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = environment.firebaseConfig;
import { environment } from "../environments/environment";

import { GeoService } from "./geo/geo.service";
import { ChartService } from "./services/chart.service";
import { GoogleMapComponent } from "./geo/google-map/google-map.component";

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReduceComponent } from './reducers/reduce/reduce.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ReduceComponent
  ],

  imports: [
    BrowserModule,
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
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    //StoreModule.forRoot({ message: simpleReducer }),
  ],
  bootstrap: [AppComponent],
  providers: [GeoService, ChartService]
})
export class AppModule { }
