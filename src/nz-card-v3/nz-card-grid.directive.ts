import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[nz-card-v3-grid]'
})
export class NzCardGridV3Directive {
    @HostBinding('class.ant-card-grid') _nzCardGrid = true;
}
