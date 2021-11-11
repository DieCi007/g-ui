import { Component, Input } from '@angular/core';
export class CardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nLXVpL3NyYy9saWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE1BQU0sT0FBTyxhQUFhOzs7WUFMekIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQix5R0FBb0M7O2FBRXJDOzs7NkJBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbnRhaW5lclN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55OyB9O1xuXG59XG4iXX0=