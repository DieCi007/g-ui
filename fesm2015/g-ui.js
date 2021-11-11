import * as i0 from '@angular/core';
import { Component, Input, NgModule, EventEmitter, Output, Injectable, Pipe, InjectionToken, Inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';
import * as i1 from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import * as i1$1 from '@angular/cdk/overlay';
import { GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

class HeaderComponent {
    constructor() {
        this.color = '';
        this.raised = true;
        this.height = '';
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-header',
                template: "<div class=\"header\" [ngClass]=\"{'primary': color==='primary', 'secondary': color==='secondary',\n'raised': raised}\" [style]=\"{'background-color': (color==='primary'||color==='secondary')?'':color, 'height': height}\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".header{height:4rem;width:100%}.header .content{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:Lato;background:radial-gradient(circle at 75% 190%,hsla(0,0%,98%,.18823529411764706),transparent 15%),radial-gradient(circle at 25% -155%,hsla(0,0%,98%,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,hsla(0,0%,98%,.25098039215686274),transparent 55.5%)}.header.primary{background:#000}.header.raised{box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.header.secondary{background:#c8a415}.header.secondary .content{height:100%;width:100%;background:radial-gradient(circle at 75% 180%,rgba(0,0,0,.18823529411764706),transparent 14%),radial-gradient(circle at 25% -155%,rgba(0,0,0,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,#000,transparent 40%)}"]
            },] }
];
HeaderComponent.propDecorators = {
    color: [{ type: Input }],
    raised: [{ type: Input }],
    height: [{ type: Input }]
};

class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HeaderComponent],
                imports: [
                    CommonModule
                ],
                exports: [HeaderComponent]
            },] }
];

class ModalComponent {
    constructor() {
        this.borderRadius = '20px';
        this.resizable = false;
        this.visibleChange = new EventEmitter();
        this.zIndex = 100;
        this.appendToBody = false;
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-modal',
                template: "<p-dialog [visible]=\"visible\" (visibleChange)=\"visibleChange.emit($event)\" [baseZIndex]=\"zIndex\"\n          [resizable]=\"resizable\" [focusOnShow]=\"false\" [draggable]=\"draggable\"\n          [focusTrap]=\"false\" [blockScroll]=\"true\" [showHeader]=\"false\"\n          [appendTo]=\"appendToBody && 'body'\"\n          [position]=\"position\" [modal]=\"true\" [style]=\"{'height': height,\n           'width': width, 'max-width': maxWidth, 'border-radius': borderRadius, 'font-family': 'Lato'}\"\n          [dismissableMask]=\"true\" [contentStyle]=\"{'border-radius': borderRadius, 'padding': 0}\">\n  <ng-content></ng-content>\n</p-dialog>\n",
                styles: [":host ::ng-deep .p-dialog-content{padding:0;height:100%;width:100%}:host ::ng-deep .p-dialog-mask{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:rgba(0,0,0,.15)}"]
            },] }
];
ModalComponent.propDecorators = {
    borderRadius: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    maxWidth: [{ type: Input }],
    resizable: [{ type: Input }],
    visible: [{ type: Input }],
    visibleChange: [{ type: Output }],
    draggable: [{ type: Input }],
    position: [{ type: Input }],
    zIndex: [{ type: Input }],
    appendToBody: [{ type: Input }]
};

class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModalComponent],
                exports: [ModalComponent],
                imports: [
                    CommonModule,
                    DialogModule
                ]
            },] }
];

class SunsetComponent {
    constructor() {
        this.sunChange = new EventEmitter();
        this.sunset = true;
    }
    onDayChange() {
        this.sunChange.emit();
    }
}
SunsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-sunset',
                template: "<div class=\"button\" (click)=\"onDayChange()\" [style]=\"{'width': width, 'border-radius': borderRadius}\"\n     [ngClass]=\"{'sunset': sunset, 'sunrise': !sunset, 'raised': raised}\">\n  <div class=\"sun\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n  <div class=\"shadow\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n</div>\n",
                styles: [".button{height:3rem;width:3rem;border-radius:50%;overflow:hidden;cursor:pointer}.button.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.button.sunset{background-color:#4a354c;-webkit-animation-name:sunset-background;animation-name:sunset-background;-webkit-animation-duration:2s;animation-duration:2s}.button.sunrise{background-color:#1e45b4;-webkit-animation-name:sunrise-background;animation-name:sunrise-background;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow{height:300%;width:100%;background:radial-gradient(circle at 50% 0,#6b9cec,transparent 25%),radial-gradient(circle at 50% 100%,#966164,transparent 25%)}.button .shadow.sunset{-webkit-animation-name:sunset-shadow;animation-name:sunset-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .shadow.sunrise,.button .shadow.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow.sunrise{-webkit-animation-name:sunrise-shadow;animation-name:sunrise-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun{position:absolute;top:0;height:100%;width:100%;background:radial-gradient(circle at 50% 50%,#ef9029,transparent 25%),radial-gradient(circle at 50% 50%,#f6a65d,transparent 50%)}.button .sun.sunrise{-webkit-animation-name:sunrise;animation-name:sunrise}.button .sun.sunrise,.button .sun.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun.sunset{-webkit-animation-name:sunset;animation-name:sunset}@-webkit-keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@-webkit-keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@-webkit-keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@-webkit-keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@-webkit-keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@-webkit-keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}@keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}"]
            },] }
];
SunsetComponent.propDecorators = {
    width: [{ type: Input }],
    borderRadius: [{ type: Input }],
    raised: [{ type: Input }],
    sunChange: [{ type: Output }],
    sunset: [{ type: Input }]
};

class SunsetModule {
}
SunsetModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SunsetComponent],
                exports: [SunsetComponent],
                imports: [
                    CommonModule
                ]
            },] }
];

class SpinnerComponent {
    constructor() {
        this.height = '5rem';
        this.width = '5rem';
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-spinner',
                template: "<div class=\"spinner\" [style]=\"{'height': height, 'width': width}\"></div>\n",
                styles: [".spinner{display:inline-block;border-radius:50%;border-color:green #fff red;border-style:solid;border-width:7px;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]
            },] }
];
SpinnerComponent.propDecorators = {
    height: [{ type: Input }],
    width: [{ type: Input }]
};

class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                exports: [SpinnerComponent],
                imports: [
                    CommonModule
                ]
            },] }
];

class InputFieldComponent {
    constructor() {
        this.autofocus = false;
        this.type = 'text';
        this.font = 'large';
        this.width = '100%';
    }
    isActive() {
        const val = this.control.value;
        return val !== null && val !== undefined && (val === 0 || !!val);
    }
    ;
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
InputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-input-field',
                template: "<label class=\"input-control\" [style]=\"{width: width}\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <input [ngClass]=\"{'active': isActive(), 'normal': font==='normal'}\"\n         [type]=\"type\" [formControl]=\"control\" [formGroup]=\"form\" [style]=\"{textAlign: textAlign && 'center'}\"\n         [autofocus]=\"autofocus\" [autocomplete]=\"autocomplete\"/>\n  <span>{{label}}</span>\n  <label class=\"disabled-view\" [ngClass]=\"{'normal': font==='normal'}\">\n    {{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                styles: [".input-control{position:relative;margin:.8rem 0 0 .5rem;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.input-control span{display:block;text-transform:uppercase;color:#000;position:absolute;transition:all .1s linear}.input-control input~span{top:.7rem}.input-control input.normal~span{top:.5rem}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4rem;border:none;border-bottom:1px solid #000;padding:5px 0 2px;color:#555;width:100%}.input-control .disabled-view.normal,.input-control input.normal{font-size:1.1rem}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:active,.input-control input:active{border-color:#c8a415}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none;border-color:#c8a415}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control input.active~span,.input-control input:focus~span{transform:translateY(-1.5rem)}.input-control input.normal.active~span,.input-control input.normal:focus~span{transform:translateY(-1.3rem)}.input-control .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%;height:3px}@media only screen and (min-width:320px) and (max-width:812px){.input-control span{font-size:.9rem}.input-control .disabled-view,.input-control input{font-size:1.1rem}}"]
            },] }
];
InputFieldComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    autofocus: [{ type: Input }],
    autocomplete: [{ type: Input }],
    type: [{ type: Input }],
    font: [{ type: Input }],
    width: [{ type: Input }],
    textAlign: [{ type: Input }]
};

class InputFieldModule {
}
InputFieldModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputFieldComponent],
                exports: [InputFieldComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];

class NavComponent {
    constructor() {
        this.isSidebarOpen = false;
        this.position = 'left';
        this._sideBarSize = window.innerWidth > 812 ? '300px' : '200px';
    }
    get sideBarSize() {
        return this._sideBarSize;
    }
    set sideBarSize(value) {
        this._sideBarSize = value;
        this.defaultSidebarWith = value;
    }
    ngOnInit() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.pipe(debounceTime(1000), distinctUntilChanged(), tap(evt => {
            this._sideBarSize = evt.target['innerWidth'] < 812 ?
                '200px' : this.defaultSidebarWith || '300px';
        })).subscribe();
    }
    ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
    }
    toggle() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
    get sidebarWidth() {
        if (this.position === 'bottom') {
            return '100%';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    get sidebarHeight() {
        if (this.position === 'left') {
            return '100%';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    get sidebarMargin() {
        if (this.position === 'bottom') {
            return '0';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    onOverlayClick() {
        this.toggle();
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-nav',
                template: "<div class=\"sidenav-container\">\n  <div class=\"sidenav\"\n       [style]=\"{'width': sidebarWidth,\n       'height': sidebarHeight,\n       'top': position==='left'?'0':null,'bottom':position==='bottom'?'0':null}\">\n    <ng-content select=\"[sidenav]\"></ng-content>\n  </div>\n  <div class=\"sidenav-overlay\" *ngIf=\"isSidebarOpen\"\n       (click)=\"onOverlayClick()\"></div>\n  <div class=\"sidenav-content\" [class.disabled]=\"isSidebarOpen\"\n       [style]=\"{'margin-left': sidebarMargin}\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>\n",
                styles: [".sidenav-container{height:100%;width:100%;display:flex;position:relative}.sidenav-container .sidenav{position:fixed;left:0;z-index:2;overflow-x:hidden;transition:.5s;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.sidenav-container .sidenav-content{height:100%;flex:1;display:flex;flex-direction:column;transition:.5s}.sidenav-container .sidenav-content.disabled{overflow:hidden;pointer-events:none}.sidenav-container .sidenav-overlay{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);position:absolute;top:0;z-index:1;height:100%;width:100%}"]
            },] }
];
NavComponent.propDecorators = {
    position: [{ type: Input }],
    sideBarSize: [{ type: Input }]
};

class NavModule {
}
NavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NavComponent],
                exports: [NavComponent],
                imports: [
                    CommonModule
                ]
            },] }
];

class CardComponent {
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-card',
                template: "<div class=\"container\" [ngStyle]=\"containerStyle\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".container{box-shadow:0 2px 10px 0 rgba(0,0,0,.18);border-radius:20px;overflow:hidden}"]
            },] }
];
CardComponent.propDecorators = {
    containerStyle: [{ type: Input }]
};

class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CardComponent],
                imports: [
                    CommonModule
                ],
                exports: [CardComponent]
            },] }
];

class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.clicked = new EventEmitter();
        this.width = '100%';
        this.height = '2rem';
        this.color = 'primary';
        this.disabled = false;
    }
    onButtonClicked(event) {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-button',
                template: "<div class=\"button-container\" [style]=\"{'width': width}\">\n  <button (click)=\"onButtonClicked($event)\" class=\"button\" [disabled]=\"disabled\"\n          [type]=\"type\" [style]=\"{'height': height}\"\n          [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\"\n          [ngStyle]=\"{backgroundColor: !['primary', 'secondary', 'danger']\n          .includes(color) && color}\">\n    <span [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\">\n      {{label}}</span>\n  </button>\n</div>\n",
                styles: [".button-container .button{position:relative;top:0;font-family:Lato;font-weight:500;width:100%;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.18);font-size:1.1rem;border-radius:25px;cursor:pointer;overflow:hidden;padding:0}.button-container .button.primary{background-color:#ffd54f}.button-container .button.secondary{background-color:#4e342e;color:#fff}.button-container .button.danger{background-color:#d0021b;color:#fff}.button-container .button:active:not(:disabled){top:1px;box-shadow:0 1px 7px 0 rgba(0,0,0,.18)}.button-container .button:disabled{background-color:#c7c7c7}.button-container .button span{display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:0 .5rem;overflow:hidden}.button-container .button span.danger,.button-container .button span.primary{background:radial-gradient(circle at 10% 50%,rgba(0,0,0,.06666666666666667),transparent 43%)}.button-container .button span.secondary{background:radial-gradient(circle at 10% 50%,hsla(0,0%,100%,.06666666666666667),transparent 43%)}"]
            },] }
];
ButtonComponent.propDecorators = {
    label: [{ type: Input }],
    type: [{ type: Input }],
    clicked: [{ type: Output }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }]
};

class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [
                    CommonModule
                ],
                exports: [ButtonComponent]
            },] }
];

class SwitchInputComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
SwitchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-switch-input',
                template: "<div>\n  <label class=\"label\">{{label}}</label>\n  <label class=\"container\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n  </label>\n</div>\n",
                styles: ["div{display:flex;flex-direction:column}div label.label{padding-left:.2rem;padding-bottom:.1rem;text-transform:uppercase}div label.container{cursor:pointer;position:relative;width:4.5rem;height:2rem;display:inline-block;overflow:hidden;border-radius:20px}div label.container input{position:absolute;transform:scale(0)}div label.container input:checked~.switch{background:#ffd54f}div label.container input:checked~.switch:before{transform:translateX(-2.5rem)}div label.container input:checked~.switch:after{transform:translateX(0)}div label.container input:disabled~.switch{background:#ddd}div label.container .switch{display:block;width:4.5rem;height:2rem;border-radius:20px;background:#6d6d6d;transition:all .35s}div label.container .switch:before{background:#ddd;left:.2rem}div label.container .switch:after{right:.2rem;background:#4e342e;transform:translateX(2.5rem)}div label.container .switch:after,div label.container .switch:before{content:\"\";display:block;position:absolute;width:1.6rem;height:1.6rem;top:.19rem;border-radius:50%;transition:all .35s}"]
            },] }
];
SwitchInputComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};

class SwitchInputModule {
}
SwitchInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SwitchInputComponent],
                exports: [SwitchInputComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];

class PaginatorComponent {
    constructor() {
        this.selectedPage = 0;
        this.totalPages = 1;
        this.sizeOptions = [10, 25, 50];
        this.selectedSize = 10;
        this.hideLabel = false;
        this.perPageLabel = 'Per page';
        this.currentPageLabel = 'Current page';
        this.valueChange = new EventEmitter();
    }
    onPageChange(selectedPage) {
        if (this.selectedPage !== selectedPage) {
            this.valueChange.emit({
                size: this.selectedSize,
                page: selectedPage
            });
        }
    }
    onPageSizeChange(selectedSize) {
        if (this.selectedSize !== selectedSize) {
            this.valueChange.emit({
                size: selectedSize,
                page: 0
            });
        }
    }
    onFirstClick() {
        if (this.selectedPage > 0) {
            this.onPageChange(0);
        }
    }
    onBackClick() {
        if (this.selectedPage > 0) {
            this.onPageChange(this.selectedPage - 1);
        }
    }
    onNextClick() {
        if (this.selectedPage + 1 < this.totalPages) {
            this.onPageChange(this.selectedPage + 1);
        }
    }
    onLastClick() {
        if (this.selectedPage + 1 < this.totalPages) {
            this.onPageChange(this.totalPages - 1);
        }
    }
}
PaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-paginator',
                template: "<div class=\"container\">\n  <div class=\"page-status-container\">\n    <span *ngIf=\"!hideLabel\">{{currentPageLabel}}: </span>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onFirstClick()\">\n      <i class=\"pi pi-angle-double-left\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onBackClick()\">\n      <i class=\"pi pi-angle-left\"></i>\n    </div>\n    <div *ngIf=\"selectedPage>0\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage-1)\">{{selectedPage}}</div>\n    <div class=\"pagination-info enabled selected\">{{selectedPage + 1}}</div>\n    <div *ngIf=\"selectedPage+1<totalPages\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage+1)\">{{selectedPage + 2}}</div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onNextClick()\">\n      <i class=\"pi pi-angle-right\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onLastClick()\">\n      <i class=\"pi pi-angle-double-right\"></i>\n    </div>\n  </div>\n  <div class=\"per-page-container\">\n    <span>{{perPageLabel}}: </span>\n    <div *ngFor=\"let size of sizeOptions\" class=\"pagination-info enabled\"\n         [class.selected]=\"size===selectedSize\" (click)=\"onPageSizeChange(size)\">{{size}}</div>\n  </div>\n</div>\n",
                styles: [".container{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.container .page-status-container,.container .per-page-container{display:flex;align-items:center;justify-content:center;margin:0 .4rem}.container .page-status-container span,.container .per-page-container span{margin-right:.3rem}.container .pagination-info{height:2rem;width:2rem;border:1px solid rgba(0,0,0,.18);border-radius:6px;display:flex;align-items:center;justify-content:center;background-color:#fafafa;margin:0 .1rem;box-shadow:0 0 5px 1px rgba(0,0,0,.18)}.container .pagination-info i{font-size:1.3rem}.container .pagination-info.enabled{cursor:pointer}.container .pagination-info.enabled:not(.selected):hover{background-color:rgba(255,213,79,.5019607843137255);transition:all .3s ease}.container .pagination-info.enabled:not(.selected):hover:active{background-color:rgba(255,213,79,.18823529411764706);box-shadow:none}.container .pagination-info.disabled{background-color:#c7c7c7;cursor:not-allowed;color:#6d6d6d}.container .pagination-info.selected{background-color:#ffd54f}@media only screen and (min-width:320px) and (max-width:812px){.container .page-status-container{padding:.2rem 0}}"]
            },] }
];
PaginatorComponent.propDecorators = {
    selectedPage: [{ type: Input }],
    totalPages: [{ type: Input }],
    sizeOptions: [{ type: Input }],
    selectedSize: [{ type: Input }],
    hideLabel: [{ type: Input }],
    perPageLabel: [{ type: Input }],
    currentPageLabel: [{ type: Input }],
    valueChange: [{ type: Output }]
};

class PaginatorModule {
}
PaginatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PaginatorComponent],
                exports: [PaginatorComponent],
                imports: [
                    CommonModule
                ]
            },] }
];

var TableButtonType;
(function (TableButtonType) {
    TableButtonType["LABELED"] = "LABELED";
    TableButtonType["ICON"] = "ICON";
})(TableButtonType || (TableButtonType = {}));
var SortType;
(function (SortType) {
    SortType["ASC"] = "ASC";
    SortType["DESC"] = "DESC";
})(SortType || (SortType = {}));

const MOBILE_LANDSCAPE = 812;
const MOBILE_PORTRAIT = 812;
class BreakpointService {
    constructor(observer) {
        this.observer = observer;
    }
    mobile() {
        return this.observer.observe([`(max-width: ${MOBILE_LANDSCAPE}px)`]);
    }
    mobilePortrait() {
        return this.observer.observe([`(max-width: ${MOBILE_PORTRAIT}px)`]);
    }
    customMaxWidth(pixels) {
        return this.observer.observe([`(max-width: ${pixels}px)`]);
    }
}
BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.BreakpointObserver)); }, token: BreakpointService, providedIn: "root" });
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
BreakpointService.ctorParameters = () => [
    { type: BreakpointObserver }
];

class TableComponent {
    constructor(bp, fb) {
        this.bp = bp;
        this.fb = fb;
        this.noDataMessage = 'No items to display';
        this.cardMode = false;
        this.maxHeightPC = '50rem';
        this.maxHeightMobile = '38rem';
        this.changeAtPx = 812;
        this.buttonHeaderName = 'Actions';
        this.headerColor = 'primary';
        this.hoverColor = 'secondary';
        this.filterable = false;
        this.buttonClick = new EventEmitter();
        this.sortChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.mobileStyle = false;
        this.filterForm = this.fb.group({
            filter: ['']
        });
    }
    ngOnInit() {
        this.bp$ = this.bp.customMaxWidth(this.changeAtPx).pipe(distinctUntilChanged(), tap(bp => bp.matches ? this.mobileStyle = true :
            this.mobileStyle = false)).subscribe();
        this.filterSubscription = this.filterForm.valueChanges.pipe(map(r => r.filter), debounceTime(400), distinctUntilChanged(), tap(f => {
            if (this.filterable) {
                this.filterChange.emit(f);
            }
        })).subscribe();
    }
    ngOnDestroy() {
        this.bp$.unsubscribe();
        this.filterSubscription.unsubscribe();
    }
    activateAccordion(accordion) {
        var _a;
        if (((_a = this.expandedHeaderData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (accordion.style.display === 'table-cell') {
                accordion.style.display = 'none';
            }
            else {
                accordion.style.display = 'table-cell';
            }
        }
    }
    get allHeaderData() {
        let data = [...this.headerData];
        if (this.expandedHeaderData) {
            data = [...data, ...this.expandedHeaderData];
        }
        return data;
    }
    onButtonClick(event, id, el) {
        event.preventDefault();
        event.stopPropagation();
        this.buttonClick.emit({
            buttonId: id,
            rowData: el
        });
    }
    onSortChange(property) {
        var _a;
        if (property === ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.field)) {
            return this.sortChange.emit({
                field: property,
                type: this.sort.type === SortType.ASC ? SortType.DESC : SortType.ASC
            });
        }
        this.sortChange.emit({
            field: property,
            type: SortType.ASC
        });
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-table',
                template: "<div class=\"container\" [class.card]=\"cardMode\">\n  <div class=\"table-container\" [ngStyle]=\"{height: mobileStyle ? maxHeightMobile : maxHeightPC}\">\n    <table *ngIf=\"!mobileStyle else custom\">\n      <thead>\n      <tr *ngIf=\"filterable\" [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <td class=\"filter-container\" [colSpan]=\"headerData?.length + 1\">\n          <g-input-field font=\"normal\" width=\"20rem\"\n                         [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n        </td>\n      </tr>\n      <tr [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <th *ngFor=\"let data of headerData\" (click)=\"onSortChange(data.property)\">{{data.name}}\n          <i class=\"sort-element pi {{sort && data.property === sort.field &&\n          sort.type === 'ASC' ? 'pi-sort-up' : 'pi-sort-down'}}\"\n             [class.active]=\"data.property === sort?.field\"></i></th>\n        <th>{{buttonData?.length > 0 ? buttonHeaderName : ''}}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngFor=\"let element of data\">\n        <tr [ngClass]=\"{primary: hoverColor==='primary', secondary: hoverColor==='secondary'}\"\n            (click)=\"activateAccordion(accordion)\">\n          <ng-container *ngFor=\"let hd of headerData\">\n            <td *ngIf=\"!hd.render else render\" [class.emphasized]=\"hd.isBold\">\n              {{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}\n            </td>\n            <ng-template #render>\n              <td [class.emphasized]=\"hd.isBold\" [innerHTML]=\"hd.render(element) | trustHtml\"></td>\n            </ng-template>\n          </ng-container>\n          <td>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"accordion-data\" #accordion [colSpan]=\"headerData?.length\">\n            <div *ngFor=\"let ehd of expandedHeaderData\">\n              <span class=\"header-value\">{{ehd.name}}:</span>\n              <span class=\"spacer\"></span>\n              <span\n                class=\"body-value\">{{ehd.dateFormat ? (element[ehd.property] | date: ehd.dateFormat) : element[ehd.property]}}</span>\n            </div>\n          </td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <tr>\n          <td [colSpan]=\"headerData?.length + (buttonData?.length || 0)\"\n              style=\"text-align: center\">{{noDataMessage}}</td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n\n    <ng-template #custom>\n      <div class=\"custom-table-filter\" *ngIf=\"filterable\"\n           [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n           [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <g-input-field font=\"large\" width=\"20rem\"\n                       [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n      </div>\n      <div class=\"custom-table\">\n        <div *ngFor=\"let element of data; index as i\" class=\"custom-table-row\"\n             [class.odd-row]=\"i % 2 === 0\">\n          <div *ngFor=\"let hd of allHeaderData\">\n            <span class=\"header-value\">{{hd.name}}:</span>\n            <span class=\"spacer\"></span>\n            <span class=\"body-value\"\n                  [class.emphasized]=\"hd.isBold\">{{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}</span>\n          </div>\n          <div *ngIf=\"buttonData?.length>0\">\n            <span class=\"header-value\">{{buttonHeaderName}}:</span>\n            <span class=\"spacer\"></span>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <div style=\"text-align: center\">{{noDataMessage}}</div>\n      </ng-container>\n    </ng-template>\n  </div>\n</div>\n",
                styles: [":host{width:100%}.container{background-color:#f8f8ff;height:100%;width:100%}.container.card{box-shadow:0 2px 10px 0 rgba(0,0,0,.18);border-radius:20px;overflow:hidden}.container .table-container{overflow:auto;display:flex;flex-direction:column}.container .table-container table{border-collapse:collapse;position:relative;width:100%}.container .table-container table thead{position:sticky;top:0}.container .table-container table thead tr th{font-size:1.2rem;padding:.6rem .1rem;cursor:pointer}.container .table-container table thead tr th :not(.active).sort-element{display:none}.container .table-container table thead tr th:hover .sort-element{display:inline-block}.container .table-container table thead tr td.filter-container{padding:0 1rem}.container .table-container table thead tr.primary{background-color:#ffd54f}.container .table-container table thead tr.secondary{background-color:#4e342e;color:#fff}.container .table-container table tbody{border-left:5px solid transparent}.container .table-container table tbody tr{border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer}.container .table-container table tbody tr.primary:hover{border-left:5px solid #ffd54f}.container .table-container table tbody tr.secondary:hover{border-left:5px solid #4e342e}.container .table-container table tbody tr td{padding:.5rem;text-align:center}.container .table-container table tbody tr td.emphasized{font-weight:500}.container .table-container table tbody tr td .action{margin:0 .3rem}.container .table-container table tbody tr td i{font-size:1.2rem}.container .table-container table tbody tr td i.primary{color:#ffd54f}.container .table-container table tbody tr td i.secondary{color:#4e342e}.container .table-container table tbody tr td i.danger{color:#d0021b}.container .table-container table tbody tr .accordion-data{display:none;-webkit-animation:fadeIn .8s;animation:fadeIn .8s;text-align:left}.container .table-container table tbody tr .accordion-data div .header-value{font-size:1.2rem;font-weight:700}.container .table-container table tbody tr .accordion-data div .spacer{padding-left:1rem}.container .table-container .custom-table-filter{width:100%}.container .table-container .custom-table-filter.primary{background-color:#ffd54f}.container .table-container .custom-table-filter.secondary{background-color:#4e342e}.container .table-container .custom-table{flex:1;overflow:auto}.container .table-container .custom-table .custom-table-row{padding:.5rem}.container .table-container .custom-table .custom-table-row.odd-row{background-color:rgba(255,213,79,.18823529411764706)}.container .table-container .custom-table .custom-table-row .header-value{font-size:1.2rem;font-weight:700}.container .table-container .custom-table .custom-table-row .spacer{padding-left:1rem}.container .table-container .custom-table .custom-table-row .body-value{font-size:1.1rem}.container .table-container .custom-table .custom-table-row .body-value.emphasized{font-weight:500}.container .table-container .custom-table .custom-table-row .action{margin:0 .3rem}.container .table-container .custom-table .custom-table-row i{font-size:1.2rem}.container .table-container .custom-table .custom-table-row i.primary{color:#ffd54f}.container .table-container .custom-table .custom-table-row i.secondary{color:#4e342e}.container .table-container .custom-table .custom-table-row i.danger{color:#d0021b}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]
            },] }
];
TableComponent.ctorParameters = () => [
    { type: BreakpointService },
    { type: FormBuilder }
];
TableComponent.propDecorators = {
    headerData: [{ type: Input }],
    expandedHeaderData: [{ type: Input }],
    buttonData: [{ type: Input }],
    data: [{ type: Input }],
    noDataMessage: [{ type: Input }],
    cardMode: [{ type: Input }],
    maxHeightPC: [{ type: Input }],
    maxHeightMobile: [{ type: Input }],
    changeAtPx: [{ type: Input }],
    buttonHeaderName: [{ type: Input }],
    headerColor: [{ type: Input }],
    hoverColor: [{ type: Input }],
    sort: [{ type: Input }],
    filterable: [{ type: Input }],
    buttonClick: [{ type: Output }],
    sortChange: [{ type: Output }],
    filterChange: [{ type: Output }]
};

class TrustHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
TrustHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'trustHtml'
            },] }
];
TrustHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

var ModalSize;
(function (ModalSize) {
    ModalSize["SMALL"] = "SMALL";
    ModalSize["MEDIUM"] = "MEDIUM";
    ModalSize["LARGE"] = "LARGE";
    ModalSize["FULL"] = "FULL";
    ModalSize["HALF"] = "HALF";
    ModalSize["AUTO"] = "AUTO";
})(ModalSize || (ModalSize = {}));
const MODAL_DATA = new InjectionToken('MODAL_DATA');

class DefaultModalComponent {
    constructor(data) {
        this.data = data;
        this.title = data.title;
        this.primaryText = data.primaryText;
        this.secondaryText = data.secondaryText;
        this.htmlContent = data.html;
        this.actions = data.actions;
        this.overlayRef = data.overlayRef;
    }
    emitAction(action) {
        action.click.emit();
        this.overlayRef.dispose();
    }
}
DefaultModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-default-modal',
                template: "<div class=\"container\" [@fadeInOnEnter]>\n  <div class=\"title\">{{title}}</div>\n  <div class=\"body\">\n    <div class=\"primary-text\" *ngIf=\"primaryText\">{{primaryText}}</div>\n    <div class=\"secondary-text\" *ngIf=\"secondaryText\">{{secondaryText}}</div>\n    <div class=\"html-content\" *ngIf=\"htmlContent\" [innerHTML]=\"htmlContent | trustHtml\"></div>\n  </div>\n  <div class=\"button-container\">\n    <g-button *ngFor=\"let action of actions\" [color]=\"action.buttonColor\"\n              [label]=\"action.buttonLabel\" (clicked)=\"emitAction(action)\"></g-button>\n  </div>\n</div>\n",
                animations: [
                    fadeInOnEnterAnimation({ duration: 300 }),
                ],
                styles: [":host{height:100%;width:100%}.container{background-color:#fafafa;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:10px}.container .title{font-size:1.4rem;font-weight:700;padding:1rem;text-transform:uppercase;letter-spacing:1.2px}.container .body{flex-direction:column;justify-content:center;align-items:center;width:100%}.container .body .primary-text{font-size:1.1rem;font-weight:500;padding:.5rem;text-align:center}.container .body .secondary-text{text-align:center;letter-spacing:1.2px;padding:0 .5rem}.container .button-container{display:flex;align-items:center;justify-content:space-around;padding:1rem;width:100%}"]
            },] }
];
DefaultModalComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODAL_DATA,] }] }
];

class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TrustHtmlPipe, DefaultModalComponent],
                exports: [
                    TrustHtmlPipe
                ],
                imports: [
                    CommonModule,
                    ButtonModule
                ]
            },] }
];

class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableComponent],
                exports: [TableComponent],
                imports: [
                    CommonModule,
                    InputFieldModule,
                    CoreModule,
                    ButtonModule,
                    TooltipModule
                ]
            },] }
];

class SelectInputComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.font = 'large';
        this.hasNull = true;
    }
    set data(newData) {
        const nullValue = {
            label: '-',
            value: null
        };
        if (this.hasNull && newData) {
            newData.unshift(nullValue);
        }
        this._data = newData;
    }
    get data() {
        return this._data;
    }
    ngOnInit() {
    }
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
    onSelectedChange(evt) {
        this.selected.emit(evt);
    }
}
SelectInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-select-input',
                template: "<div class=\"container\"\n     [ngClass]=\"{'mod-error': control?.invalid && (control?.dirty || control?.touched)}\">\n  <div class=\"label\">{{label}}</div>\n  <select [style]=\"{width: width}\" [ngClass]=\"{'normal': font==='normal'}\" [formGroup]=\"form\"\n          [formControl]=\"control\" (ngModelChange)=\"onSelectedChange($event)\">\n    <ng-container *ngFor=\"let val of data\">\n      <option [ngValue]=\"val.value\">{{val.label}}</option>\n    </ng-container>\n  </select>\n  <span class=\"error-border\"></span>\n  <span class=\"error-message\" *ngIf=\"control?.errors?.required\">{{requiredFieldMessage}}</span>\n</div>\n",
                styles: [".container{position:relative}.container .label{text-transform:uppercase;color:#000}.container select{min-width:4rem;background:transparent;border:none;border-bottom:1px solid #000;color:#555;font-weight:500;font-family:Lato,Serif;font-size:1.4rem;cursor:pointer}.container select.normal{font-size:1.1rem}.container select:active{border-color:#c8a415}.container select:focus-visible{border-color:#c8a415;outline:none}.container .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.container .error-message{display:none;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.container.mod-error select{border-bottom:1px solid #d0021b}.container.mod-error .error-border{width:100%;height:3px}.container.mod-error .error-message{display:block}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}.container select{font-size:1.1rem}}"]
            },] }
];
SelectInputComponent.ctorParameters = () => [];
SelectInputComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: Output }],
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    label: [{ type: Input }],
    font: [{ type: Input }],
    requiredFieldMessage: [{ type: Input }],
    width: [{ type: Input }],
    hasNull: [{ type: Input }]
};

class SelectInputModule {
}
SelectInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SelectInputComponent],
                exports: [SelectInputComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];

class FabComponent {
    constructor() {
        this.size = '3rem';
        this.iconSize = '1.3rem';
        this.color = 'primary';
        this.raised = true;
    }
    ngOnInit() {
    }
}
FabComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-fab',
                template: "<div class=\"btn\" [style]=\"{height: size, width: size, backgroundColor:\n  !['primary', 'secondary'].includes(color) && color}\"\n     [class.raised]=\"raised\" [class]=\"{primary: color==='primary',\n     secondary: color==='secondary'}\">\n  <i [class]=\"'pi ' + icon\" [style]=\"{fontSize: iconSize}\"></i>\n</div>\n",
                styles: [".btn{border-radius:50%;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center}.btn.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.btn.primary{background-color:#ffd54f}.btn.secondary{background-color:#4e342e}.btn.secondary i{color:#fff}"]
            },] }
];
FabComponent.ctorParameters = () => [];
FabComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    iconSize: [{ type: Input }],
    color: [{ type: Input }],
    raised: [{ type: Input }]
};

class FabModule {
}
FabModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FabComponent],
                exports: [FabComponent],
                imports: [
                    CommonModule
                ]
            },] }
];

class CheckboxComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-checkbox',
                template: "<div class=\"container\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n    <span class=\"label\">{{label}}</span>\n  </label>\n</div>\n",
                styles: [".checkbox{position:relative;display:flex;align-items:center;cursor:pointer}.checkbox .label{padding-left:.5rem;text-transform:uppercase}.checkbox input{position:absolute;transform:scale(0)}.checkbox input:hover~.switch:before{background:rgba(255,213,79,.5019607843137255)}.checkbox input:checked~.switch:before{background:#ffd54f}.checkbox .switch{display:inline-flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;border:1px solid #4e342e;border-radius:5px;position:relative}.checkbox .switch:before{border-radius:2px;content:\"\";position:absolute;height:80%;width:80%}"]
            },] }
];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};

class CheckboxModule {
}
CheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckboxComponent],
                exports: [CheckboxComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];

class CalendarComponent {
    constructor(bp) {
        this.bp = bp;
        this.isMobile = false;
    }
    ngOnInit() {
        this.bpSubscription = this.bp.mobile().pipe(tap(r => this.isMobile = r.matches)).subscribe();
    }
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
    ngOnDestroy() {
        this.bpSubscription.unsubscribe();
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-calendar',
                template: "<div class=\"container\">\n  <div class=\"label\">{{label}}</div>\n  <p-calendar [showIcon]=\"true\" dateFormat=\"dd/mm/yy\" [readonlyInput]=\"true\"\n              [formGroup]=\"form\" [formControl]=\"control\"\n              [touchUI]=\"isMobile\"></p-calendar>\n</div>\n",
                styles: [".container .label{text-transform:uppercase;color:#000}::ng-deep .p-calendar{width:10rem;border:none;border-bottom:1px solid #000}::ng-deep .p-calendar .p-inputtext{border:none;background:transparent;font-size:1.1rem;padding:0}::ng-deep .p-calendar .p-inputtext:enabled:focus{outline:none;border:none;border-bottom:1px solid #c8a415;box-shadow:none}::ng-deep .p-calendar .p-inputtext:active{border:none;border-bottom:1px solid #c8a415}::ng-deep .p-calendar .p-button{background:#ffd54f;padding:.25rem}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}::ng-deep .p-calendar .p-button{padding:.08rem}}"]
            },] }
];
CalendarComponent.ctorParameters = () => [
    { type: BreakpointService }
];
CalendarComponent.propDecorators = {
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    label: [{ type: Input }]
};

class GCalendarModule {
}
GCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent],
                exports: [CalendarComponent],
                imports: [
                    CommonModule,
                    CalendarModule,
                    ReactiveFormsModule
                ]
            },] }
];

class ModalService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayReference = [];
    }
    createFromComponent(component, props, onBackdropClick, options = { hasBackdrop: true, size: ModalSize.AUTO }, closeAll = true) {
        var _a;
        if (closeAll) {
            this.closeAllModals();
        }
        const index = this.overlayReference.length;
        const positionStrategy = new GlobalPositionStrategy().centerHorizontally().centerVertically();
        const overlayRef = this.overlay.create({
            height: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).height : 300,
            width: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).width : 500,
            hasBackdrop: !!(options === null || options === void 0 ? void 0 : options.hasBackdrop),
            positionStrategy,
            panelClass: (_a = options === null || options === void 0 ? void 0 : options.panelClass) !== null && _a !== void 0 ? _a : '',
        });
        overlayRef.backdropClick().pipe(tap(() => {
            if (onBackdropClick) {
                return onBackdropClick();
            }
            this.closeModal(index);
        })).subscribe();
        const portal = new ComponentPortal(component, null, createInjector(Object.assign(props, { overlayRef })));
        const componentRef = overlayRef.attach(portal);
        this.overlayReference.push(overlayRef);
        return { overlayRef, componentRef };
    }
    openDefaultModal(props, onBackdropClick, options = { hasBackdrop: true, size: ModalSize.LARGE }, closeAll = true) {
        if (!props || !props.actions) {
            return null;
        }
        const actions = props.actions;
        actions.map(a => {
            a.click = new EventEmitter();
            return a;
        });
        this.createFromComponent(DefaultModalComponent, props, onBackdropClick, options, closeAll);
        return actions;
    }
    handleError(error) {
        return this.openDefaultModal({
            title: `Errore`,
            html: '<div style="font-size: 1.1rem; font-weight: 500; padding: .5rem; text-align: center">' +
                'Abbiamo incontrato un problema. Se l\'errore persiste ' +
                '<a href=mailto:"' + this.contactMail + '">contatta l\'amministratore</a> indicando l\'errore:</div>' +
                '<div style="text-align: center; ' +
                'letter-spacing: 1.2px; padding: 0 .5rem">' + error.error + ': ' + error.message + '</div>',
            actions: [{
                    buttonColor: 'secondary',
                    buttonLabel: 'Indietro',
                }]
        });
    }
    closeModal(index) {
        if (this.overlayReference[index]) {
            this.overlayReference[index].dispose();
        }
    }
    closeAllModals() {
        this.overlayReference.forEach(of => of.dispose());
    }
}
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1$1.Overlay)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ModalService.ctorParameters = () => [
    { type: Overlay }
];
const getModalSize = (size) => {
    switch (size) {
        case ModalSize.SMALL:
            return { width: '30%', height: '30%' };
        case ModalSize.MEDIUM:
            return { width: '350px', height: 'auto' };
        case ModalSize.LARGE:
            return { width: '500px', height: 'auto' };
        case ModalSize.FULL:
            return { width: '100%', height: '100%' };
        case ModalSize.HALF:
            return { width: '50%', height: '50%' };
        case ModalSize.AUTO:
            return { width: 'auto', height: 'auto' };
        default:
            return { width: 300, height: 500 };
    }
};
const ɵ0 = getModalSize;
const createInjector = (props) => {
    const tokens = new WeakMap();
    tokens.set(MODAL_DATA, props);
    return Injector.create({
        providers: [{
                provide: MODAL_DATA,
                useValue: props
            }]
    });
};
const ɵ1 = createInjector;

/*
 * Public API Surface of g-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BreakpointService, ButtonComponent, ButtonModule, CalendarComponent, CardComponent, CardModule, CheckboxComponent, CheckboxModule, CoreModule, DefaultModalComponent, FabComponent, FabModule, GCalendarModule, HeaderComponent, HeaderModule, InputFieldComponent, InputFieldModule, MODAL_DATA, ModalComponent, ModalModule, ModalService, ModalSize, NavComponent, NavModule, PaginatorComponent, PaginatorModule, SelectInputComponent, SelectInputModule, SortType, SpinnerComponent, SpinnerModule, SunsetComponent, SunsetModule, SwitchInputComponent, SwitchInputModule, TableButtonType, TableComponent, TableModule, TrustHtmlPipe, ɵ0, ɵ1 };
//# sourceMappingURL=g-ui.js.map
