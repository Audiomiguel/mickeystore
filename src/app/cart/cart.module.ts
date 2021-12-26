import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import { SharedModule } from './../shared/shared.module'
import { CartRoutingModule } from './cart-routing.module'

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        SharedModule
    ]
})

export class CartModule {

}