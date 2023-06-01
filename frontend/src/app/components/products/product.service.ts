import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  
  showMessage(msg: string, isError: boolean=true): void {
    this.snackBar.open(msg,'X', {
      duration: 360000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-done']: ['msg-erro']
    })
  }
  create(products: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, products).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
      
    )
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e)=> this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(product:Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(product:Product):Observable<Product>{
    const url= `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
