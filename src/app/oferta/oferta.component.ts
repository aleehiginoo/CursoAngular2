import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
// import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/RX';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription: Subscription
  // private meuObservableTesteSubscription: Subscription

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'])

    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id)
    // })

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => this.oferta = oferta)

    // this.route.params.subscribe(
    //   (parametro: any) => { console.log(parametro); },
    //   (erro: any) => { console.log(erro); },
    //   () => console.log('concluido')      
    // )

    // let tempo = Observable.interval(2000)

    // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => { console.log(intervalo) })

    // let meuObservableTest = Observable.create((observer: Observer<string>) => {
    //   observer.next('Primeiro evento')
    //   observer.next('Segundo evento')
    //   //observer.error('Erro');      
    //   observer.complete()
    //   observer.next('Nao dispara')

    // })

    // this.meuObservableTesteSubscription = meuObservableTest.subscribe(
    //   (resultado: any) => console.log(resultado),
    //   (erro: string) => console.log(erro),
    //   () => console.log("Finalizado")
    //)
  }

  ngOnDestroy(){
    // this.meuObservableTesteSubscription.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}
