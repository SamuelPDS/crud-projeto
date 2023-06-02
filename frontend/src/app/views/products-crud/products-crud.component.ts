import { HeaderServiceTsService } from './../../components/template/header/header.service.ts.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

constructor(private router: Router, private headerService: HeaderServiceTsService) {
  headerService.headerData = {
    title: 'Cadastro de Produtos',
    icon: 'store',
    routeUrl: '/products'}
}

  ngOnInit(): void {
      
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }
  
}
