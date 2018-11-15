
import { Injectable } from '@angular/core';
import { ApiService } from '../core/service/api.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionService {
    constructor(
        private apiService: ApiService
    ) { }

    getList(param) {
        return this.apiService.post(`list`, param)
        .pipe(map(res => {
            return res;
        }))
    }
}
