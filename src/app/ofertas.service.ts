import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { Observable } from 'rxjs/Observable'

import { URL_API } from './app.api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

@Injectable()
export class OfertasService {

    //private url: string = 'http://localhost:3000/ofertas'

    constructor( private http: HttpClient) { }

    // public ofertas: Oferta[] = [
    //     {
    //         id: 1,
    //         categoria: "restaurante",
    //         titulo: "Super Burger",
    //         descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    //         anunciante: "Original Burger",
    //         valor: 29.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/1/img1.jpg"},
    //             {url: "/assets/ofertas/1/img2.jpg"},
    //             {url: "/assets/ofertas/1/img3.jpg"},
    //             {url: "/assets/ofertas/1/img4.jpg"}
    //         ]
    //     },
    //     {
    //         id: 2,
    //         categoria: "restaurante",
    //         titulo: "Cozinha Mexicana",
    //         descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    //         anunciante: "Mexicana",
    //         valor: 32.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/2/img1.jpg"},
    //             {url: "/assets/ofertas/2/img2.jpg"},
    //             {url: "/assets/ofertas/2/img3.jpg"},
    //             {url: "/assets/ofertas/2/img4.jpg"}
    //         ]
        
    //     },
    //     {
    //         id: 4,
    //         categoria: "diversao",
    //         titulo: "Estância das águas",
    //         descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    //         anunciante: "Estância das águas",
    //         valor: 31.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/3/img1.jpg"},
    //             {url: "/assets/ofertas/3/img2.jpg"},
    //             {url: "/assets/ofertas/3/img3.jpg"},
    //             {url: "/assets/ofertas/3/img4.jpg"},
    //             {url: "/assets/ofertas/3/img5.jpg"},
    //             {url: "/assets/ofertas/3/img6.jpg"}
    //         ]
    //     }
    // ]
    
    // public getOfertas2(): Promise<Oferta[]> {
    //     return new Promise((resolve, reject) => {
    //         //Algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
    //         if (true)
    //             setTimeout(() => resolve( this.ofertas ), 3000)
    //         else reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' })
    //     })
    //     .then(( ofertas: Oferta[]) => {
    //         return ofertas
    //     })
    //     .then(( ofertas: Oferta[]) => {
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => { resolve2( ofertas ) }, 3000)
    //         })
    //     })
    //     .then(( ofertas: Oferta[]) => {
    //         return ofertas
    //     })
    // }

    public getOfertas(): Promise<Oferta[]> {
        //return this.ofertas;

        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }


    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift().descricao )
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: any) =>  resposta)
    }
}