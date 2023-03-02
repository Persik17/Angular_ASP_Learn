import { IPhoto } from './iphoto';

export interface IProperty {
  id: number;
  name: string;
  price: number;
  image?: string;
  size: {
    sm: number;
    gr: number;
  };
  dough: string;
  description: string;
  type : number;
}
