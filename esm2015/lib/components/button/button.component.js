import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.clicked = new EventEmitter();
        this.width = '100%';
        this.height = '2rem';
        this.color = 'primary';
        this.disabled = false;
    }
    onButtonClicked(event) {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-button',
                template: "<div class=\"button-container\" [style]=\"{'width': width}\">\n  <button (click)=\"onButtonClicked($event)\" class=\"button\" [disabled]=\"disabled\"\n          [type]=\"type\" [style]=\"{'height': height}\"\n          [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\"\n          [ngStyle]=\"{backgroundColor: !['primary', 'secondary', 'danger']\n          .includes(color) && color}\">\n    <span [ngClass]=\"{primary: color === 'primary',\n    secondary: color === 'secondary', danger: color === 'danger'}\">\n      {{label}}</span>\n  </button>\n</div>\n",
                styles: [".button-container .button{position:relative;top:0;font-family:Lato;font-weight:500;width:100%;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.18);font-size:1.1rem;border-radius:25px;cursor:pointer;overflow:hidden;padding:0}.button-container .button.primary{background-color:#ffd54f}.button-container .button.secondary{background-color:#4e342e;color:#fff}.button-container .button.danger{background-color:#d0021b;color:#fff}.button-container .button:active:not(:disabled){top:1px;box-shadow:0 1px 7px 0 rgba(0,0,0,.18)}.button-container .button:disabled{background-color:#c7c7c7}.button-container .button span{display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:0 .5rem;overflow:hidden}.button-container .button span.danger,.button-container .button span.primary{background:radial-gradient(circle at 10% 50%,rgba(0,0,0,.06666666666666667),transparent 43%)}.button-container .button span.secondary{background:radial-gradient(circle at 10% 50%,hsla(0,0%,100%,.06666666666666667),transparent 43%)}"]
            },] }
];
ButtonComponent.propDecorators = {
    label: [{ type: Input }],
    type: [{ type: Input }],
    clicked: [{ type: Output }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFPVyxTQUFJLEdBQXdCLFFBQVEsQ0FBQztRQUNwQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwQyxVQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2YsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixVQUFLLEdBQWdELFNBQVMsQ0FBQztRQUMvRCxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBTzVCLENBQUM7SUFMQyxlQUFlLENBQUMsS0FBaUI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHVuQkFBc0M7O2FBRXZDOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLO3NCQUNMLE1BQU07b0JBQ04sS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6ICdzdWJtaXQnIHwgJ2J1dHRvbicgPSAnYnV0dG9uJztcbiAgQE91dHB1dCgpIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIHdpZHRoID0gJzEwMCUnO1xuICBASW5wdXQoKSBoZWlnaHQgPSAnMnJlbSc7XG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkYW5nZXInIHwgc3RyaW5nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG9uQnV0dG9uQ2xpY2tlZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==