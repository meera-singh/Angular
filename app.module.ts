import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { YearTransformPipe } from './year-transform.pipe';
import {ProductlistService} from './productlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    YearTransformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
