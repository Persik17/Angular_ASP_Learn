import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Big Pizza',
      Type: 'Pizza',
      Price: 25,
    },
    {
      Id: 2,
      Name: 'Small Pizza',
      Type: 'Pizza',
      Price: 15,
    },
    {
      Id: 3,
      Name: 'Medium Pizza',
      Type: 'Pizza',
      Price: 20,
    },
    {
      Id: 4,
      Name: 'Mega Pizza',
      Type: 'Pizza',
      Price: 40,
    },
    {
      Id: 5,
      Name: 'Big Pizza',
      Type: 'Pizza',
      Price: 25,
    },
    {
      Id: 6,
      Name: 'Small Pizza',
      Type: 'Pizza',
      Price: 15,
    },
    {
      Id: 7,
      Name: 'Medium Pizza',
      Type: 'Pizza',
      Price: 20,
    },
    {
      Id: 8,
      Name: 'Mega Pizza',
      Type: 'Pizza',
      Price: 40,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
