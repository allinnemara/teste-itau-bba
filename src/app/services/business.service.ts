import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBusiness } from '../interfaces/IBusiness';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  constructor(
    private http: HttpClient
  ) { }

  getBusiness() {
    return this.http.get<IBusiness[]>(`${environment.api}/itau_teste`);
  }

  getBusinessById(businessId: number) {
    return this.http.get<IBusiness>(`${environment.api}/itau_teste/${businessId}`);
  }
}
