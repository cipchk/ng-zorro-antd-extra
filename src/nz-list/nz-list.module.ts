import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule, NzGridModule, NzAvatarModule } from 'ng-zorro-antd';

import { NzListComponent } from './nz-list.component';
import { NzListItemComponent } from './nz-list-item.component';
import { NzListItemActionComponent } from './nz-list-item-action.component';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';

@NgModule({
    imports:        [ CommonModule, NzSpinModule, NzGridModule, NzAvatarModule ],
    declarations:   [ NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemActionComponent ],
    exports:        [ NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemActionComponent ]
})
export class NzListModule {
}
