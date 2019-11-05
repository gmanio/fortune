import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFrontPageComponent } from 'src/app/mobile/pages/mobile-front-page/mobile-front-page.component';
import { MobileRoutingModule } from 'src/app/mobile/mobile-routing.module';
import { FortuneComponent } from 'src/app/mobile/pages/fortune/fortune.component';
import { MatButtonModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [
    MobileFrontPageComponent,
    FortuneComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MobileModule { }
