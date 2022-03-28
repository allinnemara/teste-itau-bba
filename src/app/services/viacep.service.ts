import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(public http: HttpClient) { }

  async getCEP(cep: string): Promise<any> {
    return await this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/unicode/`).toPromise()
  }
}
