import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NzSpinModule, NzGridModule, NzAvatarModule } from 'ng-zorro-antd';

import { NzRadioExtraComponent } from './nz-radio-extra.component';

@NgModule({
    imports:        [ CommonModule, FormsModule ],
    declarations:   [ NzRadioExtraComponent ],
    exports:        [ NzRadioExtraComponent ]
})
export class NzRadioExtraModule {
}
