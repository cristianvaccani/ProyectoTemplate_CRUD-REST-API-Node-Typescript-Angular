import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ObraFormComponent } from './components/obra-form/obra-form.component';
import { ObraListComponent } from './components/obra-list/obra-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ObraFormComponent,
    ObraListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
