import "angular";
import "angular-resource";
import "angular-animate";
import "ng-infinite-scroll";
import "angular-spinner";
import "angular-auto-validate/dist/jcs-auto-validate";
import "angular-ladda";
import "angular-strap";
import "angularjs-toaster";
import "angular-ui-router";

import "./app.main";
// import "./services";
import "./filters";
// import "./components";

import "./polyfills.ts";

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';

import {LaddaModule} from "angular2-ladda";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ToasterModule, ToasterService} from "angular2-toaster";
import {Contact} from "./services/contact.resource";
import {ContactService} from "./services/contact.service";
import {SearchComponent} from "./components/search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {CardComponent} from "./components/card.component";
import {SpinnerComponent} from "./components/spinner.component";
import {PersonListComponent} from "./components/person-list.component";
import {PersonCreateComponent} from "./components/person-create.component";
import {PersonEditComponent} from "./components/person-edit.component";
import {AppRootComponent} from "./components/app-root.component";

import {routes} from './app.routes';
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    InfiniteScrollModule,
    ToasterModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    Contact,
    ContactService,
    ToasterService,
  ],
  declarations: [
    SearchComponent,
    DefaultImagePipe,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    AppRootComponent,
  ],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
