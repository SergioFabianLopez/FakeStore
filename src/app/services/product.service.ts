// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsByCategory(category: string): Observable<any[]> {
    console.log(category)
    return this.http.get<any[]>('https://fakestoreapi.com/products/category/' + category);
  }
}
