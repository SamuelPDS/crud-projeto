import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
product: Product = {} as Product;


constructor(
  private router: Router, 
  private ProductService: ProductService, 
  private route: ActivatedRoute
){}



ngOnInit(): void{
  const id = this.route.snapshot.paramMap.get("id")
  if(id!=null){
    const prodId = parseInt(id)
  this.ProductService.readById(prodId).subscribe((product) =>{
    this.product=product
  })
}
}

updateProduct(): void{}

cancel(): void{
  this.router.navigate(['/products'])
}
}
