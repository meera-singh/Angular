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
  constructor(private productlistdata: ProductlistService) { 
  //productlist: IProduct[] = []
  this.filterParam = ''
  }

  ngOnInit() {
    this.productList = this.productlistdata.getProduct()
    //console.log(this)
    this.filteredProductList = this.productList;
  };
  _listFilter = '';
  get filterParam (){
    return this._listFilter;
  }
   set filterParam(value:string){
   this._listFilter = value;
   this.filteredProductList = this.filterParam ? this.filterFunction(this.filterParam):this.productList;
   }
  pageTitle = 'Product list';
  showValue = false;
// filterlogic
filterFunction(filterBy){
  filterBy = filterBy.toLowerCase();
  return this.productList.filter((product)=>
  product.productName.toLowerCase().indexOf(filterBy) != -1)

}

  }



