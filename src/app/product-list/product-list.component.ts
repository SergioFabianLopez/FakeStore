// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryParam = params.get('category');
      if (categoryParam !== null) {
        this.category = categoryParam;
        this.getProductsByCategory(this.category);
      } else {
        console.error("Category parameter is null!");
      }
    });
  }

  getProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category)
      .subscribe(products => this.products = products);
  }
}
