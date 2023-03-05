import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

import { Property } from 'src/app/model/property.model';
import { PropertyBase } from 'src/app/model/property-base.model';

import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;

  nextClicked: boolean;
  property = new Property();

  propertyTypes: Array<String> = ['Other', 'Boots', 'Outerwear', 'Underwear'];
  materialTypes: Array<String> = ['Cotton', 'Silk', 'Synthetics'];
  manufacturers: Array<String> = ['USA', 'China', 'Russia'];
  discounts: Array<String> = ['0', '5', '10', '15', '25', '50', '80'];

  propertyView: PropertyBase = {
    id: null,
    name: null,
    price: null,
    description: null,
    photo: null,
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        Name: [null, Validators.required],
        Description: [null, Validators.required],
        PType: [null, Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        WholesalePrice: [null, Validators.required],
        MaxDiscount: [null, Validators.required],
        EmployeeDoscount: [2, Validators.required],
      }),

      AddressInfo: this.fb.group({}),

      OtherInfo: this.fb.group({}),
    });
  }

  // #region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }
  // #endregion

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {}

  selectTab(tabId: number, isValid: boolean) {
    this.formTabs.tabs[tabId].active = true;
  }
}
