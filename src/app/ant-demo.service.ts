

import { Injectable } from '@angular/core';
import { ApiService } from './core/service/api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AntDemoService {

    constructor(
        private apiSer: ApiService
    ) { }

    getUserName() {
        return this.apiSer.get('getCurrentUser')
        .pipe(map(res => {
            return res;
        }))
    }
}
