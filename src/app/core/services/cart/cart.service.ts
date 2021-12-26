import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Product } from 'src/app/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {

  }

  addCart(product: Product) {
    //No mutation, nueva referencia cada vez para no tener problemas de Inmutabilidad
    this.products = [...this.products, product]; 
    this.cart.next(this.products);
  }
}
