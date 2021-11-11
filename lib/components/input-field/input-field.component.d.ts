import { FormControl, FormGroup } from '@angular/forms';
export declare class InputFieldComponent {
    label: string;
    form: FormGroup;
    controlName: string;
    autofocus: boolean;
    autocomplete: string;
    type: 'text' | 'password';
    font: 'normal' | 'large';
    width: string;
    textAlign: string | 'center';
    isActive(): boolean;
    get control(): FormControl;
}
