import { Component, Inject } from '@angular/core';
import { MODAL_DATA } from '../../model/modal';
import { fadeInOnEnterAnimation } from 'angular-animations';
export class DefaultModalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nLXVpL3NyYy9saWIvY29yZS9jb21wb25lbnQvZGVmYXVsdC1tb2RhbC9kZWZhdWx0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQXVDLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVTVELE1BQU0sT0FBTyxxQkFBcUI7SUFRaEMsWUFDNkIsSUFBZ0M7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBNEI7UUFFM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFlO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHdtQkFBNkM7Z0JBRTdDLFVBQVUsRUFBRTtvQkFDVixzQkFBc0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQztpQkFDeEM7O2FBQ0Y7Ozs0Q0FVSSxNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQWN0aW9uLCBJRGVmYXVsdE1vZGFsSW5qZWN0aW9uRGF0YSwgTU9EQUxfREFUQSB9IGZyb20gJy4uLy4uL21vZGVsL21vZGFsJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBmYWRlSW5PbkVudGVyQW5pbWF0aW9uIH0gZnJvbSAnYW5ndWxhci1hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1kZWZhdWx0LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlZmF1bHQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZWZhdWx0LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBmYWRlSW5PbkVudGVyQW5pbWF0aW9uKHtkdXJhdGlvbjogMzAwfSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1vZGFsQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpbWFyeVRleHQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5VGV4dDogc3RyaW5nO1xuICBodG1sQ29udGVudDogc3RyaW5nO1xuICBhY3Rpb25zOiBJQWN0aW9uW107XG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChNT0RBTF9EQVRBKSBwdWJsaWMgZGF0YTogSURlZmF1bHRNb2RhbEluamVjdGlvbkRhdGFcbiAgKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgdGhpcy5wcmltYXJ5VGV4dCA9IGRhdGEucHJpbWFyeVRleHQ7XG4gICAgdGhpcy5zZWNvbmRhcnlUZXh0ID0gZGF0YS5zZWNvbmRhcnlUZXh0O1xuICAgIHRoaXMuaHRtbENvbnRlbnQgPSBkYXRhLmh0bWw7XG4gICAgdGhpcy5hY3Rpb25zID0gZGF0YS5hY3Rpb25zO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IGRhdGEub3ZlcmxheVJlZjtcbiAgfVxuXG4gIGVtaXRBY3Rpb24oYWN0aW9uOiBJQWN0aW9uKTogdm9pZCB7XG4gICAgYWN0aW9uLmNsaWNrLmVtaXQoKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=