import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Property } from '../model/property';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProperties(ProductType: number): Observable<Property[]> {
    return this.http.get('/data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<Property> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].ProductType === ProductType) {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
}
