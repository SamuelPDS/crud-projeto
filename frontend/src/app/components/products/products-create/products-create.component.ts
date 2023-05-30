import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product: Product = {
  name: '',
  price: 0
}

constructor(private productService: ProductService, private router:Router){}

ngOnInit(): void{

}

createProduct(): void{
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto Criado!')
    this.router.navigate(['/products'])                                                                        
  })
  
}

cancel(): void{
  this.router.navigate(['/products'])
}
}
