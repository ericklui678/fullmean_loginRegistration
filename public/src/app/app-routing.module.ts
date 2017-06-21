import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// remember to import components


const routes: Routes = [
  // { path: '', pathMatch: 'full', component: LandingComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'notes/private', component: NotesPrivateComponent },
  // { path: 'gohome', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
