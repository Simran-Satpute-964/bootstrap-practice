import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapcomponentComponent } from './bootstrapcomponent/bootstrapcomponent.component';
import { ContainerComponent } from './container/container.component';
import { UtilitiesComponent } from './utilities/utilities.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/container', pathMatch: 'full' },
  { path: 'container', component: ContainerComponent },
  { path: 'component', component: BootstrapcomponentComponent },
  { path: 'utilities', component: UtilitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
