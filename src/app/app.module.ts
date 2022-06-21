import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [ // this place phân bổ cho cái app module
    AppComponent,
    HelloComponent,
    HiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
