import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';

import '../utils/rxjs-extensions'

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {

        return termo.trim() === ''
          ? Observable.of<Oferta[]>([])
          : this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => Observable.of<Oferta[]>([]))

    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertas2 = ofertas)
  }

  // public pesquisa(event: Event): void {
  //   (<HTMLInputElement>event.target).value
  // }

  // public pesquisa(termoDaBusca: string): void {
  //   this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)

  //   this.ofertas.subscribe(
  //     (ofertas: Oferta[]) => console.log(ofertas),
  //     (erro: any) => console.log('Status erro: ', erro.status),
  //     () => console.log('Completo')
  //   )
  // }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

}
