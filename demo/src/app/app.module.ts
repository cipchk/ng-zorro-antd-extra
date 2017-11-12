import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';

import { DemoHomeComponent } from './home.component';

import { AppComponent } from './app.component';

// nz-list
import { DemoNzListComponent } from './nz-list/nz-list.component';
import { DemoNzListBasicComponent } from './nz-list/basic.component';
import { DemoNzListSimpleComponent } from './nz-list/simple.component';
import { DemoNzListLoadMoreComponent } from './nz-list/loadmore.component';
import { DemoNzListVerticalComponent } from './nz-list/vertical.component';
import { DemoNzListGridComponent } from './nz-list/grid.component';
import { DemoNzListResponsiveComponent } from './nz-list/responsive.component';
// nz-card
import { DemoNzCardComponent } from './nz-card-v3/nz-card.component';
import { DemoNzCardBasicComponent } from './nz-card-v3/basic.component';
import { DemoNzCardTabComponent } from './nz-card-v3/tab.component';
import { DemoNzCardInnerComponent } from './nz-card-v3/inner.component';
import { DemoNzCardNoBoarderComponent } from './nz-card-v3/noborder.component';
import { DemoNzCardSimpleComponent } from './nz-card-v3/simple.component';
import { DemoNzCardCustomizedComponent } from './nz-card-v3/customized.component';
import { DemoNzCardColumnComponent } from './nz-card-v3/column.component';
import { DemoNzCardLoadingComponent } from './nz-card-v3/loading.component';
import { DemoNzCardGridComponent } from './nz-card-v3/grid.component';
import { DemoNzCardMoreComponent } from './nz-card-v3/more.component';
import { DemoNzCardCompatibleComponent } from './nz-card-v3/compatible.component';
// nz-divider
import { DemoNzDividerComponent } from './nz-divider/nz-divider.component';
import { DemoNzDividerHorizontalComponent } from './nz-divider/horizontal.component';
import { DemoNzDividerVerticalComponent } from './nz-divider/vertical.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,

        RouterModule.forRoot([
            { path: '', component: DemoHomeComponent },
            { path: 'list', component: DemoNzListComponent },
            { path: 'card', component: DemoNzCardComponent },
            { path: 'divider', component: DemoNzDividerComponent }
        ], { useHash: true }),

        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        NgZorroAntdExtraModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DemoHomeComponent,
        // nz-list
        DemoNzListComponent,
        DemoNzListSimpleComponent,
        DemoNzListBasicComponent,
        DemoNzListLoadMoreComponent,
        DemoNzListVerticalComponent,
        DemoNzListGridComponent,
        DemoNzListResponsiveComponent,
        // nz-card
        DemoNzCardComponent,
        DemoNzCardBasicComponent,
        DemoNzCardNoBoarderComponent,
        DemoNzCardSimpleComponent,
        DemoNzCardCustomizedComponent,
        DemoNzCardColumnComponent,
        DemoNzCardLoadingComponent,
        DemoNzCardGridComponent,
        DemoNzCardTabComponent,
        DemoNzCardInnerComponent,
        DemoNzCardMoreComponent,
        DemoNzCardCompatibleComponent,
        // nz-divider
        DemoNzDividerComponent,
        DemoNzDividerHorizontalComponent,
        DemoNzDividerVerticalComponent
    ],
    bootstrap: [AppComponent]
})

export class AppDemoModule {
}
