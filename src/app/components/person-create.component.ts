import * as angular from "angular";
import {Component, Inject} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import {ContactService} from "../services/contact.service";
import {UIRouterState} from "../ajs-upgraded-providers";

@Component({
  selector: "personCreate",
  templateUrl: "app/components/person-form.html",
})
export class PersonCreateComponent {
  public mode: string = 'Create';
  public person = {};

  constructor(
    @Inject(ContactService) private contacts: ContactService,
    @Inject(UIRouterState) private $state
  ) {
    this.person = {};
  }

  save() {
    console.log("createContact");
    this.contacts.createContact(this.person).then(() => {
      this.$state.go("list");
    });
  }
}

angular
  .module("codecraft")
  .directive(
    "personCreate",
    downgradeComponent({component: PersonCreateComponent})
  );
