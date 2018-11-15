import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'bgx-question',
    templateUrl: 'question.component.html',
    styleUrls: ['./question.component.less']
})

export class QuestionComponent implements OnInit {
    list = [];
    pageIndex = 1;
    total = 1;
    pageSize = 10;
    auth = false;
    constructor(
        private questionService: QuestionService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.init();
        this.authService.subjectAuth$
        .subscribe(res => {
            const email = res['email'];
            if (email === 'liuxiang1@banggood.com' ||
                email === 'zhulinfeng@banggood.com' ||
                email === 'duanguang@banggood.com') {
                this.auth = true;
            }
        })
    }
    init() {
        this.questionService.getList({
            componentName: location.hash.replace(/#\//g, ''),
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
        })
        .subscribe(res => {
            if (res.success) {
                this.list = res.result.items;
                this.total = Math.floor(res.result.total / this.pageSize)
            }
        })
    }
    pageIndexChange(index: number) {
        this.pageIndex = index;
        this.init();
    }
}
