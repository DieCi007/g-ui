import { EventEmitter } from '@angular/core';
export declare class SunsetComponent {
    width: string;
    borderRadius: string;
    raised: boolean;
    sunChange: EventEmitter<void>;
    sunset: boolean;
    onDayChange(): void;
}
