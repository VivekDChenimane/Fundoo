import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  service: string = '';
  selected: any;
  noCart: any;
  cond: string = 'signin';
  address: string = '';
  public value = 25;
  cartid: any;
  public forCss;
  public firstCss = true;

  constructor(public cartService: CartService, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.cartid=localStorage.getItem('cartid');
    this.getCart()
  }
  getCart(){
    this.cartService.getMyCart().subscribe(data=>{
      console.log(data,"mycartdetails")
      if(data['data'].length>0){
       this.selected= data['data'][0]['product'];
       this.cartid=data['data'][0].id
       console.log(this.cartid,"selected")
      }
      else{
        this.noCart=data['data']
        console.log(this.noCart,"cart")
      }
    })
  }
  
  
  
  placeOrder(){
    if(this.address==''){
      this.snackbar.open('address should not be empty',"close", {
        duration: 3000
      });
    }
    else{
      this.cartService.placeOrder( {"cartId":this.cartid,"address":this.address}).subscribe(data=>{
        console.log(data,"placeoder")
        this.cond='complete';
        this.value = 100
        this.forCss = false

      }) 
    }
  
    
  }
}
