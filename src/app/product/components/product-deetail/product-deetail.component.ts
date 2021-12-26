import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-deetail',
  templateUrl: './product-deetail.component.html',
  styleUrls: ['./product-deetail.component.scss']
})
export class ProductDeetailComponent implements OnInit {

  product !: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product
      })
  }

  //For Knownledge
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/hoodie.png',
      price: 3000,
      description: 'Nuevo producto POST'

    }

    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product)
      })
  }

  //For knownledge
  updateProduct() {
    const newProduct: Partial<Product> = {
      title: 'Edicion del titulo',
      price: 5500,
    }
    this.productsService.updateProduct('1',newProduct)
      .subscribe(product => {
        console.log(product)
      })
  }

  deleteProduct(){
    this.productsService.deleteProduct('2')
    .subscribe(response => {
      console.log(response)
    })
  }
}

