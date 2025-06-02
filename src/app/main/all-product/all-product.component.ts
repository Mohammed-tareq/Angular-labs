import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { SpinnerComponent } from '../../share/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, CategoriesComponent, SpinnerComponent, FormsModule, RouterLink],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss'
})
export class AllProductComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  cartProducts: any[] = [];
  numQuantity: number = 1;

  constructor(private productSer: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.productSer.getAllProducts('products').subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  getProductsByCategory(event: string) {
    this.loading = true;

    if (event === 'all') {
      return this.getAllProducts();
    }

    this.productSer.getAllProducts(`products/category/${event}`).subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products by category';
        this.loading = false;
        console.error('Error loading products by category:', err);
      }
    });
  }

  addToCart(productItem: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let repeatProductCart = this.cartProducts.find((item) => item.item.id === productItem.item.id);
      if (repeatProductCart) {
        alert("This product is already in your cart");
        return;
      }
    }
    productItem.quantity = this.numQuantity;
    this.cartProducts.push(productItem);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}


