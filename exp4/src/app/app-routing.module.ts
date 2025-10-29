import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { FutureGoalsComponent } from './components/future-goals/future-goals.component';

const routes: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'academic', component: AcademicDetailsComponent },
  { path: 'future', component: FutureGoalsComponent },
  { path: '', redirectTo: '/personal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
