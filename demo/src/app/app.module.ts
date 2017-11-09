import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzListModule } from 'ng-list-antd';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo.component';
import { DemoBasicComponent } from './components/basic.component';
import { DemoSimpleComponent } from './components/simple.component';
import { DemoLoadMoreComponent } from './components/loadmore.component';
import { DemoVerticalComponent } from './components/vertical.component';
import { DemoGridComponent } from './components/grid.component';
import { DemoResponsiveComponent } from './components/responsive.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,

        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        NzListModule
    ],
    declarations: [
        AppComponent,
        DemoComponent,
        DemoSimpleComponent,
        DemoBasicComponent,
        DemoLoadMoreComponent,
        DemoVerticalComponent,
        DemoGridComponent,
        DemoResponsiveComponent
    ],
    bootstrap: [AppComponent]
})

export class AppDemoModule {
}
