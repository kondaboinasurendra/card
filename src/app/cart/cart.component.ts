import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  cartCount:any=0
  products:any=[]
  constructor(private share:SharedService){
    this.share.getData.subscribe(Response=>{
      if(Response){
        this.products.push(Response);
        console.log(this.products);
        this.cartCount=this.products.length;
      }
    })
  }

}
