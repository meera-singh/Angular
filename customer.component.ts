import { Component, OnInit } from '@angular/core';
import { CustomerProduct } from './customerlist';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

   constructor() { }

   ngOnInit() {
  }
  pageTitle= 'Customer List';
  Customers: CustomerProduct[] = [
    {
      "CustId": 1,
      "CustName": "joseph",
      "Custphoneno": 35678990,
      "Custage": 22,
      "Custgender": "Male",
    },
    {
      "CustId": 2,
      "CustName": "Mosh",
      "Custphoneno": 3523678990,
      "Custage": 23,
      "Custgender": "Male",
    }
];
}


