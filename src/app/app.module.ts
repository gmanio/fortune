import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopFrontPageComponent } from './desktop-front-page/desktop-front-page.component';
import { MobileFrontPageComponent } from './mobile/pages/mobile-front-page/mobile-front-page.component';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { MobileModule } from 'src/app/mobile/mobile.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DesktopFrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobileModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    MobileFrontPageComponent,
    DesktopFrontPageComponent
  ],
  providers: [ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
