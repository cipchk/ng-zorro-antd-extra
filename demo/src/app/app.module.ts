import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';

// region: zorro modules

import {
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule,
    // SERVICES
    NzNotificationService,
    NzMessageService
} from 'ng-zorro-antd';
const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule
];
// endregion

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
import { DemoNzCardComponent } from './nz-card/nz-card.component';
import { DemoNzCardBasicComponent } from './nz-card/basic.component';
import { DemoNzCardTabComponent } from './nz-card/tab.component';
import { DemoNzCardInnerComponent } from './nz-card/inner.component';
import { DemoNzCardNoBoarderComponent } from './nz-card/noborder.component';
import { DemoNzCardSimpleComponent } from './nz-card/simple.component';
import { DemoNzCardCustomizedComponent } from './nz-card/customized.component';
import { DemoNzCardColumnComponent } from './nz-card/column.component';
import { DemoNzCardLoadingComponent } from './nz-card/loading.component';
import { DemoNzCardGridComponent } from './nz-card/grid.component';
import { DemoNzCardMoreComponent } from './nz-card/more.component';
import { DemoNzCardNoPaddingComponent } from './nz-card/no-padding.component';
import { DemoNzCardCompatibleComponent } from './nz-card/compatible.component';
// nz-divider
import { DemoNzDividerComponent } from './nz-divider/nz-divider.component';
import { DemoNzDividerHorizontalComponent } from './nz-divider/horizontal.component';
import { DemoNzDividerVerticalComponent } from './nz-divider/vertical.component';
// nz-icon
import { DemoNzIconComponent } from './nz-icon/nz-icon.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,

        RouterModule.forRoot([
            { path: '', component: DemoHomeComponent },
            { path: 'list', component: DemoNzListComponent },
            { path: 'card', component: DemoNzCardComponent },
            { path: 'divider', component: DemoNzDividerComponent },
            { path: 'icon', component: DemoNzIconComponent }
        ], { useHash: true }),

        BrowserAnimationsModule,
        ...ZORROMODULES,
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
        DemoNzCardNoPaddingComponent,
        // nz-divider
        DemoNzDividerComponent,
        DemoNzDividerHorizontalComponent,
        DemoNzDividerVerticalComponent,
        // nz-icon
        DemoNzIconComponent
    ],
    providers: [
        // Services
        NzNotificationService,
        NzMessageService
    ],
    bootstrap: [AppComponent]
})

export class AppDemoModule {
}
