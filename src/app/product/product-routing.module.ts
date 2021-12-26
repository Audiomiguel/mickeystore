import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeetailComponent } from './components/product-deetail/product-deetail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ':id',
        component: ProductDeetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {

}