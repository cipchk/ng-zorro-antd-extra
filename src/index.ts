import { NgModule, ModuleWithProviders } from '@angular/core';

import { NzListModule } from './nz-list/nz-list.module';
import { NzCardV3Module } from './nz-card-v3/nz-card.module';
import { NzDividerModule } from './nz-divider/nz-divider.module';

export * from './nz-list';
export * from './nz-card-v3';
export * from './nz-divider';

const MODULES = [
    NzListModule,
    NzCardV3Module,
    NzDividerModule
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
