import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntPhoneInputComponent } from './ngx-int-phone-input.component';

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> = BsDropdownModule.forRoot();

@NgModule({
	declarations: [NgxIntPhoneInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		dropdownModuleForRoot,
  ],
	exports: [NgxIntPhoneInputComponent, NativeElementInjectorDirective],
})
export class NpxIntPhoneModule {

}
