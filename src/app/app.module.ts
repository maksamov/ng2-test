import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CodeapiService } from './codeapi.service';

import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CodeapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
