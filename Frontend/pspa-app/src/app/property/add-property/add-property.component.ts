import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';

import { IProperty } from 'src/app/model/interface/iproperty';
import { Property } from 'src/app/model/class/property';
import { IIngedient } from 'src/app/model/interface/iingredient';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;
  nextClicked: boolean;
  property = new Property();
  ing: IIngedient[] = [
    {
      id: 1,
      name: 'peperony',
    },
    {
      id: 2,
      name: 'cheese',
    },
    {
      id: 3,
      name: 'tomato',
    },
    {
      id: 4,
      name: 'pineapple',
    },
    {
      id: 5,
      name: 'mushroom',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {}

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
