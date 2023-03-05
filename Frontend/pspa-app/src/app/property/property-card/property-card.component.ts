import { Component, Input } from '@angular/core';

import { PropertyBase } from 'src/app/model/property-base.model';
import { Property } from '../../model/property.model';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  @Input() property: PropertyBase;
  @Input() hideIcons: boolean;
 }
