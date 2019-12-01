import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent, AnimateComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserModule, BrowserAnimationsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
