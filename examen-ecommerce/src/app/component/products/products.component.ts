import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input()productlist:any;
  /* public productlist:any; */

  constructor(private api:ProductsService, private cart:CartService){}

  ngOnInit():void{
    this.api.getProduct().subscribe(res=>{
      console.log(res);
      this.productlist=res;

      this.productlist.forEach((a:any)=>{
        Object.assign(a,{cantidad:1,totalprice:a.PrecioUSD});
      })
    });
    }

    //add to cart
    addtoCart(product:any){
      this.cart.addtoCart(product);
      console.log(product); 

    }

}
