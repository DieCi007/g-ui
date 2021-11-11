import { FormControl, FormGroup } from '@angular/forms';
export declare class CheckboxComponent {
    label: string;
    form: FormGroup;
    controlName: string;
    get control(): FormControl;
}
