import { IPhoto } from '../interface/iphoto';
import { IProperty } from '../interface/iproperty';
import { IIngedient } from '../interface/iingredient';

export class Property implements IProperty {
  id: number;
  name: string;
  price: number;
  image?: string;
  size: { sm: number; gr: number };
  dough: string;
  description: string;
  ingedient: IIngedient[];
  type: number;
}
