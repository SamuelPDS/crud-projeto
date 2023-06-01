import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductReadComponent } from '../product-read/product-read.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
product: Product = {} as Product;
  
constructor( private router: Router, private productService: ProductService,
private route: ActivatedRoute  ){}

ngOnInit(): void{
const id = this.route.snapshot.paramMap.get('id')
if (id!=null){
  const idnumber= parseInt(id, 10)
  this.productService.readById(idnumber).subscribe((product)=> {
    this.product = product
  })
}
}

deleteProd(): void{
  this.productService.delete(this.product).subscribe(() => {
    this.productService.showMessage('Produto excluído!')
    this.router.navigate(['/products'])
  })
}

cancel(): void{
  this.router.navigate(['/products'])
}
}
