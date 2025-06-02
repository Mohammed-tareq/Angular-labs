import { Routes } from '@angular/router';
import { CartComponent } from './main/cart/cart.component';
import { AllProductComponent } from './main/all-product/all-product.component';
import { AuthGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {path: '', component: AllProductComponent},
    {path: 'products', component: AllProductComponent},   
    {path: 'product/:id', loadComponent: () => import('./main/product-detials/product-detials.component').then(p => p.ProductDetailsComponent)},
    {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/products'},
];
