import { Inject, Component } from "@angular/core";

import { ContactService } from "../services/contact.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "personEdit",
  templateUrl: 'app/components/person-form.html'
})
export class PersonEditComponent {
    public mode: string = 'Edit';
    public person: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                @Inject(ContactService) public contacts: ContactService) {
      this.route.params.subscribe(params => {
        if (params['email']) {
          this.person = this.contacts.getPerson(params['email']);
        }
      })
    }

    save() {
      this.contacts.updateContact(this.person).then(() => {
        this.router.navigate(['']);
      });
    };

    remove() {
      this.contacts.removeContact(this.person).then(() => {
        this.router.navigate(['']);
      });
    };

  }