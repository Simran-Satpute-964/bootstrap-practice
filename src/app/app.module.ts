import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { BootstrapcomponentComponent } from './bootstrapcomponent/bootstrapcomponent.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UtilitiesComponent,
    BootstrapcomponentComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
