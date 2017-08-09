import {Injectable} from '@angular/core';
import {HttpRequestType, HttpService} from 'app/shared/services/http.service';
import {DestinyMembership} from "../user/user.interface";

@Injectable()
export class AccountGrimoireService {
    private cacheTimeMs: number = 30000;

    constructor(private http: HttpService) {}

    getAccountGrimoire(membership: DestinyMembership): Promise<any> {
        let requestUrl = `https://www.bungie.net/d1/Platform/Destiny/Vanguard/Grimoire/${membership.membershipType}/${membership.membershipId}`;

        //Get the response, or return the cached result
        return this.http.getWithCache(requestUrl, HttpRequestType.BUNGIE_BASIC, this.cacheTimeMs);
    }
}