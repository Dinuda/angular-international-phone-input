import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntPhoneInputComponent } from './ngx-int-phone-input.component';

describe('NgxIntPhoneInputComponent', () => {
	let component: NgxIntPhoneInputComponent;
	let fixture: ComponentFixture<NgxIntPhoneInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxIntPhoneInputComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxIntPhoneInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
