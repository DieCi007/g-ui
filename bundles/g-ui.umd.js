(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/dialog'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('g-ui', ['exports', '@angular/core', '@angular/common', 'primeng/dialog', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['g-ui'] = {}, global.ng.core, global.ng.common, global.dialog, global.ng.forms));
}(this, (function (exports, core, common, dialog, forms) { 'use strict';

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.color = '';
            this.raised = true;
            this.height = '';
        }
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-header',
                    template: "<div class=\"header\" [ngClass]=\"{'primary': color==='primary', 'secondary': color==='secondary',\n'raised': raised}\" [style]=\"{'background-color': (color==='primary'||color==='secondary')?'':color, 'height': height}\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".header{height:4rem;width:100%}.header .content{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:Lato;background:radial-gradient(circle at 75% 190%,hsla(0,0%,98%,.18823529411764706),transparent 15%),radial-gradient(circle at 25% -155%,hsla(0,0%,98%,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,hsla(0,0%,98%,.25098039215686274),transparent 55.5%)}.header.primary{background:#000}.header.raised{box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.header.secondary{background:#c8a415}.header.secondary .content{height:100%;width:100%;background:radial-gradient(circle at 75% 180%,rgba(0,0,0,.18823529411764706),transparent 14%),radial-gradient(circle at 25% -155%,rgba(0,0,0,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,#000,transparent 40%)}"]
                },] }
    ];
    HeaderComponent.propDecorators = {
        color: [{ type: core.Input }],
        raised: [{ type: core.Input }],
        height: [{ type: core.Input }]
    };

    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        return HeaderModule;
    }());
    HeaderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [HeaderComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [HeaderComponent]
                },] }
    ];

    var ModalComponent = /** @class */ (function () {
        function ModalComponent() {
            this.borderRadius = '20px';
            this.resizable = false;
            this.visibleChange = new core.EventEmitter();
            this.zIndex = 100;
            this.appendToBody = false;
        }
        return ModalComponent;
    }());
    ModalComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-modal',
                    template: "<p-dialog [visible]=\"visible\" (visibleChange)=\"visibleChange.emit($event)\" [baseZIndex]=\"zIndex\"\n          [resizable]=\"resizable\" [focusOnShow]=\"false\" [draggable]=\"draggable\"\n          [focusTrap]=\"false\" [blockScroll]=\"true\" [showHeader]=\"false\"\n          [appendTo]=\"appendToBody && 'body'\"\n          [position]=\"position\" [modal]=\"true\" [style]=\"{'height': height,\n           'width': width, 'border-radius': borderRadius, 'font-family': 'Lato'}\"\n          [dismissableMask]=\"true\" [contentStyle]=\"{'border-radius': borderRadius, 'padding': 0}\">\n  <ng-content></ng-content>\n</p-dialog>\n",
                    styles: [":host ::ng-deep .p-dialog-content{padding:0;height:100%;width:100%}:host ::ng-deep .p-dialog-mask{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:rgba(0,0,0,.15)}"]
                },] }
    ];
    ModalComponent.propDecorators = {
        borderRadius: [{ type: core.Input }],
        height: [{ type: core.Input }],
        width: [{ type: core.Input }],
        resizable: [{ type: core.Input }],
        visible: [{ type: core.Input }],
        visibleChange: [{ type: core.Output }],
        draggable: [{ type: core.Input }],
        position: [{ type: core.Input }],
        zIndex: [{ type: core.Input }],
        appendToBody: [{ type: core.Input }]
    };

    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        return ModalModule;
    }());
    ModalModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ModalComponent],
                    exports: [ModalComponent],
                    imports: [
                        common.CommonModule,
                        dialog.DialogModule
                    ]
                },] }
    ];

    var SunsetComponent = /** @class */ (function () {
        function SunsetComponent() {
            this.sunChange = new core.EventEmitter();
            this.sunset = true;
        }
        SunsetComponent.prototype.onDayChange = function () {
            this.sunChange.emit();
        };
        return SunsetComponent;
    }());
    SunsetComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-sunset',
                    template: "<div class=\"button\" (click)=\"onDayChange()\" [style]=\"{'width': width, 'border-radius': borderRadius}\"\n     [ngClass]=\"{'sunset': sunset, 'sunrise': !sunset, 'raised': raised}\">\n  <div class=\"sun\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n  <div class=\"shadow\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n</div>\n",
                    styles: [".button{height:3rem;width:3rem;border-radius:50%;overflow:hidden;cursor:pointer;position:absolute}.button.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.button.sunset{background-color:#4a354c;-webkit-animation-name:sunset-background;animation-name:sunset-background;-webkit-animation-duration:2s;animation-duration:2s}.button.sunrise{background-color:#1e45b4;-webkit-animation-name:sunrise-background;animation-name:sunrise-background;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow{height:300%;width:100%;background:radial-gradient(circle at 50% 0,#6b9cec,transparent 25%),radial-gradient(circle at 50% 100%,#966164,transparent 25%)}.button .shadow.sunset{-webkit-animation-name:sunset-shadow;animation-name:sunset-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .shadow.sunrise,.button .shadow.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow.sunrise{-webkit-animation-name:sunrise-shadow;animation-name:sunrise-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun{position:absolute;top:0;height:100%;width:100%;background:radial-gradient(circle at 50% 50%,#ef9029,transparent 25%),radial-gradient(circle at 50% 50%,#f6a65d,transparent 50%)}.button .sun.sunrise{-webkit-animation-name:sunrise;animation-name:sunrise}.button .sun.sunrise,.button .sun.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun.sunset{-webkit-animation-name:sunset;animation-name:sunset}@-webkit-keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@-webkit-keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@-webkit-keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@-webkit-keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@-webkit-keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@-webkit-keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}@keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}"]
                },] }
    ];
    SunsetComponent.propDecorators = {
        width: [{ type: core.Input }],
        borderRadius: [{ type: core.Input }],
        raised: [{ type: core.Input }],
        sunChange: [{ type: core.Output }],
        sunset: [{ type: core.Input }]
    };

    var SunsetModule = /** @class */ (function () {
        function SunsetModule() {
        }
        return SunsetModule;
    }());
    SunsetModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SunsetComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
            this.height = '5rem';
            this.width = '5rem';
        }
        return SpinnerComponent;
    }());
    SpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-spinner',
                    template: "<div class=\"spinner\" [style]=\"{'height': height, 'width': width}\"></div>\n",
                    styles: [".spinner{display:inline-block;border-radius:50%;border-color:green #fff red;border-style:solid;border-width:7px;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]
                },] }
    ];
    SpinnerComponent.propDecorators = {
        height: [{ type: core.Input }],
        width: [{ type: core.Input }]
    };

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SpinnerComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    var InputFieldComponent = /** @class */ (function () {
        function InputFieldComponent() {
        }
        Object.defineProperty(InputFieldComponent.prototype, "control", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
            },
            enumerable: false,
            configurable: true
        });
        return InputFieldComponent;
    }());
    InputFieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-input-field',
                    template: "<label class=\"input-control\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <span>{{label}}</span>\n  <input [formControl]=\"control\" [formGroup]=\"form\"/>\n  <label class=\"disabled-view\">{{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                    styles: [".input-control{position:relative;margin:.5rem 0;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px}.input-control span{display:block;text-transform:uppercase;color:#000}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4em;border:none;border-bottom:1px solid #000;padding:5px 25px 5px 0;color:#555}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control .error-border{display:block;width:0;height:3px;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%}"]
                },] }
    ];
    InputFieldComponent.propDecorators = {
        label: [{ type: core.Input }],
        form: [{ type: core.Input }],
        controlName: [{ type: core.Input }]
    };

    var InputFieldModule = /** @class */ (function () {
        function InputFieldModule() {
        }
        return InputFieldModule;
    }());
    InputFieldModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [InputFieldComponent],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    /*
     * Public API Surface of g-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;
    exports.InputFieldComponent = InputFieldComponent;
    exports.InputFieldModule = InputFieldModule;
    exports.ModalComponent = ModalComponent;
    exports.ModalModule = ModalModule;
    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.SunsetComponent = SunsetComponent;
    exports.SunsetModule = SunsetModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=g-ui.umd.js.map
