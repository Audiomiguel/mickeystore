import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from './../shared/shared.module'
import { ProductComponent } from './components/product/product.component'
import { ProductDeetailComponent } from './components/product-deetail/product-deetail.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductRoutingModule } from './product-routing.module'
import { MaterialModule } from '../material/material.module'

@NgModule({
    declarations: [
        ProductComponent,
        ProductDeetailComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule,
        MaterialModule
    ]
})

export class ProductModule {

}