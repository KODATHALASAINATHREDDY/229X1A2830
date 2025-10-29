import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { FutureGoalsComponent } from './components/future-goals/future-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    AcademicDetailsComponent,
    FutureGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
