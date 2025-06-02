import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { SpinnerComponent } from '../../share/spinner/spinner.component';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule , SpinnerComponent],
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  id!: number;
  product!: any;
  loading: boolean = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    this.loading = true;
    this.service.getAllProducts(`products/${this.id}`).subscribe({
      next: (data) => {
        
          this.product = data;
        
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product details:', err);
        this.error = 'Failed to load product details. Please try again later.';
         // Optionally, you can set a default value for product if needed
        this.loading = false;
      }
    });
  }
}
