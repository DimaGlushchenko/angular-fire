import { enableProdMode } from '@angular/core';
import { enableDebugTools } from "@angular/platform-browser";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationRef } from "../functions/node_modules/@angular/core/core";
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
  let applicationRef = module.injector.get(ApplicationRef);
  let appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
});

//ng.profiler.timeChangeDetection({record: true})