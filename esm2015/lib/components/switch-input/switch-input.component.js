import { Component, Input } from '@angular/core';
export class SwitchInputComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
SwitchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-switch-input',
                template: "<div>\n  <label class=\"label\">{{label}}</label>\n  <label class=\"container\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n  </label>\n</div>\n",
                styles: ["div{display:flex;flex-direction:column}div label.label{padding-left:.2rem;padding-bottom:.1rem;text-transform:uppercase}div label.container{cursor:pointer;position:relative;width:4.5rem;height:2rem;display:inline-block;overflow:hidden;border-radius:20px}div label.container input{position:absolute;transform:scale(0)}div label.container input:checked~.switch{background:#ffd54f}div label.container input:checked~.switch:before{transform:translateX(-2.5rem)}div label.container input:checked~.switch:after{transform:translateX(0)}div label.container input:disabled~.switch{background:#ddd}div label.container .switch{display:block;width:4.5rem;height:2rem;border-radius:20px;background:#6d6d6d;transition:all .35s}div label.container .switch:before{background:#ddd;left:.2rem}div label.container .switch:after{right:.2rem;background:#4e342e;transform:translateX(2.5rem)}div label.container .switch:after,div label.container .switch:before{content:\"\";display:block;position:absolute;width:1.6rem;height:1.6rem;top:.19rem;border-radius:50%;transition:all .35s}"]
            },] }
];
SwitchInputComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaC1pbnB1dC9zd2l0Y2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsSUFBSSxPQUFPOztRQUNULE9BQU8sTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscU9BQTRDOzthQUU3Qzs7O29CQUdFLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1zd2l0Y2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpdGNoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoSW5wdXRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KHRoaXMuY29udHJvbE5hbWUpIGFzIEZvcm1Db250cm9sO1xuICB9XG5cbn1cbiJdfQ==