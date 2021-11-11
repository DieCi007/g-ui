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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGNBQWM7SUFMM0I7UUFPVyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUl0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc3QyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7O1lBbEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIseXBCQUFxQzs7YUFFdEM7OzsyQkFHRSxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxNQUFNO3dCQUNOLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgYm9yZGVyUmFkaXVzID0gJzIwcHgnO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcbiAgQElucHV0KCkgbWF4V2lkdGg6IHN0cmluZztcbiAgQElucHV0KCkgcmVzaXphYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiAnY2VudGVyJyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuICBASW5wdXQoKSB6SW5kZXggPSAxMDA7XG4gIEBJbnB1dCgpIGFwcGVuZFRvQm9keSA9IGZhbHNlO1xufVxuIl19