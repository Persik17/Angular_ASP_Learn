import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/service/product.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  ProductType = 1;
  properties!: Array<IProperty>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.ProductType = 2; //on march-property url
    }

    this.productService.getAllProperties(this.ProductType).subscribe(
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
