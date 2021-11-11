import { Component, Input } from '@angular/core';
export class FabComponent {
    constructor() {
        this.size = '3rem';
        this.iconSize = '1.3rem';
        this.color = 'primary';
        this.raised = true;
    }
    ngOnInit() {
    }
}
FabComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-fab',
                template: "<div class=\"btn\" [style]=\"{height: size, width: size, backgroundColor:\n  !['primary', 'secondary'].includes(color) && color}\"\n     [class.raised]=\"raised\" [class]=\"{primary: color==='primary',\n     secondary: color==='secondary'}\">\n  <i [class]=\"'pi ' + icon\" [style]=\"{fontSize: iconSize}\"></i>\n</div>\n",
                styles: [".btn{border-radius:50%;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center}.btn.raised{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.btn.primary{background-color:#ffd54f}.btn.secondary{background-color:#4e342e}.btn.secondary i{color:#fff}"]
            },] }
];
FabComponent.ctorParameters = () => [];
FabComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    iconSize: [{ type: Input }],
    color: [{ type: Input }],
    raised: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL2ZhYi9mYWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxZQUFZO0lBVXZCO1FBTFMsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsVUFBSyxHQUFxQyxTQUFTLENBQUM7UUFDcEQsV0FBTSxHQUFHLElBQUksQ0FBQztJQUd2QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLDZVQUFtQzs7YUFFcEM7Ozs7bUJBS0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctZmFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZhYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBhbnkgdmFsaWQgcHJpbWUtbmcgaWNvbiBuYW1lXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemUgPSAnM3JlbSc7XG4gIEBJbnB1dCgpIGljb25TaXplID0gJzEuM3JlbSc7XG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8IHN0cmluZyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgcmFpc2VkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==