import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { URL_API } from './app.api';

import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    //console.log(pedido);

    let headers: HttpHeaders = new HttpHeaders();

    headers.append('Content-type', 'application/json');

    return this.http
      .post(`${URL_API}/pedidos`, pedido, {
        headers: headers,
      })
      .map((resposta: any) => resposta.id);
  }
}
