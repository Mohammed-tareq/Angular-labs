import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];
  error: string | null = null;

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private category: ProductService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.category.getAllProducts('products/categories').subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
        this.error = 'Failed to load categories';
      }
    })
  }
  filterByCategory(event: any) {
    let select = event.target.value;
    this.categorySelected.emit(select);

  }
  
}
