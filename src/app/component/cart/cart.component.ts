import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product : any = [];
  grandTotal: number = 0; 
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res =>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    console.log(this.product);
    
  }

  removeItem(product:any){
    this.cartService.removeCartItem(product);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
