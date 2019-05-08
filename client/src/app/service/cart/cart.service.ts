import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public httpService:HttpService) { }
  getServiceOfUser(){
    return this.httpService.getConfig('/user/service')
}
addtoCart(data){
  return this.httpService.postJSON("/productcarts/addToCart",data)
}
getCartDetails(cartId){
  return this.httpService.httpGetData("/productcarts/getCartDetails/"+cartId+"")
}
placeOrder(data){
  return this.httpService.postJSON('productcarts/placeOrder',data)
}
getMyCart(){
 return this.httpService.httpGetData('productcarts/myCart')
}
}
