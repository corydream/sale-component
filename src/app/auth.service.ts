

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    subjectAuth$ = new BehaviorSubject({});
    constructor(
    ) { }
    broadcastUserInfo(userInfo: object) {
        this.subjectAuth$.next(userInfo);
    }
}
