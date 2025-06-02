import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProducts(item: string): Observable<any> {
    return this.http.get(this.apiUrl + item);
  }
}
