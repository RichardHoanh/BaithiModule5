import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './tour/create/create.component';
import { EditComponent } from './tour/edit/edit.component';
import { DeleteComponent } from './tour/delete/delete.component';
import { HomeComponent } from './tour/home/home.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent,
    TourDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
