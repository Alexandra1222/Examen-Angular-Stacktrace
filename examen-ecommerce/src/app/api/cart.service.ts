import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productlist =  new BehaviorSubject<any>({})
  public cartitemlist:any=[]


  constructor() { }

  //get
  getproduct(){
    return  this.productlist.asObservable();

  }

  //add to cart
  addtoCart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist)
    this.getTotalPrice();
  }

  //total price
  getTotalPrice():number{
    let total=0;
    this.cartitemlist.map((a:any)=>{
      total += a.totalprice;
      console.log(total);
      
    })
    return total;
  }

  //empty or delete all
  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist)
  }
  removecartproduct(product:any){
    this.cartitemlist.map((a:any,index:any)=>{
      if(product.id ===a.id)
      this.cartitemlist.splice(index,1)
    })
    this.productlist.next(this.cartitemlist);

  }




}
