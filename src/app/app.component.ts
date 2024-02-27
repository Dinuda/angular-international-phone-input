import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'npx-int-phone-input';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [
		CountryISO.SriLanka,
		CountryISO.Malaysia,
	];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required]),
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

}
