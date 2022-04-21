import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodeSitesComponent } from './code-sites/code-sites.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CodeSitesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
