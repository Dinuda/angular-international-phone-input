import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { angularInternationalPhoneInputComponent } from './angular-international-phone-input.component';

describe('angularInternationalPhoneInputComponent', () => {
	let component: angularInternationalPhoneInputComponent;
	let fixture: ComponentFixture<angularInternationalPhoneInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [angularInternationalPhoneInputComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(angularInternationalPhoneInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
