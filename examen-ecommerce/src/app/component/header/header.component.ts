import { Component } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalitem=0;
  constructor(private cart:CartService){}

  ngOnInit():void{
    this.cart.getproduct().subscribe(res=>{
    this.totalitem = res.length;

    })
  }
}
