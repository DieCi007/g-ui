(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/dialog')) :
    typeof define === 'function' && define.amd ? define('g-ui', ['exports', '@angular/core', '@angular/common', 'primeng/dialog'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['g-ui'] = {}, global.ng.core, global.ng.common, global.dialog));
}(this, (function (exports, core, common, dialog) { 'use strict';

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

    /*
     * Public API Surface of g-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;
    exports.ModalComponent = ModalComponent;
    exports.ModalModule = ModalModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=g-ui.umd.js.map
