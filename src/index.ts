import { NgModule, ModuleWithProviders } from '@angular/core';

import { NzListModule } from './nz-list/nz-list.module';
import { NzCardModule } from './nz-card/nz-card.module';
import { NzDividerModule } from './nz-divider/nz-divider.module';
import { NzIconModule } from './nz-icon/nz-icon.module';
import { NzRadioExtraModule } from './nz-radio-extra/nz-radio-extra.module';

export * from './nz-list';
export * from './nz-card';
export * from './nz-divider';
export * from './nz-icon';
export * from './nz-radio-extra';

const MODULES = [
    NzListModule,
    NzCardModule,
    NzDividerModule,
    NzIconModule,
    NzRadioExtraModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class NgZorroAntdExtraRootModule {
}

@NgModule({ exports: MODULES })
export class NgZorroAntdExtraModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: NgZorroAntdExtraRootModule };
    }
}
