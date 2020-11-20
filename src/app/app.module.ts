import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { BootstrapcomponentComponent } from './bootstrapcomponent/bootstrapcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UtilitiesComponent,
    BootstrapcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
