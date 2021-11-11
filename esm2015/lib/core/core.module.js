import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustHtmlPipe } from './pipe/trust-html.pipe';
import { DefaultModalComponent } from './component/default-modal/default-modal.component';
import { ButtonModule } from '../components/button/button.module';
export class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TrustHtmlPipe, DefaultModalComponent],
                exports: [
                    TrustHtmlPipe
                ],
                imports: [
                    CommonModule,
                    ButtonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nLXVpL3NyYy9saWIvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBY2xFLE1BQU0sT0FBTyxVQUFVOzs7WUFWdEIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQztnQkFDcEQsT0FBTyxFQUFFO29CQUNMLGFBQWE7aUJBQ2hCO2dCQUNILE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJ1c3RIdG1sUGlwZSB9IGZyb20gJy4vcGlwZS90cnVzdC1odG1sLnBpcGUnO1xuaW1wb3J0IHsgRGVmYXVsdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZGVmYXVsdC1tb2RhbC9kZWZhdWx0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVHJ1c3RIdG1sUGlwZSwgRGVmYXVsdE1vZGFsQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRydXN0SHRtbFBpcGVcbiAgICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJ1dHRvbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUgeyB9XG4iXX0=