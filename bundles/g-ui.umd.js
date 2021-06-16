(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('g-ui', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['g-ui'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.color = '';
            this.raised = true;
        }
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g-header',
                    template: "<div class=\"header\" [ngClass]=\"{'primary': color==='primary', 'secondary': color==='secondary',\n'raised': raised}\" [style]=\"{'background-color': (color==='primary'||color==='secondary')?'':color}\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [".header{height:4rem;width:100%}.header .content{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:Lato;background:radial-gradient(circle at 75% 190%,hsla(0,0%,98%,.18823529411764706),transparent 15%),radial-gradient(circle at 25% -155%,hsla(0,0%,98%,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,hsla(0,0%,98%,.25098039215686274),transparent 55.5%)}.header.primary{background:#000}.header.raised{box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.header.secondary{background:#c8a415}.header.secondary .content{height:100%;width:100%;background:radial-gradient(circle at 75% 180%,rgba(0,0,0,.18823529411764706),transparent 14%),radial-gradient(circle at 25% -155%,rgba(0,0,0,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,#000,transparent 40%)}"]
                },] }
    ];
    HeaderComponent.propDecorators = {
        color: [{ type: core.Input }],
        raised: [{ type: core.Input }]
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

    /*
     * Public API Surface of g-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderComponent = HeaderComponent;
    exports.HeaderModule = HeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=g-ui.umd.js.map
