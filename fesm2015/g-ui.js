import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HeaderComponent {
    constructor() {
        this.color = '';
        this.raised = true;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-header',
                template: "<div class=\"header\" [ngClass]=\"{'primary': color==='primary', 'secondary': color==='secondary',\n'raised': raised}\" [style]=\"{'background-color': (color==='primary'||color==='secondary')?'':color}\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".header{height:4rem;width:100%}.header .content{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:Lato;background:radial-gradient(circle at 75% 190%,hsla(0,0%,98%,.18823529411764706),transparent 15%),radial-gradient(circle at 25% -155%,hsla(0,0%,98%,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,hsla(0,0%,98%,.25098039215686274),transparent 55.5%)}.header .primary{background:#000}.header.raised{box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.header.secondary{background:#c8a415}.header.secondary .content{height:100%;width:100%;background:radial-gradient(circle at 75% 180%,rgba(0,0,0,.18823529411764706),transparent 14%),radial-gradient(circle at 25% -155%,rgba(0,0,0,.18823529411764706),transparent 25%),radial-gradient(circle at 150% 50%,#000,transparent 40%)}"]
            },] }
];
HeaderComponent.propDecorators = {
    color: [{ type: Input }],
    raised: [{ type: Input }]
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

/*
 * Public API Surface of g-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, HeaderModule };
//# sourceMappingURL=g-ui.js.map
