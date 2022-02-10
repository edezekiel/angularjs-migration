import { Inject, Component } from "@angular/core";

import { ContactService } from "../services/contact.service";
import { Router } from '@angular/router';

@Component({
  selector: 'personCreate',
  templateUrl: 'app/components/person-form.html' 
})
export class PersonCreateComponent {
    public person = {};
    public mode: string = 'Create';

    constructor(
      @Inject(ContactService) public contacts: ContactService,
               private router: Router) {
      this.person = {};
    }

    save() {
      console.log("createContact");
      this.contacts.createContact(this.person)
          .then(() => {
            this.router.navigate(['']);
          })
    }
  }