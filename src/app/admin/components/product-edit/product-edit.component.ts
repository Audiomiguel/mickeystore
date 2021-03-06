import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form !: FormGroup;
  idSaved !: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.idSaved = params['id'];
      this.productsService.getProduct(this.idSaved)
        .subscribe(product => {
          this.form.patchValue(product)
        })

    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value
      this.productsService.updateProduct(this.idSaved, product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        })
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

}
