import { Component, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

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
                template: "<p-dialog [visible]=\"visible\" (visibleChange)=\"visibleChange.emit($event)\" [baseZIndex]=\"zIndex\"\n          [resizable]=\"resizable\" [focusOnShow]=\"false\" [draggable]=\"draggable\"\n          [focusTrap]=\"false\" [blockScroll]=\"true\" [showHeader]=\"false\"\n          [appendTo]=\"appendToBody && 'body'\"\n          [position]=\"position\" [modal]=\"true\" [style]=\"{'height': height,\n           'width': width, 'border-radius': borderRadius, 'font-family': 'Lato'}\"\n          [dismissableMask]=\"true\" [contentStyle]=\"{'border-radius': borderRadius, 'padding': 0}\">\n  <ng-content></ng-content>\n</p-dialog>\n",
                styles: [":host ::ng-deep .p-dialog-content{padding:0;height:100%;width:100%}:host ::ng-deep .p-dialog-mask{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:rgba(0,0,0,.15)}"]
            },] }
];
ModalComponent.propDecorators = {
    borderRadius: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
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
                styles: [".button{height:3rem;width:3rem;border-radius:50%;overflow:hidden;cursor:pointer;position:absolute}.button.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.button.sunset{background-color:#4a354c;-webkit-animation-name:sunset-background;animation-name:sunset-background;-webkit-animation-duration:2s;animation-duration:2s}.button.sunrise{background-color:#1e45b4;-webkit-animation-name:sunrise-background;animation-name:sunrise-background;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow{height:300%;width:100%;background:radial-gradient(circle at 50% 0,#6b9cec,transparent 25%),radial-gradient(circle at 50% 100%,#966164,transparent 25%)}.button .shadow.sunset{-webkit-animation-name:sunset-shadow;animation-name:sunset-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .shadow.sunrise,.button .shadow.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow.sunrise{-webkit-animation-name:sunrise-shadow;animation-name:sunrise-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun{position:absolute;top:0;height:100%;width:100%;background:radial-gradient(circle at 50% 50%,#ef9029,transparent 25%),radial-gradient(circle at 50% 50%,#f6a65d,transparent 50%)}.button .sun.sunrise{-webkit-animation-name:sunrise;animation-name:sunrise}.button .sun.sunrise,.button .sun.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun.sunset{-webkit-animation-name:sunset;animation-name:sunset}@-webkit-keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@-webkit-keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@-webkit-keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@-webkit-keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@-webkit-keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@-webkit-keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}@keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}"]
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
                imports: [
                    CommonModule
                ]
            },] }
];

class InputFieldComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
InputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-input-field',
                template: "<label class=\"input-control\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <span>{{label}}</span>\n  <input [formControl]=\"control\" [formGroup]=\"form\"/>\n  <label class=\"disabled-view\">{{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                styles: [".input-control{position:relative;margin:.5rem 0;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px}.input-control span{display:block;text-transform:uppercase;color:#000}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4em;border:none;border-bottom:1px solid #000;padding:5px 25px 5px 0;color:#555}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control .error-border{display:block;width:0;height:3px;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%}"]
            },] }
];
InputFieldComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};

class InputFieldModule {
}
InputFieldModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputFieldComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];

/*
 * Public API Surface of g-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, HeaderModule, InputFieldComponent, InputFieldModule, ModalComponent, ModalModule, SpinnerComponent, SpinnerModule, SunsetComponent, SunsetModule };
//# sourceMappingURL=g-ui.js.map
