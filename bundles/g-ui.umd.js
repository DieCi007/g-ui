(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/dialog'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/layout'), require('@angular/platform-browser'), require('angular-animations'), require('primeng/tooltip'), require('primeng/calendar'), require('@angular/cdk/overlay'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('g-ui', ['exports', '@angular/core', '@angular/common', 'primeng/dialog', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/cdk/layout', '@angular/platform-browser', 'angular-animations', 'primeng/tooltip', 'primeng/calendar', '@angular/cdk/overlay', '@angular/cdk/portal'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['g-ui'] = {}, global.ng.core, global.ng.common, global.dialog, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.cdk.layout, global.ng.platformBrowser, global.angularAnimations, global.tooltip, global.calendar, global.ng.cdk.overlay, global.ng.cdk.portal));
}(this, (function (exports, i0, common, dialog, forms, rxjs, operators, i1, platformBrowser, angularAnimations, tooltip, calendar, i1$1, portal) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.color = '';
            this.raised = true;
            this.height = '';
        }
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-header',
                    template: "<div class=\"header\" [ngClass]=\"{'primary': color==='primary', 'secondary': color==='secondary',\n'raised': raised}\" [style]=\"{'background-color': (color==='primary'||color==='secondary')?'':color, 'height': height}\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".header{height:4rem;width:100%}.header .content{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:Lato;background:radial-gradient(circle at 75% 190%,hsla(0,0%,98%,.18823529411764706),transparent 15%),radial-gradient(circle at 25% -155%,hsla(0,0%,98%,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,hsla(0,0%,98%,.25098039215686274),transparent 55.5%)}.header.primary{background:#000}.header.raised{box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.header.secondary{background:#c8a415}.header.secondary .content{height:100%;width:100%;background:radial-gradient(circle at 75% 180%,rgba(0,0,0,.18823529411764706),transparent 14%),radial-gradient(circle at 25% -155%,rgba(0,0,0,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,#000,transparent 40%)}"]
                },] }
    ];
    HeaderComponent.propDecorators = {
        color: [{ type: i0.Input }],
        raised: [{ type: i0.Input }],
        height: [{ type: i0.Input }]
    };

    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        return HeaderModule;
    }());
    HeaderModule.decorators = [
        { type: i0.NgModule, args: [{
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
            this.visibleChange = new i0.EventEmitter();
            this.zIndex = 100;
            this.appendToBody = false;
        }
        return ModalComponent;
    }());
    ModalComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-modal',
                    template: "<p-dialog [visible]=\"visible\" (visibleChange)=\"visibleChange.emit($event)\" [baseZIndex]=\"zIndex\"\n          [resizable]=\"resizable\" [focusOnShow]=\"false\" [draggable]=\"draggable\"\n          [focusTrap]=\"false\" [blockScroll]=\"true\" [showHeader]=\"false\"\n          [appendTo]=\"appendToBody && 'body'\"\n          [position]=\"position\" [modal]=\"true\" [style]=\"{'height': height,\n           'width': width, 'max-width': maxWidth, 'border-radius': borderRadius, 'font-family': 'Lato'}\"\n          [dismissableMask]=\"true\" [contentStyle]=\"{'border-radius': borderRadius, 'padding': 0}\">\n  <ng-content></ng-content>\n</p-dialog>\n",
                    styles: [":host ::ng-deep .p-dialog-content{padding:0;height:100%;width:100%}:host ::ng-deep .p-dialog-mask{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background-color:rgba(0,0,0,.15)}"]
                },] }
    ];
    ModalComponent.propDecorators = {
        borderRadius: [{ type: i0.Input }],
        height: [{ type: i0.Input }],
        width: [{ type: i0.Input }],
        maxWidth: [{ type: i0.Input }],
        resizable: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        visibleChange: [{ type: i0.Output }],
        draggable: [{ type: i0.Input }],
        position: [{ type: i0.Input }],
        zIndex: [{ type: i0.Input }],
        appendToBody: [{ type: i0.Input }]
    };

    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        return ModalModule;
    }());
    ModalModule.decorators = [
        { type: i0.NgModule, args: [{
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
            this.sunChange = new i0.EventEmitter();
            this.sunset = true;
        }
        SunsetComponent.prototype.onDayChange = function () {
            this.sunChange.emit();
        };
        return SunsetComponent;
    }());
    SunsetComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-sunset',
                    template: "<div class=\"button\" (click)=\"onDayChange()\" [style]=\"{'width': width, 'border-radius': borderRadius}\"\n     [ngClass]=\"{'sunset': sunset, 'sunrise': !sunset, 'raised': raised}\">\n  <div class=\"sun\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n  <div class=\"shadow\" [ngClass]=\"sunset ? 'sunset' : 'sunrise'\"></div>\n</div>\n",
                    styles: [".button{height:3rem;width:3rem;border-radius:50%;overflow:hidden;cursor:pointer}.button.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.button.sunset{background-color:#4a354c;-webkit-animation-name:sunset-background;animation-name:sunset-background;-webkit-animation-duration:2s;animation-duration:2s}.button.sunrise{background-color:#1e45b4;-webkit-animation-name:sunrise-background;animation-name:sunrise-background;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow{height:300%;width:100%;background:radial-gradient(circle at 50% 0,#6b9cec,transparent 25%),radial-gradient(circle at 50% 100%,#966164,transparent 25%)}.button .shadow.sunset{-webkit-animation-name:sunset-shadow;animation-name:sunset-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .shadow.sunrise,.button .shadow.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s}.button .shadow.sunrise{-webkit-animation-name:sunrise-shadow;animation-name:sunrise-shadow;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun{position:absolute;top:0;height:100%;width:100%;background:radial-gradient(circle at 50% 50%,#ef9029,transparent 25%),radial-gradient(circle at 50% 50%,#f6a65d,transparent 50%)}.button .sun.sunrise{-webkit-animation-name:sunrise;animation-name:sunrise}.button .sun.sunrise,.button .sun.sunset{background-repeat:no-repeat;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.button .sun.sunset{-webkit-animation-name:sunset;animation-name:sunset}@-webkit-keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@keyframes sunrise-shadow{0%{background-position-y:-6rem}to{background-position-y:0}}@-webkit-keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@keyframes sunset-shadow{0%{background-position-y:0}to{background-position-y:-6rem}}@-webkit-keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@keyframes sunrise{0%{background-position-y:20px}to{background-position-y:-20px}}@-webkit-keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@keyframes sunset{0%{background-position-y:-20px}to{background-position-y:20px}}@-webkit-keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@keyframes sunset-background{0%{background-color:#1e45b4}to{background-color:#4a354c}}@-webkit-keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}@keyframes sunrise-background{0%{background-color:#4a354c}to{background-color:#1e45b4}}"]
                },] }
    ];
    SunsetComponent.propDecorators = {
        width: [{ type: i0.Input }],
        borderRadius: [{ type: i0.Input }],
        raised: [{ type: i0.Input }],
        sunChange: [{ type: i0.Output }],
        sunset: [{ type: i0.Input }]
    };

    var SunsetModule = /** @class */ (function () {
        function SunsetModule() {
        }
        return SunsetModule;
    }());
    SunsetModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SunsetComponent],
                    exports: [SunsetComponent],
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
        { type: i0.Component, args: [{
                    selector: 'g-spinner',
                    template: "<div class=\"spinner\" [style]=\"{'height': height, 'width': width}\"></div>\n",
                    styles: [".spinner{display:inline-block;border-radius:50%;border-color:green #fff red;border-style:solid;border-width:7px;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]
                },] }
    ];
    SpinnerComponent.propDecorators = {
        height: [{ type: i0.Input }],
        width: [{ type: i0.Input }]
    };

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SpinnerComponent],
                    exports: [SpinnerComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    var InputFieldComponent = /** @class */ (function () {
        function InputFieldComponent() {
            this.autofocus = false;
            this.type = 'text';
            this.font = 'large';
            this.width = '100%';
        }
        InputFieldComponent.prototype.isActive = function () {
            var val = this.control.value;
            return val !== null && val !== undefined && (val === 0 || !!val);
        };
        ;
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
        { type: i0.Component, args: [{
                    selector: 'g-input-field',
                    template: "<label class=\"input-control\" [style]=\"{width: width}\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <input [ngClass]=\"{'active': isActive(), 'normal': font==='normal'}\"\n         [type]=\"type\" [formControl]=\"control\" [formGroup]=\"form\" [style]=\"{textAlign: textAlign && 'center'}\"\n         [autofocus]=\"autofocus\" [autocomplete]=\"autocomplete\"/>\n  <span>{{label}}</span>\n  <label class=\"disabled-view\" [ngClass]=\"{'normal': font==='normal'}\">\n    {{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                    styles: [".input-control{position:relative;margin:.8rem 0 0 .5rem;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.input-control span{display:block;text-transform:uppercase;color:#000;position:absolute;transition:all .1s linear}.input-control input~span{top:.7rem}.input-control input.normal~span{top:.5rem}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4rem;border:none;border-bottom:1px solid #000;padding:5px 0 2px;color:#555;width:100%}.input-control .disabled-view.normal,.input-control input.normal{font-size:1.1rem}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:active,.input-control input:active{border-color:#c8a415}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none;border-color:#c8a415}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control input.active~span,.input-control input:focus~span{transform:translateY(-1.5rem)}.input-control input.normal.active~span,.input-control input.normal:focus~span{transform:translateY(-1.3rem)}.input-control .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%;height:3px}@media only screen and (min-width:320px) and (max-width:812px){.input-control span{font-size:.9rem}.input-control .disabled-view,.input-control input{font-size:1.1rem}}"]
                },] }
    ];
    InputFieldComponent.propDecorators = {
        label: [{ type: i0.Input }],
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        autofocus: [{ type: i0.Input }],
        autocomplete: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        font: [{ type: i0.Input }],
        width: [{ type: i0.Input }],
        textAlign: [{ type: i0.Input }]
    };

    var InputFieldModule = /** @class */ (function () {
        function InputFieldModule() {
        }
        return InputFieldModule;
    }());
    InputFieldModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [InputFieldComponent],
                    exports: [InputFieldComponent],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    var NavComponent = /** @class */ (function () {
        function NavComponent() {
            this.isSidebarOpen = false;
            this.position = 'left';
            this._sideBarSize = window.innerWidth > 812 ? '300px' : '200px';
        }
        Object.defineProperty(NavComponent.prototype, "sideBarSize", {
            get: function () {
                return this._sideBarSize;
            },
            set: function (value) {
                this._sideBarSize = value;
                this.defaultSidebarWith = value;
            },
            enumerable: false,
            configurable: true
        });
        NavComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.resizeObservable$ = rxjs.fromEvent(window, 'resize');
            this.resizeSubscription$ = this.resizeObservable$.pipe(operators.debounceTime(1000), operators.distinctUntilChanged(), operators.tap(function (evt) {
                _this._sideBarSize = evt.target['innerWidth'] < 812 ?
                    '200px' : _this.defaultSidebarWith || '300px';
            })).subscribe();
        };
        NavComponent.prototype.ngOnDestroy = function () {
            this.resizeSubscription$.unsubscribe();
        };
        NavComponent.prototype.toggle = function () {
            this.isSidebarOpen = !this.isSidebarOpen;
        };
        Object.defineProperty(NavComponent.prototype, "sidebarWidth", {
            get: function () {
                if (this.position === 'bottom') {
                    return '100%';
                }
                return this.isSidebarOpen ? this.sideBarSize : '0';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavComponent.prototype, "sidebarHeight", {
            get: function () {
                if (this.position === 'left') {
                    return '100%';
                }
                return this.isSidebarOpen ? this.sideBarSize : '0';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavComponent.prototype, "sidebarMargin", {
            get: function () {
                if (this.position === 'bottom') {
                    return '0';
                }
                return this.isSidebarOpen ? this.sideBarSize : '0';
            },
            enumerable: false,
            configurable: true
        });
        NavComponent.prototype.onOverlayClick = function () {
            this.toggle();
        };
        return NavComponent;
    }());
    NavComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-nav',
                    template: "<div class=\"sidenav-container\">\n  <div class=\"sidenav\"\n       [style]=\"{'width': sidebarWidth,\n       'height': sidebarHeight,\n       'top': position==='left'?'0':null,'bottom':position==='bottom'?'0':null}\">\n    <ng-content select=\"[sidenav]\"></ng-content>\n  </div>\n  <div class=\"sidenav-overlay\" *ngIf=\"isSidebarOpen\"\n       (click)=\"onOverlayClick()\"></div>\n  <div class=\"sidenav-content\" [class.disabled]=\"isSidebarOpen\"\n       [style]=\"{'margin-left': sidebarMargin}\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>\n",
                    styles: [".sidenav-container{height:100%;width:100%;display:flex;position:relative}.sidenav-container .sidenav{position:fixed;left:0;z-index:2;overflow-x:hidden;transition:.5s;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.sidenav-container .sidenav-content{height:100%;flex:1;display:flex;flex-direction:column;transition:.5s}.sidenav-container .sidenav-content.disabled{overflow:hidden;pointer-events:none}.sidenav-container .sidenav-overlay{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);position:absolute;top:0;z-index:1;height:100%;width:100%}"]
                },] }
    ];
    NavComponent.propDecorators = {
        position: [{ type: i0.Input }],
        sideBarSize: [{ type: i0.Input }]
    };

    var NavModule = /** @class */ (function () {
        function NavModule() {
        }
        return NavModule;
    }());
    NavModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NavComponent],
                    exports: [NavComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-card',
                    template: "<div class=\"container\" [ngStyle]=\"containerStyle\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".container{box-shadow:0 2px 10px 0 rgba(0,0,0,.18);border-radius:20px;overflow:hidden}"]
                },] }
    ];
    CardComponent.propDecorators = {
        containerStyle: [{ type: i0.Input }]
    };

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [CardComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [CardComponent]
                },] }
    ];

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.type = 'button';
            this.clicked = new i0.EventEmitter();
            this.width = '100%';
            this.height = '2rem';
            this.color = 'primary';
            this.disabled = false;
        }
        ButtonComponent.prototype.onButtonClicked = function (event) {
            if (!this.disabled) {
                this.clicked.emit();
            }
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-button',
                    template: "<div class=\"button-container\" [style]=\"{'width': width}\">\n  <button (click)=\"onButtonClicked($event)\" class=\"button\" [disabled]=\"disabled\"\n          [type]=\"type\" [style]=\"{'height': height}\"\n          [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\"\n          [ngStyle]=\"{backgroundColor: !['primary', 'secondary', 'danger']\n          .includes(color) && color}\">\n    <span [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\">\n      {{label}}</span>\n  </button>\n</div>\n",
                    styles: [".button-container .button{position:relative;top:0;font-family:Lato;font-weight:500;width:100%;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.18);font-size:1.1rem;border-radius:25px;cursor:pointer;overflow:hidden;padding:0}.button-container .button.primary{background-color:#ffd54f}.button-container .button.secondary{background-color:#4e342e;color:#fff}.button-container .button.danger{background-color:#d0021b;color:#fff}.button-container .button:active:not(:disabled){top:1px;box-shadow:0 1px 7px 0 rgba(0,0,0,.18)}.button-container .button:disabled{background-color:#c7c7c7}.button-container .button span{display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:0 .5rem;overflow:hidden}.button-container .button span.danger,.button-container .button span.primary{background:radial-gradient(circle at 10% 50%,rgba(0,0,0,.06666666666666667),transparent 43%)}.button-container .button span.secondary{background:radial-gradient(circle at 10% 50%,hsla(0,0%,100%,.06666666666666667),transparent 43%)}"]
                },] }
    ];
    ButtonComponent.propDecorators = {
        label: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        clicked: [{ type: i0.Output }],
        width: [{ type: i0.Input }],
        height: [{ type: i0.Input }],
        color: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }]
    };

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [ButtonComponent]
                },] }
    ];

    var SwitchInputComponent = /** @class */ (function () {
        function SwitchInputComponent() {
        }
        Object.defineProperty(SwitchInputComponent.prototype, "control", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
            },
            enumerable: false,
            configurable: true
        });
        return SwitchInputComponent;
    }());
    SwitchInputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-switch-input',
                    template: "<div>\n  <label class=\"label\">{{label}}</label>\n  <label class=\"container\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n  </label>\n</div>\n",
                    styles: ["div{display:flex;flex-direction:column}div label.label{padding-left:.2rem;padding-bottom:.1rem;text-transform:uppercase}div label.container{cursor:pointer;position:relative;width:4.5rem;height:2rem;display:inline-block;overflow:hidden;border-radius:20px}div label.container input{position:absolute;transform:scale(0)}div label.container input:checked~.switch{background:#ffd54f}div label.container input:checked~.switch:before{transform:translateX(-2.5rem)}div label.container input:checked~.switch:after{transform:translateX(0)}div label.container input:disabled~.switch{background:#ddd}div label.container .switch{display:block;width:4.5rem;height:2rem;border-radius:20px;background:#6d6d6d;transition:all .35s}div label.container .switch:before{background:#ddd;left:.2rem}div label.container .switch:after{right:.2rem;background:#4e342e;transform:translateX(2.5rem)}div label.container .switch:after,div label.container .switch:before{content:\"\";display:block;position:absolute;width:1.6rem;height:1.6rem;top:.19rem;border-radius:50%;transition:all .35s}"]
                },] }
    ];
    SwitchInputComponent.propDecorators = {
        label: [{ type: i0.Input }],
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }]
    };

    var SwitchInputModule = /** @class */ (function () {
        function SwitchInputModule() {
        }
        return SwitchInputModule;
    }());
    SwitchInputModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SwitchInputComponent],
                    exports: [SwitchInputComponent],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    var PaginatorComponent = /** @class */ (function () {
        function PaginatorComponent() {
            this.selectedPage = 0;
            this.totalPages = 1;
            this.sizeOptions = [10, 25, 50];
            this.selectedSize = 10;
            this.hideLabel = false;
            this.perPageLabel = 'Per page';
            this.currentPageLabel = 'Current page';
            this.valueChange = new i0.EventEmitter();
        }
        PaginatorComponent.prototype.onPageChange = function (selectedPage) {
            if (this.selectedPage !== selectedPage) {
                this.valueChange.emit({
                    size: this.selectedSize,
                    page: selectedPage
                });
            }
        };
        PaginatorComponent.prototype.onPageSizeChange = function (selectedSize) {
            if (this.selectedSize !== selectedSize) {
                this.valueChange.emit({
                    size: selectedSize,
                    page: 0
                });
            }
        };
        PaginatorComponent.prototype.onFirstClick = function () {
            if (this.selectedPage > 0) {
                this.onPageChange(0);
            }
        };
        PaginatorComponent.prototype.onBackClick = function () {
            if (this.selectedPage > 0) {
                this.onPageChange(this.selectedPage - 1);
            }
        };
        PaginatorComponent.prototype.onNextClick = function () {
            if (this.selectedPage + 1 < this.totalPages) {
                this.onPageChange(this.selectedPage + 1);
            }
        };
        PaginatorComponent.prototype.onLastClick = function () {
            if (this.selectedPage + 1 < this.totalPages) {
                this.onPageChange(this.totalPages - 1);
            }
        };
        return PaginatorComponent;
    }());
    PaginatorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-paginator',
                    template: "<div class=\"container\">\n  <div class=\"page-status-container\">\n    <span *ngIf=\"!hideLabel\">{{currentPageLabel}}: </span>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onFirstClick()\">\n      <i class=\"pi pi-angle-double-left\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onBackClick()\">\n      <i class=\"pi pi-angle-left\"></i>\n    </div>\n    <div *ngIf=\"selectedPage>0\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage-1)\">{{selectedPage}}</div>\n    <div class=\"pagination-info enabled selected\">{{selectedPage + 1}}</div>\n    <div *ngIf=\"selectedPage+1<totalPages\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage+1)\">{{selectedPage + 2}}</div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onNextClick()\">\n      <i class=\"pi pi-angle-right\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onLastClick()\">\n      <i class=\"pi pi-angle-double-right\"></i>\n    </div>\n  </div>\n  <div class=\"per-page-container\">\n    <span>{{perPageLabel}}: </span>\n    <div *ngFor=\"let size of sizeOptions\" class=\"pagination-info enabled\"\n         [class.selected]=\"size===selectedSize\" (click)=\"onPageSizeChange(size)\">{{size}}</div>\n  </div>\n</div>\n",
                    styles: [".container{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.container .page-status-container,.container .per-page-container{display:flex;align-items:center;justify-content:center;margin:0 .4rem}.container .page-status-container span,.container .per-page-container span{margin-right:.3rem}.container .pagination-info{height:2rem;width:2rem;border:1px solid rgba(0,0,0,.18);border-radius:6px;display:flex;align-items:center;justify-content:center;background-color:#fafafa;margin:0 .1rem;box-shadow:0 0 5px 1px rgba(0,0,0,.18)}.container .pagination-info i{font-size:1.3rem}.container .pagination-info.enabled{cursor:pointer}.container .pagination-info.enabled:not(.selected):hover{background-color:rgba(255,213,79,.5019607843137255);transition:all .3s ease}.container .pagination-info.enabled:not(.selected):hover:active{background-color:rgba(255,213,79,.18823529411764706);box-shadow:none}.container .pagination-info.disabled{background-color:#c7c7c7;cursor:not-allowed;color:#6d6d6d}.container .pagination-info.selected{background-color:#ffd54f}@media only screen and (min-width:320px) and (max-width:812px){.container .page-status-container{padding:.2rem 0}}"]
                },] }
    ];
    PaginatorComponent.propDecorators = {
        selectedPage: [{ type: i0.Input }],
        totalPages: [{ type: i0.Input }],
        sizeOptions: [{ type: i0.Input }],
        selectedSize: [{ type: i0.Input }],
        hideLabel: [{ type: i0.Input }],
        perPageLabel: [{ type: i0.Input }],
        currentPageLabel: [{ type: i0.Input }],
        valueChange: [{ type: i0.Output }]
    };

    var PaginatorModule = /** @class */ (function () {
        function PaginatorModule() {
        }
        return PaginatorModule;
    }());
    PaginatorModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [PaginatorComponent],
                    exports: [PaginatorComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    exports.TableButtonType = void 0;
    (function (TableButtonType) {
        TableButtonType["LABELED"] = "LABELED";
        TableButtonType["ICON"] = "ICON";
    })(exports.TableButtonType || (exports.TableButtonType = {}));
    exports.SortType = void 0;
    (function (SortType) {
        SortType["ASC"] = "ASC";
        SortType["DESC"] = "DESC";
    })(exports.SortType || (exports.SortType = {}));

    var MOBILE_LANDSCAPE = 812;
    var MOBILE_PORTRAIT = 812;
    var BreakpointService = /** @class */ (function () {
        function BreakpointService(observer) {
            this.observer = observer;
        }
        BreakpointService.prototype.mobile = function () {
            return this.observer.observe(["(max-width: " + MOBILE_LANDSCAPE + "px)"]);
        };
        BreakpointService.prototype.mobilePortrait = function () {
            return this.observer.observe(["(max-width: " + MOBILE_PORTRAIT + "px)"]);
        };
        BreakpointService.prototype.customMaxWidth = function (pixels) {
            return this.observer.observe(["(max-width: " + pixels + "px)"]);
        };
        return BreakpointService;
    }());
    BreakpointService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0__namespace.ɵɵinject(i1__namespace.BreakpointObserver)); }, token: BreakpointService, providedIn: "root" });
    BreakpointService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    BreakpointService.ctorParameters = function () { return [
        { type: i1.BreakpointObserver }
    ]; };

    var TableComponent = /** @class */ (function () {
        function TableComponent(bp, fb) {
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
            this.buttonClick = new i0.EventEmitter();
            this.sortChange = new i0.EventEmitter();
            this.filterChange = new i0.EventEmitter();
            this.mobileStyle = false;
            this.filterForm = this.fb.group({
                filter: ['']
            });
        }
        TableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.bp$ = this.bp.customMaxWidth(this.changeAtPx).pipe(operators.distinctUntilChanged(), operators.tap(function (bp) { return bp.matches ? _this.mobileStyle = true :
                _this.mobileStyle = false; })).subscribe();
            this.filterSubscription = this.filterForm.valueChanges.pipe(operators.map(function (r) { return r.filter; }), operators.debounceTime(400), operators.distinctUntilChanged(), operators.tap(function (f) {
                if (_this.filterable) {
                    _this.filterChange.emit(f);
                }
            })).subscribe();
        };
        TableComponent.prototype.ngOnDestroy = function () {
            this.bp$.unsubscribe();
            this.filterSubscription.unsubscribe();
        };
        TableComponent.prototype.activateAccordion = function (accordion) {
            var _a;
            if (((_a = this.expandedHeaderData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                if (accordion.style.display === 'table-cell') {
                    accordion.style.display = 'none';
                }
                else {
                    accordion.style.display = 'table-cell';
                }
            }
        };
        Object.defineProperty(TableComponent.prototype, "allHeaderData", {
            get: function () {
                var data = __spread(this.headerData);
                if (this.expandedHeaderData) {
                    data = __spread(data, this.expandedHeaderData);
                }
                return data;
            },
            enumerable: false,
            configurable: true
        });
        TableComponent.prototype.onButtonClick = function (event, id, el) {
            event.preventDefault();
            event.stopPropagation();
            this.buttonClick.emit({
                buttonId: id,
                rowData: el
            });
        };
        TableComponent.prototype.onSortChange = function (property) {
            var _a;
            if (property === ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.field)) {
                return this.sortChange.emit({
                    field: property,
                    type: this.sort.type === exports.SortType.ASC ? exports.SortType.DESC : exports.SortType.ASC
                });
            }
            this.sortChange.emit({
                field: property,
                type: exports.SortType.ASC
            });
        };
        return TableComponent;
    }());
    TableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-table',
                    template: "<div class=\"container\" [class.card]=\"cardMode\">\n  <div class=\"table-container\" [ngStyle]=\"{height: mobileStyle ? maxHeightMobile : maxHeightPC}\">\n    <table *ngIf=\"!mobileStyle else custom\">\n      <thead>\n      <tr *ngIf=\"filterable\" [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <td class=\"filter-container\" [colSpan]=\"headerData?.length + 1\">\n          <g-input-field font=\"normal\" width=\"20rem\"\n                         [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n        </td>\n      </tr>\n      <tr [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <th *ngFor=\"let data of headerData\" (click)=\"onSortChange(data.property)\">{{data.name}}\n          <i class=\"sort-element pi {{sort && data.property === sort.field &&\n          sort.type === 'ASC' ? 'pi-sort-up' : 'pi-sort-down'}}\"\n             [class.active]=\"data.property === sort?.field\"></i></th>\n        <th>{{buttonData?.length > 0 ? buttonHeaderName : ''}}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngFor=\"let element of data\">\n        <tr [ngClass]=\"{primary: hoverColor==='primary', secondary: hoverColor==='secondary'}\"\n            (click)=\"activateAccordion(accordion)\">\n          <ng-container *ngFor=\"let hd of headerData\">\n            <td *ngIf=\"!hd.render else render\" [class.emphasized]=\"hd.isBold\">\n              {{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}\n            </td>\n            <ng-template #render>\n              <td [class.emphasized]=\"hd.isBold\" [innerHTML]=\"hd.render(element) | trustHtml\"></td>\n            </ng-template>\n          </ng-container>\n          <td>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"accordion-data\" #accordion [colSpan]=\"headerData?.length\">\n            <div *ngFor=\"let ehd of expandedHeaderData\">\n              <span class=\"header-value\">{{ehd.name}}:</span>\n              <span class=\"spacer\"></span>\n              <span\n                class=\"body-value\">{{ehd.dateFormat ? (element[ehd.property] | date: ehd.dateFormat) : element[ehd.property]}}</span>\n            </div>\n          </td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <tr>\n          <td [colSpan]=\"headerData?.length + (buttonData?.length || 0)\"\n              style=\"text-align: center\">{{noDataMessage}}</td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n\n    <ng-template #custom>\n      <div class=\"custom-table-filter\" *ngIf=\"filterable\"\n           [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n           [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <g-input-field font=\"large\" width=\"20rem\"\n                       [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n      </div>\n      <div class=\"custom-table\">\n        <div *ngFor=\"let element of data; index as i\" class=\"custom-table-row\"\n             [class.odd-row]=\"i % 2 === 0\">\n          <div *ngFor=\"let hd of allHeaderData\">\n            <span class=\"header-value\">{{hd.name}}:</span>\n            <span class=\"spacer\"></span>\n            <span class=\"body-value\"\n                  [class.emphasized]=\"hd.isBold\">{{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}</span>\n          </div>\n          <div *ngIf=\"buttonData?.length>0\">\n            <span class=\"header-value\">{{buttonHeaderName}}:</span>\n            <span class=\"spacer\"></span>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <div style=\"text-align: center\">{{noDataMessage}}</div>\n      </ng-container>\n    </ng-template>\n  </div>\n</div>\n",
                    styles: [":host{width:100%}.container{background-color:#f8f8ff;height:100%;width:100%}.container.card{box-shadow:0 2px 10px 0 rgba(0,0,0,.18);border-radius:20px;overflow:hidden}.container .table-container{overflow:auto;display:flex;flex-direction:column}.container .table-container table{border-collapse:collapse;position:relative;width:100%}.container .table-container table thead{position:sticky;top:0}.container .table-container table thead tr th{font-size:1.2rem;padding:.6rem .1rem;cursor:pointer}.container .table-container table thead tr th :not(.active).sort-element{display:none}.container .table-container table thead tr th:hover .sort-element{display:inline-block}.container .table-container table thead tr td.filter-container{padding:0 1rem}.container .table-container table thead tr.primary{background-color:#ffd54f}.container .table-container table thead tr.secondary{background-color:#4e342e;color:#fff}.container .table-container table tbody{border-left:5px solid transparent}.container .table-container table tbody tr{border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer}.container .table-container table tbody tr.primary:hover{border-left:5px solid #ffd54f}.container .table-container table tbody tr.secondary:hover{border-left:5px solid #4e342e}.container .table-container table tbody tr td{padding:.5rem;text-align:center}.container .table-container table tbody tr td.emphasized{font-weight:500}.container .table-container table tbody tr td .action{margin:0 .3rem}.container .table-container table tbody tr td i{font-size:1.2rem}.container .table-container table tbody tr td i.primary{color:#ffd54f}.container .table-container table tbody tr td i.secondary{color:#4e342e}.container .table-container table tbody tr td i.danger{color:#d0021b}.container .table-container table tbody tr .accordion-data{display:none;-webkit-animation:fadeIn .8s;animation:fadeIn .8s;text-align:left}.container .table-container table tbody tr .accordion-data div .header-value{font-size:1.2rem;font-weight:700}.container .table-container table tbody tr .accordion-data div .spacer{padding-left:1rem}.container .table-container .custom-table-filter{width:100%}.container .table-container .custom-table-filter.primary{background-color:#ffd54f}.container .table-container .custom-table-filter.secondary{background-color:#4e342e}.container .table-container .custom-table{flex:1;overflow:auto}.container .table-container .custom-table .custom-table-row{padding:.5rem}.container .table-container .custom-table .custom-table-row.odd-row{background-color:rgba(255,213,79,.18823529411764706)}.container .table-container .custom-table .custom-table-row .header-value{font-size:1.2rem;font-weight:700}.container .table-container .custom-table .custom-table-row .spacer{padding-left:1rem}.container .table-container .custom-table .custom-table-row .body-value{font-size:1.1rem}.container .table-container .custom-table .custom-table-row .body-value.emphasized{font-weight:500}.container .table-container .custom-table .custom-table-row .action{margin:0 .3rem}.container .table-container .custom-table .custom-table-row i{font-size:1.2rem}.container .table-container .custom-table .custom-table-row i.primary{color:#ffd54f}.container .table-container .custom-table .custom-table-row i.secondary{color:#4e342e}.container .table-container .custom-table .custom-table-row i.danger{color:#d0021b}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]
                },] }
    ];
    TableComponent.ctorParameters = function () { return [
        { type: BreakpointService },
        { type: forms.FormBuilder }
    ]; };
    TableComponent.propDecorators = {
        headerData: [{ type: i0.Input }],
        expandedHeaderData: [{ type: i0.Input }],
        buttonData: [{ type: i0.Input }],
        data: [{ type: i0.Input }],
        noDataMessage: [{ type: i0.Input }],
        cardMode: [{ type: i0.Input }],
        maxHeightPC: [{ type: i0.Input }],
        maxHeightMobile: [{ type: i0.Input }],
        changeAtPx: [{ type: i0.Input }],
        buttonHeaderName: [{ type: i0.Input }],
        headerColor: [{ type: i0.Input }],
        hoverColor: [{ type: i0.Input }],
        sort: [{ type: i0.Input }],
        filterable: [{ type: i0.Input }],
        buttonClick: [{ type: i0.Output }],
        sortChange: [{ type: i0.Output }],
        filterChange: [{ type: i0.Output }]
    };

    var TrustHtmlPipe = /** @class */ (function () {
        function TrustHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        TrustHtmlPipe.prototype.transform = function (html) {
            return this.sanitizer.bypassSecurityTrustHtml(html);
        };
        return TrustHtmlPipe;
    }());
    TrustHtmlPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'trustHtml'
                },] }
    ];
    TrustHtmlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    exports.ModalSize = void 0;
    (function (ModalSize) {
        ModalSize["SMALL"] = "SMALL";
        ModalSize["MEDIUM"] = "MEDIUM";
        ModalSize["LARGE"] = "LARGE";
        ModalSize["FULL"] = "FULL";
        ModalSize["HALF"] = "HALF";
        ModalSize["AUTO"] = "AUTO";
    })(exports.ModalSize || (exports.ModalSize = {}));
    var MODAL_DATA = new i0.InjectionToken('MODAL_DATA');

    var DefaultModalComponent = /** @class */ (function () {
        function DefaultModalComponent(data) {
            this.data = data;
            this.title = data.title;
            this.primaryText = data.primaryText;
            this.secondaryText = data.secondaryText;
            this.htmlContent = data.html;
            this.actions = data.actions;
            this.overlayRef = data.overlayRef;
        }
        DefaultModalComponent.prototype.emitAction = function (action) {
            action.click.emit();
            this.overlayRef.dispose();
        };
        return DefaultModalComponent;
    }());
    DefaultModalComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-default-modal',
                    template: "<div class=\"container\" [@fadeInOnEnter]>\n  <div class=\"title\">{{title}}</div>\n  <div class=\"body\">\n    <div class=\"primary-text\" *ngIf=\"primaryText\">{{primaryText}}</div>\n    <div class=\"secondary-text\" *ngIf=\"secondaryText\">{{secondaryText}}</div>\n    <div class=\"html-content\" *ngIf=\"htmlContent\" [innerHTML]=\"htmlContent | trustHtml\"></div>\n  </div>\n  <div class=\"button-container\">\n    <g-button *ngFor=\"let action of actions\" [color]=\"action.buttonColor\"\n              [label]=\"action.buttonLabel\" (clicked)=\"emitAction(action)\"></g-button>\n  </div>\n</div>\n",
                    animations: [
                        angularAnimations.fadeInOnEnterAnimation({ duration: 300 }),
                    ],
                    styles: [":host{height:100%;width:100%}.container{background-color:#fafafa;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:10px}.container .title{font-size:1.4rem;font-weight:700;padding:1rem;text-transform:uppercase;letter-spacing:1.2px}.container .body{flex-direction:column;justify-content:center;align-items:center;width:100%}.container .body .primary-text{font-size:1.1rem;font-weight:500;padding:.5rem;text-align:center}.container .body .secondary-text{text-align:center;letter-spacing:1.2px;padding:0 .5rem}.container .button-container{display:flex;align-items:center;justify-content:space-around;padding:1rem;width:100%}"]
                },] }
    ];
    DefaultModalComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [MODAL_DATA,] }] }
    ]; };

    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        return CoreModule;
    }());
    CoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TrustHtmlPipe, DefaultModalComponent],
                    exports: [
                        TrustHtmlPipe
                    ],
                    imports: [
                        common.CommonModule,
                        ButtonModule
                    ]
                },] }
    ];

    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        return TableModule;
    }());
    TableModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [TableComponent],
                    exports: [TableComponent],
                    imports: [
                        common.CommonModule,
                        InputFieldModule,
                        CoreModule,
                        ButtonModule,
                        tooltip.TooltipModule
                    ]
                },] }
    ];

    var SelectInputComponent = /** @class */ (function () {
        function SelectInputComponent() {
            this.selected = new i0.EventEmitter();
            this.font = 'large';
            this.hasNull = true;
        }
        Object.defineProperty(SelectInputComponent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (newData) {
                var nullValue = {
                    label: '-',
                    value: null
                };
                if (this.hasNull && newData) {
                    newData.unshift(nullValue);
                }
                this._data = newData;
            },
            enumerable: false,
            configurable: true
        });
        SelectInputComponent.prototype.ngOnInit = function () {
        };
        Object.defineProperty(SelectInputComponent.prototype, "control", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
            },
            enumerable: false,
            configurable: true
        });
        SelectInputComponent.prototype.onSelectedChange = function (evt) {
            this.selected.emit(evt);
        };
        return SelectInputComponent;
    }());
    SelectInputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-select-input',
                    template: "<div class=\"container\"\n     [ngClass]=\"{'mod-error': control?.invalid && (control?.dirty || control?.touched)}\">\n  <div class=\"label\">{{label}}</div>\n  <select [style]=\"{width: width}\" [ngClass]=\"{'normal': font==='normal'}\" [formGroup]=\"form\"\n          [formControl]=\"control\" (ngModelChange)=\"onSelectedChange($event)\">\n    <ng-container *ngFor=\"let val of data\">\n      <option [ngValue]=\"val.value\">{{val.label}}</option>\n    </ng-container>\n  </select>\n  <span class=\"error-border\"></span>\n  <span class=\"error-message\" *ngIf=\"control?.errors?.required\">{{requiredFieldMessage}}</span>\n</div>\n",
                    styles: [".container{position:relative}.container .label{text-transform:uppercase;color:#000}.container select{min-width:4rem;background:transparent;border:none;border-bottom:1px solid #000;color:#555;font-weight:500;font-family:Lato,Serif;font-size:1.4rem;cursor:pointer}.container select.normal{font-size:1.1rem}.container select:active{border-color:#c8a415}.container select:focus-visible{border-color:#c8a415;outline:none}.container .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.container .error-message{display:none;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.container.mod-error select{border-bottom:1px solid #d0021b}.container.mod-error .error-border{width:100%;height:3px}.container.mod-error .error-message{display:block}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}.container select{font-size:1.1rem}}"]
                },] }
    ];
    SelectInputComponent.ctorParameters = function () { return []; };
    SelectInputComponent.propDecorators = {
        data: [{ type: i0.Input }],
        selected: [{ type: i0.Output }],
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        font: [{ type: i0.Input }],
        requiredFieldMessage: [{ type: i0.Input }],
        width: [{ type: i0.Input }],
        hasNull: [{ type: i0.Input }]
    };

    var SelectInputModule = /** @class */ (function () {
        function SelectInputModule() {
        }
        return SelectInputModule;
    }());
    SelectInputModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SelectInputComponent],
                    exports: [SelectInputComponent],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    var FabComponent = /** @class */ (function () {
        function FabComponent() {
            this.size = '3rem';
            this.iconSize = '1.3rem';
            this.color = 'primary';
            this.raised = true;
        }
        FabComponent.prototype.ngOnInit = function () {
        };
        return FabComponent;
    }());
    FabComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-fab',
                    template: "<div class=\"btn\" [style]=\"{height: size, width: size, backgroundColor:\n  !['primary', 'secondary'].includes(color) && color}\"\n     [class.raised]=\"raised\" [class]=\"{primary: color==='primary',\n     secondary: color==='secondary'}\">\n  <i [class]=\"'pi ' + icon\" [style]=\"{fontSize: iconSize}\"></i>\n</div>\n",
                    styles: [".btn{border-radius:50%;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center}.btn.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.btn.primary{background-color:#ffd54f}.btn.secondary{background-color:#4e342e}.btn.secondary i{color:#fff}"]
                },] }
    ];
    FabComponent.ctorParameters = function () { return []; };
    FabComponent.propDecorators = {
        icon: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        iconSize: [{ type: i0.Input }],
        color: [{ type: i0.Input }],
        raised: [{ type: i0.Input }]
    };

    var FabModule = /** @class */ (function () {
        function FabModule() {
        }
        return FabModule;
    }());
    FabModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FabComponent],
                    exports: [FabComponent],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        Object.defineProperty(CheckboxComponent.prototype, "control", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
            },
            enumerable: false,
            configurable: true
        });
        return CheckboxComponent;
    }());
    CheckboxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-checkbox',
                    template: "<div class=\"container\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n    <span class=\"label\">{{label}}</span>\n  </label>\n</div>\n",
                    styles: [".checkbox{position:relative;display:flex;align-items:center;cursor:pointer}.checkbox .label{padding-left:.5rem;text-transform:uppercase}.checkbox input{position:absolute;transform:scale(0)}.checkbox input:hover~.switch:before{background:rgba(255,213,79,.5019607843137255)}.checkbox input:checked~.switch:before{background:#ffd54f}.checkbox .switch{display:inline-flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;border:1px solid #4e342e;border-radius:5px;position:relative}.checkbox .switch:before{border-radius:2px;content:\"\";position:absolute;height:80%;width:80%}"]
                },] }
    ];
    CheckboxComponent.propDecorators = {
        label: [{ type: i0.Input }],
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }]
    };

    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        return CheckboxModule;
    }());
    CheckboxModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [CheckboxComponent],
                    exports: [CheckboxComponent],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    var CalendarComponent = /** @class */ (function () {
        function CalendarComponent(bp) {
            this.bp = bp;
            this.isMobile = false;
        }
        CalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.bpSubscription = this.bp.mobile().pipe(operators.tap(function (r) { return _this.isMobile = r.matches; })).subscribe();
        };
        Object.defineProperty(CalendarComponent.prototype, "control", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
            },
            enumerable: false,
            configurable: true
        });
        CalendarComponent.prototype.ngOnDestroy = function () {
            this.bpSubscription.unsubscribe();
        };
        return CalendarComponent;
    }());
    CalendarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'g-calendar',
                    template: "<div class=\"container\">\n  <div class=\"label\">{{label}}</div>\n  <p-calendar [showIcon]=\"true\" dateFormat=\"dd/mm/yy\" [readonlyInput]=\"true\"\n              [formGroup]=\"form\" [formControl]=\"control\"\n              [touchUI]=\"isMobile\"></p-calendar>\n</div>\n",
                    styles: [".container .label{text-transform:uppercase;color:#000}::ng-deep .p-calendar{width:10rem;border:none;border-bottom:1px solid #000}::ng-deep .p-calendar .p-inputtext{border:none;background:transparent;font-size:1.1rem;padding:0}::ng-deep .p-calendar .p-inputtext:enabled:focus{outline:none;border:none;border-bottom:1px solid #c8a415;box-shadow:none}::ng-deep .p-calendar .p-inputtext:active{border:none;border-bottom:1px solid #c8a415}::ng-deep .p-calendar .p-button{background:#ffd54f;padding:.25rem}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}::ng-deep .p-calendar .p-button{padding:.08rem}}"]
                },] }
    ];
    CalendarComponent.ctorParameters = function () { return [
        { type: BreakpointService }
    ]; };
    CalendarComponent.propDecorators = {
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        label: [{ type: i0.Input }]
    };

    var GCalendarModule = /** @class */ (function () {
        function GCalendarModule() {
        }
        return GCalendarModule;
    }());
    GCalendarModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [CalendarComponent],
                    exports: [CalendarComponent],
                    imports: [
                        common.CommonModule,
                        calendar.CalendarModule,
                        forms.ReactiveFormsModule
                    ]
                },] }
    ];

    var ModalService = /** @class */ (function () {
        function ModalService(overlay) {
            this.overlay = overlay;
            this.overlayReference = [];
        }
        ModalService.prototype.createFromComponent = function (component, props, onBackdropClick, options, closeAll) {
            var _this = this;
            if (options === void 0) { options = { hasBackdrop: true, size: exports.ModalSize.AUTO }; }
            if (closeAll === void 0) { closeAll = true; }
            var _a;
            if (closeAll) {
                this.closeAllModals();
            }
            var index = this.overlayReference.length;
            var positionStrategy = new i1$1.GlobalPositionStrategy().centerHorizontally().centerVertically();
            var overlayRef = this.overlay.create({
                height: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).height : 300,
                width: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).width : 500,
                hasBackdrop: !!(options === null || options === void 0 ? void 0 : options.hasBackdrop),
                positionStrategy: positionStrategy,
                panelClass: (_a = options === null || options === void 0 ? void 0 : options.panelClass) !== null && _a !== void 0 ? _a : '',
            });
            overlayRef.backdropClick().pipe(operators.tap(function () {
                if (onBackdropClick) {
                    return onBackdropClick();
                }
                _this.closeModal(index);
            })).subscribe();
            var portal$1 = new portal.ComponentPortal(component, null, createInjector(Object.assign(props, { overlayRef: overlayRef })));
            var componentRef = overlayRef.attach(portal$1);
            this.overlayReference.push(overlayRef);
            return { overlayRef: overlayRef, componentRef: componentRef };
        };
        ModalService.prototype.openDefaultModal = function (props, onBackdropClick, options, closeAll) {
            if (options === void 0) { options = { hasBackdrop: true, size: exports.ModalSize.LARGE }; }
            if (closeAll === void 0) { closeAll = true; }
            if (!props || !props.actions) {
                return null;
            }
            var actions = props.actions;
            actions.map(function (a) {
                a.click = new i0.EventEmitter();
                return a;
            });
            this.createFromComponent(DefaultModalComponent, props, onBackdropClick, options, closeAll);
            return actions;
        };
        ModalService.prototype.handleError = function (error) {
            return this.openDefaultModal({
                title: "Errore",
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
        };
        ModalService.prototype.closeModal = function (index) {
            if (this.overlayReference[index]) {
                this.overlayReference[index].dispose();
            }
        };
        ModalService.prototype.closeAllModals = function () {
            this.overlayReference.forEach(function (of) { return of.dispose(); });
        };
        return ModalService;
    }());
    ModalService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0__namespace.ɵɵinject(i1__namespace$1.Overlay)); }, token: ModalService, providedIn: "root" });
    ModalService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ModalService.ctorParameters = function () { return [
        { type: i1$1.Overlay }
    ]; };
    var getModalSize = function (size) {
        switch (size) {
            case exports.ModalSize.SMALL:
                return { width: '30%', height: '30%' };
            case exports.ModalSize.MEDIUM:
                return { width: '350px', height: 'auto' };
            case exports.ModalSize.LARGE:
                return { width: '500px', height: 'auto' };
            case exports.ModalSize.FULL:
                return { width: '100%', height: '100%' };
            case exports.ModalSize.HALF:
                return { width: '50%', height: '50%' };
            case exports.ModalSize.AUTO:
                return { width: 'auto', height: 'auto' };
            default:
                return { width: 300, height: 500 };
        }
    };
    var ɵ0 = getModalSize;
    var createInjector = function (props) {
        var tokens = new WeakMap();
        tokens.set(MODAL_DATA, props);
        return i0.Injector.create({
            providers: [{
                    provide: MODAL_DATA,
                    useValue: props
                }]
        });
    };
    var ɵ1 = createInjector;

    /*
     * Public API Surface of g-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BreakpointService = BreakpointService;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.CalendarComponent = CalendarComponent;
    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;
    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxModule = CheckboxModule;
    exports.CoreModule = CoreModule;
    exports.DefaultModalComponent = DefaultModalComponent;
    exports.FabComponent = FabComponent;
    exports.FabModule = FabModule;
    exports.GCalendarModule = GCalendarModule;
    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;
    exports.InputFieldComponent = InputFieldComponent;
    exports.InputFieldModule = InputFieldModule;
    exports.MODAL_DATA = MODAL_DATA;
    exports.ModalComponent = ModalComponent;
    exports.ModalModule = ModalModule;
    exports.ModalService = ModalService;
    exports.NavComponent = NavComponent;
    exports.NavModule = NavModule;
    exports.PaginatorComponent = PaginatorComponent;
    exports.PaginatorModule = PaginatorModule;
    exports.SelectInputComponent = SelectInputComponent;
    exports.SelectInputModule = SelectInputModule;
    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.SunsetComponent = SunsetComponent;
    exports.SunsetModule = SunsetModule;
    exports.SwitchInputComponent = SwitchInputComponent;
    exports.SwitchInputModule = SwitchInputModule;
    exports.TableComponent = TableComponent;
    exports.TableModule = TableModule;
    exports.TrustHtmlPipe = TrustHtmlPipe;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=g-ui.umd.js.map
