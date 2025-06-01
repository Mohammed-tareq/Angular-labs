import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from "../search/search.component";

interface user {
  img: string;
  name: string;
  email: string;
  phone: number;
  isActive: boolean;
}
@Component({
  selector: 'app-cart',
  imports: [CommonModule, SearchComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements  AfterViewInit {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

ngAfterViewInit(): void {
    // Access the SearchComponent instance after the view has been initialized
    // console.log(this.searchComponent);
  }


  userAction:boolean= false;


 

  userInfo : user[] = [{
    img:"assets/images/cat-1.jpg",
    name: 'John Doe',
    email:"a@gc.com",
    phone: 1234567890,
    isActive: true
  },
  {
    img:"assets/images/cat-111.jpg",
    name: 'John Doe',
    email:"a@gc.com",
    phone: 1234567890,
    isActive: false
  },
  {
    img:"assets/images/cat-1.jpg",
    name: 'John Doe',
    email:"a@gc.com",
    phone: 1234567890,
    isActive: true
  },
  {
    img:"assets/images/cat-111.jpg",
    name: 'John Doe',
    email:"a@gc.com",
    phone: 1234567890,
    isActive: false
  },
  {
    img:"assets/images/cat-1.jpg",
    name: 'John Doe',
    email:"a@gc.com",
    phone: 1234567890,
    isActive: true
  },
];


}
