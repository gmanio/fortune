import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesktopFrontPageComponent } from './desktop-front-page/desktop-front-page.component';
import { MobileFrontPageComponent } from './mobile-front-page/mobile-front-page.component';
import { ApplicationStateService } from 'src/app/application-state.service';

@NgModule({
  declarations: [
    AppComponent,
    MobileFrontPageComponent,
    DesktopFrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MobileFrontPageComponent,
    DesktopFrontPageComponent
  ],
  providers: [ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
