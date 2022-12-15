import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products !:any[];
  public total:number=0;

  constructor (private cart:CartService){}
    
  ngOnInit():void{
      this.cart.getproduct().subscribe(res=>{
      this.products = res;
      this.total=this.cart.getTotalPrice();

      })

    }

    emptycart(){
      this.cart.removeallcart();
    }
    delete(product:any){
      this.cart.removecartproduct(product)
    }
  


}
