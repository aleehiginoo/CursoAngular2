import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.sevice';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number;

  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaDePagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaDePagamentoValido: boolean;

  public enderecoPristine: boolean = true;
  public numeroPristine: boolean = true;
  public complementoPristine: boolean = true;
  public formaDePagamentoPristine: boolean = true;

  public formEstado: string = 'disabeld';

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //console.log(this.endereco)

    this.enderecoValido = this.endereco.length > 3 ? true : false;
    this.enderecoPristine = false;

    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    //console.log(this.numero)

    this.numeroValido = this.numero.length > 0 ? true : false;
    this.numeroPristine = false;

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    //console.log(this.complemento)

    this.complementoValido = this.complemento.length > 3 ? true : false;
    this.complementoPristine = false;

    this.habilitaForm();
  }

  public atualizaFormaDePagamento(formaDePagamento: string): void {
    this.formaDePagamento = formaDePagamento;
    // console.log(this.formaDePagamento)

    this.formaDePagamentoValido = this.formaDePagamento === '' ? false : true;
    this.formaDePagamentoPristine = false;

    this.habilitaForm();
  }

  public habilitaForm(): void {
    this.formEstado =
      this.enderecoValido && this.numeroValido && this.formaDePagamento
        ? ''
        : 'disabeld';
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaDePagamento = this.formaDePagamento;

    this.ordemCompraService
      .efetivarCompra(this.pedido)
      .subscribe((idPedido: any) => (this.idPedidoCompra = idPedido));
  }
}
