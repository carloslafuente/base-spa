import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
