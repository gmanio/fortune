import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileFrontPageComponent } from 'src/app/mobile/pages/mobile-front-page/mobile-front-page.component';
import { FortuneComponent } from 'src/app/mobile/pages/fortune/fortune.component';

const mobileRoutes: Routes = [
  {
    path: '', component: MobileFrontPageComponent, children: [
      { path: 'fortune', component: FortuneComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forChild(mobileRoutes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
