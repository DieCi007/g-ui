import { EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export interface ISelectInputData<T> {
    label: string;
    value: T;
}
export declare class SelectInputComponent<T> implements OnInit {
    private _data;
    set data(newData: ISelectInputData<T>[]);
    get data(): ISelectInputData<T>[];
    selected: EventEmitter<T>;
    form: FormGroup;
    controlName: string;
    label: string;
    font: 'normal' | 'large';
    requiredFieldMessage: string;
    width: string;
    hasNull: boolean;
    constructor();
    ngOnInit(): void;
    get control(): FormControl;
    onSelectedChange(evt: T): void;
}
