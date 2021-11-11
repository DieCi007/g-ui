import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SelectInputComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.font = 'large';
        this.hasNull = true;
    }
    set data(newData) {
        const nullValue = {
            label: '-',
            value: null
        };
        if (this.hasNull && newData) {
            newData.unshift(nullValue);
        }
        this._data = newData;
    }
    get data() {
        return this._data;
    }
    ngOnInit() {
    }
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
    onSelectedChange(evt) {
        this.selected.emit(evt);
    }
}
SelectInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-select-input',
                template: "<div class=\"container\"\n     [ngClass]=\"{'mod-error': control?.invalid && (control?.dirty || control?.touched)}\">\n  <div class=\"label\">{{label}}</div>\n  <select [style]=\"{width: width}\" [ngClass]=\"{'normal': font==='normal'}\" [formGroup]=\"form\"\n          [formControl]=\"control\" (ngModelChange)=\"onSelectedChange($event)\">\n    <ng-container *ngFor=\"let val of data\">\n      <option [ngValue]=\"val.value\">{{val.label}}</option>\n    </ng-container>\n  </select>\n  <span class=\"error-border\"></span>\n  <span class=\"error-message\" *ngIf=\"control?.errors?.required\">{{requiredFieldMessage}}</span>\n</div>\n",
                styles: [".container{position:relative}.container .label{text-transform:uppercase;color:#000}.container select{min-width:4rem;background:transparent;border:none;border-bottom:1px solid #000;color:#555;font-weight:500;font-family:Lato,Serif;font-size:1.4rem;cursor:pointer}.container select.normal{font-size:1.1rem}.container select:active{border-color:#c8a415}.container select:focus-visible{border-color:#c8a415;outline:none}.container .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.container .error-message{display:none;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.container.mod-error select{border-bottom:1px solid #d0021b}.container.mod-error .error-border{width:100%;height:3px}.container.mod-error .error-message{display:block}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}.container select{font-size:1.1rem}}"]
            },] }
];
SelectInputComponent.ctorParameters = () => [];
SelectInputComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: Output }],
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    label: [{ type: Input }],
    font: [{ type: Input }],
    requiredFieldMessage: [{ type: Input }],
    width: [{ type: Input }],
    hasNull: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC1pbnB1dC9zZWxlY3QtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhL0UsTUFBTSxPQUFPLG9CQUFvQjtJQTJCL0I7UUFUVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUlsQyxTQUFJLEdBQXVCLE9BQU8sQ0FBQztRQUduQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBR3hCLENBQUM7SUF6QkQsSUFBYSxJQUFJLENBQUMsT0FBOEI7UUFDOUMsTUFBTSxTQUFTLEdBQUc7WUFDaEIsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFjRCxRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksT0FBTzs7UUFDVCxPQUFPLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQWdCLENBQUM7SUFDekQsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQU07UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix1b0JBQTRDOzthQUU3Qzs7OzttQkFJRSxLQUFLO3VCQWVMLE1BQU07bUJBQ04sS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdElucHV0RGF0YTxUPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBUO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnLXNlbGVjdC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnB1dENvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfZGF0YTogSVNlbGVjdElucHV0RGF0YTxUPltdO1xuICBASW5wdXQoKSBzZXQgZGF0YShuZXdEYXRhOiBJU2VsZWN0SW5wdXREYXRhPFQ+W10pIHtcbiAgICBjb25zdCBudWxsVmFsdWUgPSB7XG4gICAgICBsYWJlbDogJy0nLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGlmICh0aGlzLmhhc051bGwgJiYgbmV3RGF0YSkge1xuICAgICAgbmV3RGF0YS51bnNoaWZ0KG51bGxWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogSVNlbGVjdElucHV0RGF0YTxUPltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjb250cm9sTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBmb250OiAnbm9ybWFsJyB8ICdsYXJnZScgPSAnbGFyZ2UnO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNOdWxsID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm0/LmdldCh0aGlzLmNvbnRyb2xOYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgfVxuXG4gIG9uU2VsZWN0ZWRDaGFuZ2UoZXZ0OiBUKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KGV2dCk7XG4gIH1cblxufVxuIl19