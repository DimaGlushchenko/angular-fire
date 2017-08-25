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
import { UiModule } from "./ui/shared/ui.module";
import { CoreModule } from "./core/core.module";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = environment.firebaseConfig;
import { environment } from "../environments/environment";

import { GoogleMapComponent } from "./geo/google-map/google-map.component";
import { GeoService } from "./geo/geo.service";

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent],
  providers: [GeoService]
})
export class AppModule {}
