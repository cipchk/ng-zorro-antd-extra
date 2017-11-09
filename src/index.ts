import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinModule, NzGridModule } from 'ng-zorro-antd';

import { NzListComponent } from './components/nz-list.component';
import { NzListItemComponent } from './components/nz-list-item.component';
import { NzListItemActionComponent } from './components/nz-list-item-action.component';
import { NzListItemMetaComponent } from './components/nz-list-item-meta.component';

export { NzListComponent } from './components/nz-list.component';
export { NzListItemComponent } from './components/nz-list-item.component';
export { NzListItemActionComponent } from './components/nz-list-item-action.component';
export { NzListItemMetaComponent } from './components/nz-list-item-meta.component';

@NgModule({
    imports:        [ CommonModule, NzSpinModule, NzGridModule ],
    declarations:   [ NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemActionComponent ],
    exports:        [ NzListComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemActionComponent ]
})
export class NzListModule {
}
