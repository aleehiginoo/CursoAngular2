import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaDePagamento: string = ''
  
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaDePagamentoValido: boolean

  public enderecoPristine: boolean = true
  public numeroPristine: boolean = true
  public complementoPristine: boolean = true
  public formaDePagamentoPristine: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(this.endereco)

    this.enderecoValido = this.endereco.length > 3 ? true : false
    this.enderecoPristine = false
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    //console.log(this.numero)

    this.numeroValido = this.numero.length > 0 ? true : false
    this.numeroPristine = false
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //console.log(this.complemento)

    this.complementoValido = this.complemento.length > 3 ? true : false
    this.complementoPristine = false
  }

  public atualizaFormaDePagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento
   // console.log(this.formaDePagamento)

   this.formaDePagamentoValido = this.formaDePagamento === '' ? false : true
   this.formaDePagamentoPristine = false
  }
}
