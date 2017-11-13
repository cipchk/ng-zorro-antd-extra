import { Component, ViewEncapsulation, Input, ElementRef, Renderer2, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'nz-icon',
    template: ``,
    styleUrls: [
        // todo: ngm-cli not supported less
        './style/patch.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class NzIconComponent implements OnChanges {

    @Input() nzSpin = false;

    @Input() nzType: string;

    _classMap: string[] = [];
    setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [ 'anticon' ];

        if (typeof this.nzSpin !== 'undefined' && this.nzSpin !== false)
            this._classMap.push(`anticon-spin`);

        if (this.nzType) this._classMap.push(`anticon-${this.nzType}`);

        this._classMap.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.setClass();
    }
}
