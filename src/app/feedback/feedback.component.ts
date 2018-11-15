
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { FeedbackService } from './feedback.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

const componentNameList = [
    {
        label: 'select',
        value: 'select'
    },
    {
        label: 'select-box',
        value: 'select-box'
    },
    {
        label: 'tree-select',
        value: 'tree-select'
    },
    {
        label: 'editor',
        value: 'editor'
    },
    {
        label: 'ueditor',
        value: 'ueditor'
    },
    {
        label: 'table',
        value: 'table'
    },
    {
        label: 'message',
        value: 'message'
    },
    {
        label: 'modal',
        value: 'modal'
    },
    {
        label: 'viewer',
        value: 'viewer'
    },
    {
        label: 'upload',
        value: 'upload'
    },
    {
        label: 'dropdown-search',
        value: 'dropdown-search'
    },
    {
        label: 'search-area',
        value: 'search-area'
    }

]
@Component({
    selector: 'bgx-feedback',
    templateUrl: 'feedback.component.html',
    styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit {
    validateForm: FormGroup;
    oldObj: object;
    config: any = {
        toolbars: [['Undo', 'Redo', '|', 'Bold', 'insertimage', 'link', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify' ]],
        autoClearinitialContent: true,
        wordCount: false
      };
    list = componentNameList;
    loading = false;
    avatar = 'http://pic4.zhimg.com/da8e974dc_xl.jpg';
    @Input() userInfo: Object;
    @ViewChild('ueditor') ueditor: any;
    constructor(
        private modal: NzModalRef,
        private fb: FormBuilder,
        private feedbackService: FeedbackService,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
        this.validateForm = this.fb.group({
            title: [null, [Validators.required]],
            userName: [{value: null, disabled: false}, [Validators.required]],
            componentName: [null, [Validators.required]],
            description: [null, [Validators.required]],
        });
        this.init();
    }
    init() {
        let comName = location.hash.replace(/#\//g, '');
        if (this.list.some(item => item.label === comName)) {
            this.validateForm.patchValue({componentName: comName});
        }
        if (this.userInfo) {
            this.validateForm.patchValue({userName: `${this.userInfo['userName']}<${this.userInfo['email']}>`});
            this.validateForm.get('userName').disable();
            this.avatar = this.userInfo['avatar'];
        }
        this.oldObj = this.validateForm.value;
    }
    submit() {
        if (!this.validateForm.valid) {
            for (const i in this.validateForm.controls) {
              if (this.validateForm.controls.hasOwnProperty(i)) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[ i ].updateValueAndValidity();
              }
            }
            return false;
        }
        this.loading = true;
        // console.log(this.validateForm.value);
        this.feedbackService.addQuestion({...this.validateForm.value, userName: this.validateForm.get('userName').value, avatar: this.avatar})
        .subscribe(res => {
            this.loading = false;
            if (res.success) {
                this.modal.destroy({data: true});
            }
        })
    }

    cancal() {
        if (JSON.stringify(this.oldObj) === JSON.stringify(this.validateForm.value)) {
            this.modal.destroy();
            return false;
        }
        this.modalService.confirm({
            nzTitle  : '<i>提示</i>',
            nzContent: '<b>数据正在编辑状态，是否继续关闭？</b>',
            nzOnOk   : () => {
                this.modal.destroy();
            }
        });
    }
}
