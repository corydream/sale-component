
import { NgModule} from '@angular/core';
import { CommonModule, registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntDemoRoutingModule } from './ant-demo.routing.module';
import { AntDemoComponent } from './ant-demo.component';
import { MenuModule } from './menu/menu.module';

// import { COMPONENTS } from './index';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule , NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { FormsModule, } from '@angular/forms';
import zh from '@angular/common/locales/zh';
import { FeedbackModule } from './feedback/feedback.module';
import { ApiService } from './core/service/api.service';
import { AntDemoService } from './ant-demo.service';
import { QuestionService } from './question/question.service';
import { AuthService } from './auth.service';
registerLocaleData(zh);
@NgModule({
  imports: [
    CommonModule,
    AntDemoRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    FormsModule,
    MenuModule,
    FeedbackModule
  ],
  bootstrap: [AntDemoComponent],
  declarations: [AntDemoComponent, HeaderComponent, ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, {provide: LocationStrategy, useClass: HashLocationStrategy}, ApiService, AntDemoService, AuthService]
})
export class AntDemoModule { }


