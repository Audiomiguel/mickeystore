import {
    Component, Input, Output, EventEmitter,
    OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy
} from '@angular/core'
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    today = new Date();
    @Input() product !: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor( 
        private cartService: CartService
    ) {
        console.log('1. constructor')
    }

    /*ngOnChanges(changes: SimpleChanges) {
        //Detecta los cambios del estado anterior con el nuevo
        console.log('2. ngOnChanges');
        console.log(changes);
    }*/

    ngOnInit() {
        console.log('3. Componente muestro en pantalla ngOnInit')
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
        this.cartService.addCart(this.product);
        //this.productClicked.emit(this.product.id)
    }
}