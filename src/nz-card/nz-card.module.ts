import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule, NzTabsModule, NzAvatarModule } from 'ng-zorro-antd';

import { NzCardComponent } from './nz-card.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardActionComponent } from './nz-card-action.component';

@NgModule({
    imports:        [ CommonModule, NzSpinModule, NzTabsModule, NzAvatarModule ],
    declarations:   [ NzCardComponent, NzCardTabComponent, NzCardMetaComponent, NzCardGridDirective, NzCardActionComponent ],
    exports:        [ NzCardComponent, NzCardTabComponent, NzCardMetaComponent, NzCardGridDirective, NzCardActionComponent ]
})
export class NzCardModule {
}
