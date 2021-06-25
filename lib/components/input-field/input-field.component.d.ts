import { FormControl, FormGroup } from '@angular/forms';
export declare class InputFieldComponent {
    label: string;
    form: FormGroup;
    controlName: string;
    get control(): FormControl;
}
