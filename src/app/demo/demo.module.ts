import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { SharedModule } from './../shared/shared.module'
import { DemoRoutingModule } from './demo-routing.module'
import { DemoComponent } from './components/demo/demo.component'

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        DemoRoutingModule,
        SharedModule,
        BrowserModule,
        FormsModule
    ]
})

export class DemoModule {

}