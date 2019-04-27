import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmProductComponent } from '../confirm-product/confirm-product.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public noteService:NoteService,public dialog: MatDialog,public router:Router) { }
  private records;
  private clicked = false;
  private cards=[];
  private service;

  ngOnInit() {
    this.getServices()

  }
  getServices() {
    this.records = this.noteService.getServiceOfUser()
    .subscribe(data => {
      for (var i = 0; i < data["data"].data.length; i++) {
        data["data"].data[i].select = false;
        this.cards.push(data["data"].data[i]);
      }
      console.log(this.cards)
      var value = data["data"].data.name;
    })
  }
  openDialog(product): void {
    const dialogRef = this.dialog.open(ConfirmProductComponent, {
      width: '600px',
      height: '300px',
      data:product
    });
  }

  selectCards(product) {
    this.service=product.name
    product.select=true;
    for(var i=0;i<this.cards.length;i++){
      if(product.name==this.cards[i].name){
      continue}
      this.cards[i].select=false
    }
  }
  cartAdd(cart) {
    console.log(cart.id)
    this.noteService.addtoCart(
      {
        "productId": cart.id
      }
      
    ).subscribe(
      (data) => {
        console.log("successfully added to cart", data)
        localStorage.setItem("cartId",data['data']['details'].id)
      }, error => {
        console.log("Error ", error)
      }
    )
}
  login(){
    this.router.navigate(['login'])
  }
}
