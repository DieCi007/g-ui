import { Component, Input } from '@angular/core';
export class CheckboxComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-checkbox',
                template: "<div class=\"container\">\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" [formGroup]=\"form\" [formControl]=\"control\"/>\n    <span class=\"switch\"></span>\n    <span class=\"label\">{{label}}</span>\n  </label>\n</div>\n",
                styles: [".checkbox{position:relative;display:flex;align-items:center;cursor:pointer}.checkbox .label{padding-left:.5rem;text-transform:uppercase}.checkbox input{position:absolute;transform:scale(0)}.checkbox input:hover~.switch:before{background:rgba(255,213,79,.5019607843137255)}.checkbox input:checked~.switch:before{background:#ffd54f}.checkbox .switch{display:inline-flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;border:1px solid #4e342e;border-radius:5px;position:relative}.checkbox .switch:before{border-radius:2px;content:\"\";position:absolute;height:80%;width:80%}"]
            },] }
];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxpQkFBaUI7SUFNNUIsSUFBSSxPQUFPOztRQUNULE9BQU8sTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHdQQUF3Qzs7YUFFekM7OztvQkFHRSxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm0/LmdldCh0aGlzLmNvbnRyb2xOYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG59XG4iXX0=