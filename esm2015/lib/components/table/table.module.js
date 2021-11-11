import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { InputFieldModule } from '../input-field/input-field.module';
import { CoreModule } from '../../core/core.module';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from 'primeng/tooltip';
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableComponent],
                exports: [TableComponent],
                imports: [
                    CommonModule,
                    InputFieldModule,
                    CoreModule,
                    ButtonModule,
                    TooltipModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWVoRCxNQUFNLE9BQU8sV0FBVzs7O1lBWHZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDekIsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RmllbGRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvY29yZS5tb2R1bGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdG9vbHRpcCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW5wdXRGaWVsZE1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBUb29sdGlwTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XG4iXX0=