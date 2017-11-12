import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule, NzTabsModule, NzAvatarModule } from 'ng-zorro-antd';

import { NzCardV3Component } from './nz-card.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardGridV3Directive } from './nz-card-grid.directive';
import { NzCardActionComponent } from './nz-card-action.component';

@NgModule({
    imports:        [ CommonModule, NzSpinModule, NzTabsModule, NzAvatarModule ],
    declarations:   [ NzCardV3Component, NzCardTabComponent, NzCardMetaComponent, NzCardGridV3Directive, NzCardActionComponent ],
    exports:        [ NzCardV3Component, NzCardTabComponent, NzCardMetaComponent, NzCardGridV3Directive, NzCardActionComponent ]
})
export class NzCardV3Module {
}
