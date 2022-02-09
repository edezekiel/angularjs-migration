import * as angular from "angular";
import {Component, Inject, OnInit} from "@angular";
import {FormGroup, FormControl} from "@angular/forms";
import {downgradeComponent} from "@angular/upgrade/static";
import { ContactService } from "../services/contact.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: "search",
  template: `
    <form class="navbar-form navbar-left" [formGroup]="myForm">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Search name..."
          formControl="search"
        />
      </div>

      <div class="form-group">
        <select class="form-control" formControl="sorting">
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div class="form-group">
        <select class="form-control" formControl="ordering">
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>
    </form>
  `,
})
export class SearchComponent implements OnInit {
  protected myForm: FormGroup;

  constructor(@Inject(ContactService) private contacts: ContactService) {
    this.myForm = new FormGroup({
      search: new FormControl(),
      sorting: new FormControl("name"),
      ordering: new FormControl("ASC"),
    });
  }

  ngOnInit() {
    this.myForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(console.log)
      .subscribe(({sorting, ordering, search}) => {
        this.contacts.sorting = sorting;
        this.contacts.ordering = ordering;
        this.contacts.search = search;
        this.contacts.doSearch();
      });
  }
}

angular.module("codecraft").directive(
  "search",
  downgradeComponent({
    component: SearchComponent,
  })
);
