import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './product';
import { ProductlistService } from '../productlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input() search: any;
  @Output() titleClicked: EventEmitter<string> = new EventEmitter<string>()

  onclick(title): void {
    console.log(title);
    this.titleClicked.emit(title);
  }
  constructor(private productlistdata: ProductlistService) { }
  productlist: IProduct[] = []

  ngOnInit() {
    this.productlist = this.productlistdata.getProduct()
  }
  pageTitle = 'Product list';
  showValue = false;
  }



