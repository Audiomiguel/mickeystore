import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy
} from '@angular/core'
import { ProductsService } from 'src/app/core/services/products/products.service';

import { Product } from '../../../product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  today = new Date();
  products: Product[] = [];

  @Input() product !: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private productsService: ProductsService
  ) {
    console.log('1. constructor')
  }



  ngOnInit() {
    console.log('3. Componente muestro en pantalla ngOnInit')
    this.fetchProducts()
  }

  ngDoCheck() {
    //Detecta la detencion de cambios a tu manera 
    console.log('4. DO Check')
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy')
  }

  addCart() {
    console.log('Añadiendo al carrito');
    this.productClicked.emit(this.product.id)
  }

  clickProduct(id: number) {
    console.log('product Id')
    console.log(id)
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products
      });
  }
}
