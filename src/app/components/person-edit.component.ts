import * as angular from "angular";
import {Component, Inject} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import {ContactService} from "../services/contact.service";
import {UIRouterState} from "../ajs-upgraded-providers";
import {UIRouterStateParams} from "../ajs-upgraded-providers";

@Component({
  selector: "personEdit", // <person-edit>
  templateUrl: "app/components/person-form.html",
})
export class PersonEditComponent {
  public mode: string = "Edit";
  public person: any;

  constructor(
    @Inject(ContactService) private contacts: ContactService,
    @Inject(UIRouterState) private $state,
    @Inject(UIRouterStateParams) private $stateParams
  ) {
    this.person = this.contacts.getPerson(this.$stateParams.email);
  }

  save() {
    this.contacts.updateContact(this.person).then(() => {
      this.$state.go("list");
    });
  }

  remove() {
    this.contacts.removeContact(this.person).then(() => {
      this.$state.go("list");
    });
  }
}

angular
  .module("codecraft")
  .directive(
    "personEdit",
    downgradeComponent({component: PersonEditComponent})
  );
