import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ThemeModule,
            providers: [  ]
        }
    }
}