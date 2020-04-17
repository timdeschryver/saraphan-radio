import { Component, OnInit} from '@angular/core';
import { RegistrationFacade } from '@saraphan/account/domain';

@Component({
  selector: 'account-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    
    
    accountList$ = this.registrationFacade.accountList$;


    constructor(private registrationFacade: RegistrationFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.registrationFacade.load();
    }

}

