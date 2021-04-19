import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CheckoutForm } from '../models/checkoutform';

@Injectable()
export class CheckoutFormService {
  private url = 'assets/data/checkoutform.json';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<CheckoutForm[]> {
    return this.http.get<CheckoutForm[]>(this.url);
  }
}
