import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productlist:any;
  //para hacer el cambio de moneda
  public currency = { symbol: 'USD', value: 1 }
  currency$: BehaviorSubject<any> = new BehaviorSubject<any>(this.currency)

  constructor(private http:HttpClient) { }

  //get method
  getProduct(){
    return this.http.get("http://localhost:3004/Juguetes")
    /*  */
    
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  //cambio de moneda
  setCurrency(symbol: string, value: number): void {
    const productlist = {
      symbol,
      value
    }
    this.currency$.next(productlist);
  }

  //usando api de cambio de divisas
  getCurrencies(): Observable<any> {
    return this.http.get('https://v1.nocodeapi.com/leifermendez/cx/EWBnLVhPRyGHNdDn/rates')
  }
}
