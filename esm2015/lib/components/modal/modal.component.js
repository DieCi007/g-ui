import { Component, Input, EventEmitter, Output } from '@angular/core';
export class ModalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGNBQWM7SUFMM0I7UUFPVyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUd0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc3QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7O1lBakJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsa29CQUFxQzs7YUFFdEM7OzsyQkFHRSxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsTUFBTTt3QkFDTixLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGJvcmRlclJhZGl1cyA9ICcyMHB4JztcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc2l6YWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2NlbnRlcicgfCAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcbiAgQElucHV0KCkgekluZGV4ID0gMTAwO1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHkgPSBmYWxzZTtcbn1cbiJdfQ==