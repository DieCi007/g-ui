import { Component, Input } from '@angular/core';
export class SpinnerComponent {
    constructor() {
        this.height = '5rem';
        this.width = '5rem';
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-spinner',
                template: "<div class=\"spinner\" [style]=\"{'height': height, 'width': width}\"></div>\n",
                styles: [".spinner{display:inline-block;border-radius:50%;border-color:green #fff red;border-style:solid;border-width:7px;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]
            },] }
];
SpinnerComponent.propDecorators = {
    height: [{ type: Input }],
    width: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nLXVpL3NyYy9saWIvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT2hELE1BQU0sT0FBTyxnQkFBZ0I7SUFMN0I7UUFPVyxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxNQUFNLENBQUM7SUFFMUIsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwwRkFBdUM7O2FBRXhDOzs7cUJBR0UsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9ICc1cmVtJztcbiAgQElucHV0KCkgd2lkdGggPSAnNXJlbSc7XG5cbn1cbiJdfQ==