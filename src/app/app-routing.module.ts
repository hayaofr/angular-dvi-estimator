import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VuedenezComponent} from './vuedenez/vuedenez.component';
import {NbequipesComponent} from './nbequipes/nbequipes.component';
import {UrgenceComponent} from './urgence/urgence.component';
import {SpecificationComponent} from './specification/specification.component';
import {ResultComponent} from './result/result.component';


export const appRoutes: Routes = [
  // 1st Route
  {path: 'vuedenez', component: VuedenezComponent},
  // 2nd Route
  {path: 'nbequipes', component: NbequipesComponent},
  // 3rd Route
  {path: 'urgence', component: UrgenceComponent},
  // 4th Route
  {path: 'specification', component: SpecificationComponent},
  // 5th Route
  {path: 'result', component: ResultComponent},
  // 6th Route
  {path: '', redirectTo: '/vuedenez', pathMatch: 'full'},
  // 7th Route
  {path: '**', component: VuedenezComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
