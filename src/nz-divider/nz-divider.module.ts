import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzDividerComponent } from './nz-divider.component';

@NgModule({
    imports:        [ CommonModule ],
    declarations:   [ NzDividerComponent ],
    exports:        [ NzDividerComponent ]
})
export class NzDividerModule {
}
