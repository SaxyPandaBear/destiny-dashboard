import {Component, OnInit} from '@angular/core';
import {SharedApp} from 'app/shared/services/shared-app.service';
import {AccountGrimoireService} from 'app/bungie/services/destiny/account-grimoire.service';
import {CardComponent} from '../_base/card.component';
import {DestinyMembership} from "app/bungie/services/user/user.interface";
import {SharedBungie} from "../../bungie/shared-bungie.service";

@Component({
    selector: 'app-grimoire',
    templateUrl: './grimoire.component.html',
    styleUrls: ['./grimoire.component.scss']
})
export class GrimoireComponent extends CardComponent {
    CARD_DEFINITION_ID = 7;

    private selectedMembership: DestinyMembership;

    constructor(public sharedApp: SharedApp, private sharedBungie: SharedBungie, private grimoireService: AccountGrimoireService) {
        super(sharedApp);
    }

    ngOnInit() {
        super.ngOnInit();

        this.selectedMembership = this.sharedBungie.destinyMemberships[this.sharedApp.userPreferences.membershipIndex];

        this.grimoireService.getAccountGrimoire(this.selectedMembership).then(data => console.log(data));

    }

}
