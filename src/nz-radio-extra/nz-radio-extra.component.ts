import {
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2,
    ViewEncapsulation,
    forwardRef,
  } from '@angular/core';

  import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
  import { toBoolean, deprecation } from '../util/convert';

  @Component({
    selector     : '[nz-radio-extra]',
    encapsulation: ViewEncapsulation.None,
    template     : `
      <span [ngClass]="_classMap">
        <span [ngClass]="_innerPrefixCls"></span>
        <input type="radio" [ngClass]="_inputPrefixCls" [(ngModel)]="nzChecked" (focus)="nzFocus()" (blur)="nzBlur()">
      </span>
      <ng-content></ng-content>
    `,
    providers    : [
      {
        provide    : NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzRadioExtraComponent),
        multi      : true
      }
    ],
    styleUrls    : [
      './style/index.less'
    ]
  })
  export class NzRadioExtraComponent implements OnInit, ControlValueAccessor {
    private _checked = false;
    private _disabled = false;
    private _focused = false;
    _el: HTMLElement;
    _classMap: any;
    _value: string;
    _prefixCls = 'ant-radio';
    _innerPrefixCls = `${this._prefixCls}-inner`;
    _inputPrefixCls = `${this._prefixCls}-input`;
    // ngModel Access
    onChange: any = Function.prototype;
    onTouched: any = Function.prototype;

    @Input()
    @HostBinding('class.ant-radio-wrapper-checked')
    set nzChecked(value: boolean) {
      this._checked = toBoolean(value);
      this.setClassMap();
    }

    get nzChecked(): boolean {
      return this._checked;
    }

    @Input()
    get nzValue(): string {
      return this._value;
    }

    set nzValue(value: string) {
      if (this._value === value) {
        return;
      }
      this._value = value;
    }

    @Input()
    @HostBinding('class.ant-radio-wrapper-disabled')
    set nzDisabled(value: boolean) {
      this._disabled = toBoolean(value);
      this.setClassMap();
    }

    get nzDisabled(): boolean {
      return this._disabled;
    }

    @HostListener('click', [ '$event' ])
    onClick(e: MouseEvent): void {
      e.preventDefault();
      if (!this._disabled) {
        // this._checked = true;
        this.updateValue(!this._checked);
      }
    }

    nzFocus(): void {
      this._focused = true;
      this.setClassMap();
    }

    nzBlur(): void {
      this._focused = false;
      this.setClassMap();
    }

    setClassMap(): void {
      this._classMap = {
        [this._prefixCls]              : true,
        [`${this._prefixCls}-checked`] : this._checked,
        [`${this._prefixCls}-focused`] : this._focused,
        [`${this._prefixCls}-disabled`]: this._disabled
      };
    }

    constructor(private _elementRef: ElementRef, public _renderer: Renderer2) {
      deprecation(`nz-radio 已支持允许独立使用\n https://ng.ant.design/#/components/radio`);
      this._el = this._elementRef.nativeElement;
    }

    ngOnInit(): void {
      this._renderer.addClass(this._el, `${this._prefixCls}-wrapper`);
      this.setClassMap();
    }

    updateValue(value: boolean): void {
        if (value === this._checked) {
        return;
        }
        this.onChange(value);
        this._checked = value;
        this.setClassMap();
    }

    writeValue(value: any): void {
        this._checked = value;
        this.setClassMap();
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }
  }
