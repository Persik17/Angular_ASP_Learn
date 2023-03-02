import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { IProperty } from '../model/interface/iproperty';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get('/data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
}
