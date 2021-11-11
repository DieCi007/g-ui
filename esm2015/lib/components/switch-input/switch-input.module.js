import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchInputComponent } from './switch-input.component';
import { ReactiveFormsModule } from '@angular/forms';
export class SwitchInputModule {
}
SwitchInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SwitchInputComponent],
                exports: [SwitchInputComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaC1pbnB1dC9zd2l0Y2gtaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWXJELE1BQU0sT0FBTyxpQkFBaUI7OztZQVI3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN3aXRjaElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2gtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hJbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTd2l0Y2hJbnB1dENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaElucHV0TW9kdWxlIHsgfVxuIl19