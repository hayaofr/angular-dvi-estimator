import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {VuedenezComponent} from './vuedenez/vuedenez.component';
import {NbequipesComponent} from './nbequipes/nbequipes.component';
import {UrgenceComponent} from './urgence/urgence.component';
import {ResultComponent} from './result/result.component';
import {SpecificationComponent} from './specification/specification.component';

import {ModalModule} from 'ngx-bootstrap/modal';


/* Routing Module */
import {AppRoutingModule} from './app-routing.module';
import {FormDataService} from './data/formData.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VuedenezComponent,
    NbequipesComponent,
    UrgenceComponent,
    ResultComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: FormDataService, useClass: FormDataService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
