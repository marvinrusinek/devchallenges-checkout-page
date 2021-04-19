import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CheckoutFormService } from '../../services/checkoutform.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutFormFields: any = [];
  checkoutForm: FormGroup;
  submittedForm = false;
  // countryCtrl: FormControl;
  // phoneCtrl: FormControl;
  countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
    'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi',
    'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
    'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
    'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala',
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
    'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
    'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
    'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga',
    'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen',
    'Zambia', 'Zimbabwe'];

  constructor(private formBuilder: FormBuilder,
              private checkoutFormService: CheckoutFormService) {
    this.checkoutForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      address: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      city: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$')]),
      country: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$')]),
      postalCode: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.pattern('[0-9]{5}')])
    });

    /* this.countryCtrl = this.checkoutForm.get('country') as FormControl;
    this.phoneCtrl = this.checkoutForm.get('phone') as FormControl;

    this.countryCtrl.valueChanges.subscribe(country => {
      if (country === 'United States of America') {
        this.phoneCtrl.setValidators([Validators.minLength(10)]);
      } else {
        this.phoneCtrl.setValidators([Validators.minLength(11)]);
      }
      this.phoneCtrl.updateValueAndValidity();
    }); */
  }

  ngOnInit(): void {
    this.checkoutFormService.getFormFields()
      .subscribe(data => this.checkoutFormFields = data);
  }

  submitForm(event: Event): void {
    event.preventDefault();
    this.submittedForm = true;
    console.log(this.checkoutForm);
    alert(!this.checkoutForm.invalid ? 'Data were successfully submitted.' :
      'One or more of the fields is invalid or empty. Please correct the invalid fields (indicated in red) and submit again.');
  }
}
