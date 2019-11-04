import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { DesktopFrontPageComponent } from 'src/app/desktop-front-page/desktop-front-page.component';

const desktopRoutes: Routes = [
  { path: '', component: DesktopFrontPageComponent },
  { path: '**', redirectTo: '' }
];

const mobileRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(
    private router: Router,
    private applicationStateService: ApplicationStateService) {

    console.log(applicationStateService.isMobile);
    if (applicationStateService.isMobile) {
      router.resetConfig(mobileRoutes);
    }
  }
}
