import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {
  delete(id: number | undefined) {
    throw new Error('Method not implemented.');
  }
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions']


  constructor(private ProductService: ProductService,) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }


}
