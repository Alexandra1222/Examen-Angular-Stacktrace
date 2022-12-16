import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/api/products.service';

@Pipe({
  name: 'currencyChange',
  pure: false
})
export class CurrencyChangePipe implements PipeTransform, OnDestroy {

  public value: string = ''
  private listen$: Array<Subscription> = []

  constructor(private productService: ProductsService) {

  }

  //TODO: Monto en divisa de API 🔴 (USD) --> 100 USD Iphone
  transform(valueIn: number): any {

    const observer1$ = this.productService.currency$
      .subscribe(({ symbol, value }) => { //TODO <------ COP 3770

        //TODO: Agarrar valor que viene del serivicio
        //TODO: 100USD * 20.17MXN = 2.017MXN

        this.value = `${(valueIn * value).toFixed(2)} ${symbol}`
      })

    this.listen$ = [observer1$]

    return this.value
  }

  ngOnDestroy(): void {
    this.listen$.forEach(a => a.unsubscribe())
  }

}
