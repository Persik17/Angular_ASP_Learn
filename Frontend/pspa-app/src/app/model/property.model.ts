import { Photo } from './photo.model';
import { PropertyBase } from './property-base.model';

export class Property implements PropertyBase {
  id: number;
  name: string;
  price: number;
  wholesalePrice: number;
  photos?: Photo[];
  photo?: string;
  description: string;
  inStock: boolean;
  article: string;
  rating: number;
  maxDiscount: number;
  employeeDoscount: boolean;

  //color+code = article
  code: number;
  color: string;

  typeId: number;
  type: string;

  materialId: number;
  material: string;

  manufacturerId: number;
  manufacturer: string;

  sizeId: number;
  size: number;
}
