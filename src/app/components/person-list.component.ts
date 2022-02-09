import * as angular from "angular";
import {Component, Inject} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import {ContactService} from "../services/contact.service";
@Component({
  selector: "personList",
  template: `
    <div class="col-md-12">
      <div
        class="row"
        infinite-scroll
		[infiniteScrollDistance]="2"
		[immediateCheck]="false"
		[infiniteScrollThrottle]="100"
		(scrolled)="contacts.loadMore()"
      >
        <ccCard
          *ngFor="let person of contacts.persons"
          [user]="person"
        >
        </ccCard>
      </div>

      <div *ngIf="contacts.persons.length == 0 && !contacts.isLoading">
        <div class="alert alert-info">
          <p class="text-center">
            No results found for search term '{{ search }}'
          </p>
        </div>
      </div>

      <cc-spinner
        [isLoading]="contacts.isLoading"
        [message]="'Loading...'"
      ></cc-spinner>
    </div>
  `,
})
export class PersonListComponent {
  constructor(@Inject(ContactService) private contacts: ContactService) {}
}

angular
  .module("codecraft")
  .directive(
    "personList",
    downgradeComponent({component: PersonListComponent})
  );
