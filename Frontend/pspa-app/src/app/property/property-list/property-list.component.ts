import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  /*   properties: Array<IProperty> | undefined;*/
  properties: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
